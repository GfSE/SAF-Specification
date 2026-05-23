import json
import hashlib
import os
from pathlib import Path

from .models import Concept, Viewpoint, Concern, Rationale, Stakeholder, Expose


def _normalize(text: str) -> str:
    return " ".join(text.strip().lower().split())


def _text_hash(text: str) -> str:
    return hashlib.sha256(_normalize(text).encode()).hexdigest()


class DataStore:
    def __init__(self, data_dir: str):
        self.data_dir = Path(data_dir)
        self.concepts: dict[str, Concept] = {}       # guid -> Concept
        self.concepts_by_name: dict[str, Concept] = {}
        self.viewpoints: dict[str, Viewpoint] = {}   # guid -> Viewpoint
        self.viewpoints_by_name: dict[str, Viewpoint] = {}
        self.viewpoints_by_vpid: dict[str, Viewpoint] = {}
        self.concerns: dict[str, Concern] = {}       # guid -> Concern
        self.concerns_by_text_hash: dict[str, Concern] = {}
        self.rationales: list[Rationale] = []
        self.rationales_by_concern_guid: dict[str, list[Rationale]] = {}
        self.stakeholders: dict[str, Stakeholder] = {}
        self.exposes: list[Expose] = []
        self.exposes_by_viewpoint_guid: dict[str, list[Expose]] = {}
        self._load()

    def _load(self):
        self._load_viewpoints()
        self._load_concerns()
        self._load_stakeholders()
        self._load_rationales()
        self._load_concepts()
        self._load_exposes()

    def _load_viewpoints(self):
        arr = self._json("viewpoints.json")
        for item in arr:
            vp = Viewpoint(
                name=item["Name"],
                id=item["ID"],
                vp_id=item.get("VP_ID", ""),
                domain=item.get("Domain", ""),
                aspect=item.get("Aspect", ""),
                purpose=item.get("Purpose", ""),
                applicability=item.get("Applicability", ""),
                maturity=item.get("Maturity", ""),
                exposure=item.get("Exposure", ""),
                presentation=item.get("Presentation", []),
                stakeholder_ids=item.get("Stakeholders", []),
                concern_ids=item.get("Concern", []),
                recommended_vp_ids=item.get("RecommendedVP", []),
                required_vp_ids=item.get("RequiredVP", []),
            )
            self.viewpoints[vp.id] = vp
            self.viewpoints_by_name[vp.name.lower()] = vp
            if vp.vp_id:
                self.viewpoints_by_vpid[vp.vp_id.lower()] = vp

    def _load_concerns(self):
        arr = self._json("concerns.json")
        for item in arr:
            c = Concern(
                name=item["Name"],
                id=item["ID"],
                documentation=item.get("Documentation", ""),
                owner=item.get("Owner", ""),
                concerns_viewpoints=item.get("ConcernsViewpoints", []),
            )
            self.concerns[c.id] = c
            self.concerns_by_text_hash[_text_hash(c.name)] = c

    def _load_stakeholders(self):
        arr = self._json("stakeholders.json")
        for item in arr:
            # Resolve inline rationales (text-only concern refs) using text hash
            resolved_rationales = []
            for r in item.get("Rationales", []):
                concern_text = r.get("Concern", "")
                concern_obj = self.concerns_by_text_hash.get(_text_hash(concern_text))
                resolved_rationales.append({
                    "Rationale": r.get("Rationale", ""),
                    "Concern": concern_text,
                    "ConcernID": concern_obj.id if concern_obj else None,
                    "ConcernName": concern_obj.name if concern_obj else concern_text,
                })
            sh = Stakeholder(
                name=item["Name"],
                id=item["ID"],
                documentation=item.get("Documentation", ""),
                rationales=resolved_rationales,
            )
            self.stakeholders[sh.id] = sh

    def _load_rationales(self):
        arr = self._json("rationales.json")
        for item in arr:
            r = Rationale(
                id=item.get("ID", ""),
                documentation=item.get("Documentation", ""),
                concern_id=item["Concern"]["ID"],
                concern_name=item["Concern"]["Name"],
                stakeholder_id=item["Stakeholder"]["ID"],
                stakeholder_name=item["Stakeholder"]["Name"],
            )
            self.rationales.append(r)
            self.rationales_by_concern_guid.setdefault(r.concern_id, []).append(r)

    def _load_concepts(self):
        arr = self._json("concepts.json")
        for item in arr:
            c = Concept(
                name=item["Name"],
                id=item["ID"],
                class_type=item.get("ClassType", "Class"),
                documentation=item.get("Documentation", ""),
                inherits_from=item.get("InheritsFrom", []),
                is_general_for=item.get("IsGeneralFor", []),
                association_ends=item.get("AssociationEnds", []),
                in_viewpoint=item.get("InViewpoint", []),
            )
            self.concepts[c.id] = c
            self.concepts_by_name[c.name.lower()] = c

    def _load_exposes(self):
        arr = self._json("exposes.json")
        for item in arr:
            e = Expose(
                id=item["ID"],
                concept_id=item["ExposedConcept"]["ID"],
                concept_name=item["ExposedConcept"]["Name"],
                viewpoint_id=item["Viewpoint"]["ID"],
                viewpoint_name=item["Viewpoint"]["Name"],
            )
            self.exposes.append(e)
            self.exposes_by_viewpoint_guid.setdefault(e.viewpoint_id, []).append(e)

    def _json(self, filename: str) -> list:
        path = self.data_dir / filename
        with open(path, encoding="utf-8") as f:
            return json.load(f)

    # --- Lookup helpers ---

    def find_viewpoint(self, name_or_id: str) -> Viewpoint | None:
        key = name_or_id.lower()
        vp = self.viewpoints_by_name.get(key)
        if vp:
            return vp
        vp = self.viewpoints_by_vpid.get(key)
        if vp:
            return vp
        return self.viewpoints.get(name_or_id)

    def find_concept(self, name_or_id: str) -> Concept | None:
        key = name_or_id.lower()
        c = self.concepts_by_name.get(key)
        if c:
            return c
        return self.concepts.get(name_or_id)

    def resolve_concept_refs(self, refs: list[dict]) -> list[dict]:
        resolved = []
        for ref in refs:
            c = self.concepts.get(ref["ID"])
            resolved.append({
                "name": c.name if c else ref.get("Name", ref["ID"]),
                "id": ref["ID"],
                "multiplicity": ref.get("Multiplicity"),
            })
        return resolved

    def get_concept_neighborhood(self, concept: Concept) -> dict:
        return {
            "name": concept.name,
            "type": concept.class_type,
            "documentation": concept.documentation.strip(),
            "inherits_from": self.resolve_concept_refs(concept.inherits_from),
            "is_general_for": self.resolve_concept_refs(concept.is_general_for),
            "relationships": [
                {
                    "target": self.concepts.get(ae["ID"]).name if self.concepts.get(ae["ID"]) else ae.get("Name", ae["ID"]),
                    "multiplicity": ae.get("Multiplicity", ""),
                    "via": concept.name,
                }
                for ae in concept.association_ends
            ],
            "exposed_in_viewpoints": [
                {"name": vp_ref.get("Name", ""), "id": vp_ref["ID"]}
                for vp_ref in concept.in_viewpoint
            ],
        }

    def search(self, query: str, type_filter: str | None = None) -> list[dict]:
        q = query.lower()
        results = []
        if type_filter is None or type_filter == "viewpoint":
            for vp in self.viewpoints.values():
                if q in vp.name.lower() or q in vp.vp_id.lower():
                    results.append({"type": "viewpoint", "name": vp.name, "identifier": vp.vp_id or vp.id})
        if type_filter is None or type_filter == "concept":
            for c in self.concepts.values():
                if q in c.name.lower():
                    results.append({"type": "concept", "name": c.name, "identifier": c.id})
        if type_filter is None or type_filter == "concern":
            for cn in self.concerns.values():
                if q in cn.name.lower():
                    results.append({"type": "concern", "name": cn.name, "identifier": cn.id})
        if type_filter is None or type_filter == "stakeholder":
            for sh in self.stakeholders.values():
                if q in sh.name.lower():
                    results.append({"type": "stakeholder", "name": sh.name, "identifier": sh.id})
        return results

    def list_viewpoints(self, domain: str | None = None, aspect: str | None = None, maturity: str | None = None) -> list[dict]:
        results = []
        for vp in self.viewpoints.values():
            if domain and vp.domain.lower() != domain.lower():
                continue
            if aspect and vp.aspect.lower() != aspect.lower():
                continue
            if maturity and vp.maturity.lower() != maturity.lower():
                continue
            results.append({
                "name": vp.name,
                "vp_id": vp.vp_id,
                "domain": vp.domain,
                "aspect": vp.aspect,
                "maturity": vp.maturity,
                "exposure": vp.exposure,
            })
        results.sort(key=lambda x: x["vp_id"])
        return results

    def _resolve_guid_list(self, guids: list[str], lookup: dict) -> list[str]:
        return [lookup[g].name if g in lookup else g for g in guids]

    def get_viewpoint_overview(self, vp: Viewpoint) -> dict:
        concern_questions = []
        for cid in vp.concern_ids:
            cn = self.concerns.get(cid)
            if cn:
                concern_questions.append(cn.name)
        stakeholder_names = self._resolve_guid_list(vp.stakeholder_ids, self.stakeholders)
        exposed_names = []
        for expose in self.exposes_by_viewpoint_guid.get(vp.id, []):
            exposed_names.append(expose.concept_name)
        return {
            "name": vp.name,
            "vp_id": vp.vp_id,
            "domain": vp.domain,
            "aspect": vp.aspect,
            "purpose": vp.purpose.strip(),
            "exposure": vp.exposure,
            "maturity": vp.maturity,
            "stakeholders": sorted(set(stakeholder_names)),
            "concern_questions": concern_questions,
            "exposed_concept_names": sorted(set(exposed_names)),
            "required_viewpoints": self._resolve_guid_list(vp.required_vp_ids, self.viewpoints),
            "recommended_viewpoints": self._resolve_guid_list(vp.recommended_vp_ids, self.viewpoints),
        }

    def get_viewpoint_concepts(self, vp: Viewpoint) -> list[dict]:
        results = []
        seen = set()
        for expose in self.exposes_by_viewpoint_guid.get(vp.id, []):
            if expose.concept_id in seen:
                continue
            seen.add(expose.concept_id)
            c = self.concepts.get(expose.concept_id)
            if c:
                results.append(self.get_concept_neighborhood(c))
        return results

    def get_viewpoint_concerns(self, vp: Viewpoint) -> list[dict]:
        results = []
        for cid in vp.concern_ids:
            cn = self.concerns.get(cid)
            if not cn:
                continue
            stakeholders_with_rationales = []
            for rat in self.rationales_by_concern_guid.get(cid, []):
                sh = self.stakeholders.get(rat.stakeholder_id)
                stakeholders_with_rationales.append({
                    "name": sh.name if sh else rat.stakeholder_name,
                    "rationale": rat.documentation,
                })
            results.append({
                "question": cn.name,
                "owner": cn.owner,
                "stakeholders": stakeholders_with_rationales,
            })
        return results


def create_store(data_dir: str | None = None) -> DataStore:
    if data_dir is None:
        # Default: look relative to this file's location
        here = Path(__file__).resolve().parent
        data_dir = here.parent.parent.parent / "src" / "_data"
    return DataStore(str(data_dir))
