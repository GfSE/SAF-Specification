import json
import hashlib
import os
from pathlib import Path

from .models import Concept, Viewpoint, Concern, Rationale, Stakeholder, Expose, Stereotype, RealizeConcept, SpecialImplementation


def _normalize(text: str) -> str:
    return " ".join(text.strip().lower().split())


def _text_hash(text: str) -> str:
    return hashlib.sha256(_normalize(text).encode()).hexdigest()


def _format_special_impl(si: SpecialImplementation) -> dict:
    """Format a SpecialImplementation with semantic role labels instead of client/supplier."""
    base = {
        "id": si.id,
        "name": si.name,
        "documentation": si.documentation.strip(),
        "relation_type": si.stereotype,
    }
    if si.stereotype == "SCM_TypedBy":
        base["typed_element"] = si.client_name
        base["typed_element_id"] = si.client_id
        base["type_definition"] = si.supplier_name
        base["type_definition_id"] = si.supplier_id
    elif si.stereotype == "SCM_ContainedIn":
        base["contained_element"] = si.client_name
        base["contained_element_id"] = si.client_id
        base["container"] = si.supplier_name
        base["container_id"] = si.supplier_id
    elif si.stereotype == "SCM_Attribute":
        base["owner"] = si.client_name
        base["owner_id"] = si.client_id
        base["value"] = si.supplier_name
        base["value_id"] = si.supplier_id
    else:
        base["client"] = si.client_name
        base["client_id"] = si.client_id
        base["supplier"] = si.supplier_name
        base["supplier_id"] = si.supplier_id
    return base


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
        self.concerns_by_name: dict[str, Concern] = {}
        self.rationales: list[Rationale] = []
        self.rationales_by_concern_guid: dict[str, list[Rationale]] = {}
        self.stakeholders: dict[str, Stakeholder] = {}
        self.stakeholders_by_name: dict[str, Stakeholder] = {}
        self.exposes: list[Expose] = []
        self.exposes_by_viewpoint_guid: dict[str, list[Expose]] = {}
        self.stereotypes: dict[str, Stereotype] = {}         # guid -> Stereotype
        self.stereotypes_by_name: dict[str, Stereotype] = {}
        self.realize_concepts: list[RealizeConcept] = []
        self.realizations_by_concept_id: dict[str, list[RealizeConcept]] = {}      # concept id -> list
        self.realizations_by_stereotype_id: dict[str, list[RealizeConcept]] = {}   # stereotype id -> list
        self.special_implementations: list[SpecialImplementation] = []
        self.special_impls_by_stereotype: dict[str, list[SpecialImplementation]] = {}
        self.special_impls_by_client_name: dict[str, list[SpecialImplementation]] = {}
        self.special_impls_by_supplier_name: dict[str, list[SpecialImplementation]] = {}
        self._load()

    def _load(self):
        self._load_viewpoints()
        self._load_concerns()
        self._load_stakeholders()
        self._load_rationales()
        self._load_concepts()
        self._load_exposes()
        self._load_stereotypes()
        self._load_realizeconcept()
        self._load_special_implementations()

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
                category=item.get("Owner", ""),
                concerns_viewpoints=item.get("ConcernsViewpoints", []),
            )
            self.concerns[c.id] = c
            self.concerns_by_text_hash[_text_hash(c.name)] = c
            self.concerns_by_name[c.name.lower()] = c

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
            self.stakeholders_by_name[sh.name.lower()] = sh

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

    def _load_stereotypes(self):
        arr = self._json("stereotypes.json")
        for item in arr:
            s = Stereotype(
                name=item["Name"],
                id=item["ID"],
                documentation=item.get("Documentation", ""),
            )
            self.stereotypes[s.id] = s
            self.stereotypes_by_name[s.name.lower()] = s

    def _load_realizeconcept(self):
        arr = self._json("realizeconcept.json")
        for item in arr:
            rc = RealizeConcept(
                id=item["ID"],
                name=item.get("Name", ""),
                documentation=item.get("Documentation", ""),
                realized_concept_id=item["RealizedConcept"]["ID"],
                realized_concept_name=item["RealizedConcept"]["Name"],
                realization_of_concept_id=item["RealizationOfConcept"]["ID"],
                realization_of_concept_name=item["RealizationOfConcept"]["Name"],
            )
            self.realize_concepts.append(rc)
            self.realizations_by_concept_id.setdefault(rc.realized_concept_id, []).append(rc)
            self.realizations_by_stereotype_id.setdefault(rc.realization_of_concept_id, []).append(rc)

    def _load_special_implementations(self):
        arr = self._json("special-implementations.json")
        for item in arr:
            si = SpecialImplementation(
                id=item["ID"],
                name=item.get("Name", ""),
                documentation=item.get("Documentation", ""),
                stereotype=item.get("Stereotype", ""),
                client_id=item["Client"]["ID"],
                client_name=item["Client"]["Name"],
                supplier_id=item["Supplier"]["ID"],
                supplier_name=item["Supplier"]["Name"],
            )
            self.special_implementations.append(si)
            self.special_impls_by_stereotype.setdefault(si.stereotype, []).append(si)
            self.special_impls_by_client_name.setdefault(si.client_name.lower(), []).append(si)
            self.special_impls_by_supplier_name.setdefault(si.supplier_name.lower(), []).append(si)

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

    def find_stakeholder(self, name_or_id: str) -> Stakeholder | None:
        key = name_or_id.lower()
        sh = self.stakeholders_by_name.get(key)
        if sh:
            return sh
        return self.stakeholders.get(name_or_id)

    def find_concern(self, name_or_id: str) -> Concern | None:
        key = name_or_id.lower()
        cn = self.concerns_by_name.get(key)
        if cn:
            return cn
        return self.concerns.get(name_or_id)

    def find_stereotype(self, name_or_id: str) -> Stereotype | None:
        key = name_or_id.lower()
        s = self.stereotypes_by_name.get(key)
        if s:
            return s
        return self.stereotypes.get(name_or_id)

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

    def search(self, query: str, type_filter: str | None = None, include_content: bool = False) -> list[dict]:
        q = query.lower()
        results = []
        if type_filter is None or type_filter == "viewpoint":
            for vp in self.viewpoints.values():
                if q in vp.name.lower() or q in vp.vp_id.lower():
                    results.append({"type": "viewpoint", "name": vp.name, "identifier": vp.vp_id or vp.id})
                elif include_content and (q in vp.purpose.lower() or q in vp.applicability.lower()):
                    results.append({"type": "viewpoint", "name": vp.name, "identifier": vp.vp_id or vp.id})
        if type_filter is None or type_filter == "concept":
            for c in self.concepts.values():
                if q in c.name.lower():
                    results.append({"type": "concept", "name": c.name, "identifier": c.id})
                elif include_content and q in c.documentation.lower():
                    results.append({"type": "concept", "name": c.name, "identifier": c.id})
        if type_filter is None or type_filter == "concern":
            for cn in self.concerns.values():
                if q in cn.name.lower():
                    results.append({"type": "concern", "name": cn.name, "identifier": cn.id})
                elif include_content and q in (cn.documentation or "").lower():
                    results.append({"type": "concern", "name": cn.name, "identifier": cn.id})
        if type_filter is None or type_filter == "stakeholder":
            for sh in self.stakeholders.values():
                if q in sh.name.lower():
                    results.append({"type": "stakeholder", "name": sh.name, "identifier": sh.id})
                elif include_content and q in sh.documentation.lower():
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
            "applicability": vp.applicability.strip(),
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
                "category": cn.category,
                "stakeholders": stakeholders_with_rationales,
            })
        return results


    def get_stakeholder_profile(self, stakeholder: Stakeholder) -> dict:
        return {
            "name": stakeholder.name,
            "id": stakeholder.id,
            "documentation": stakeholder.documentation.strip(),
            "rationales": [
                {
                    "concern": r.get("ConcernName", r.get("Concern", "")),
                    "rationale": r.get("Rationale", ""),
                }
                for r in stakeholder.rationales
            ],
        }

    def get_concern_detail(self, concern: Concern) -> dict:
        viewpoints = []
        for vp_ref in concern.concerns_viewpoints:
            vp = self.viewpoints.get(vp_ref.get("ID", ""))
            viewpoints.append({
                "name": vp.name if vp else vp_ref.get("Name", ""),
                "id": vp_ref.get("ID", ""),
            })
        return {
            "name": concern.name,
            "id": concern.id,
            "category": concern.category,
            "viewpoints": viewpoints,
        }

    def list_concepts(self) -> list[dict]:
        results = []
        for c in self.concepts.values():
            results.append({
                "name": c.name,
                "type": c.class_type,
                "id": c.id,
            })
        results.sort(key=lambda x: x["name"].lower())
        return results

    def list_concerns(self) -> list[dict]:
        results = []
        for cn in self.concerns.values():
            results.append({
                "name": cn.name,
                "category": cn.category,
                "id": cn.id,
            })
        results.sort(key=lambda x: x["name"].lower())
        return results

    def list_stakeholders(self) -> list[dict]:
        results = []
        for sh in self.stakeholders.values():
            results.append({
                "name": sh.name,
                "id": sh.id,
            })
        results.sort(key=lambda x: x["name"].lower())
        return results

    # ── Stereotype / RealizeConcept queries ────────────────────────────────

    def list_stereotypes(self) -> list[dict]:
        results = []
        for s in self.stereotypes.values():
            realized = self.realizations_by_stereotype_id.get(s.id, [])
            special_count = sum(
                1 for si in self.special_implementations
                if si.client_name.lower() == s.name.lower() or si.supplier_name.lower() == s.name.lower()
            )
            results.append({
                "name": s.name,
                "id": s.id,
                "realized_concepts": [rc.realized_concept_name for rc in realized],
                "special_implementation_count": special_count,
            })
        results.sort(key=lambda x: x["name"].lower())
        return results

    def get_stereotype_neighborhood(self, stereotype: Stereotype) -> dict:
        realizations = self.realizations_by_stereotype_id.get(stereotype.id, [])
        realized_detail = []
        for rc in realizations:
            concept = self.concepts.get(rc.realized_concept_id)
            realized_detail.append({
                "concept_name": rc.realized_concept_name,
                "concept_id": rc.realized_concept_id,
                "concept_type": concept.class_type if concept else None,
                "concept_documentation": concept.documentation.strip() if concept else None,
            })
        special_impls = []
        for si in self.special_implementations:
            if si.client_name.lower() == stereotype.name.lower() or si.supplier_name.lower() == stereotype.name.lower():
                special_impls.append(_format_special_impl(si))
        return {
            "name": stereotype.name,
            "id": stereotype.id,
            "documentation": stereotype.documentation.strip(),
            "realized_concepts": realized_detail,
            "special_implementations": special_impls,
        }

    def get_concept_stereotypes(self, concept: Concept) -> list[dict]:
        realizations = self.realizations_by_concept_id.get(concept.id, [])
        results = []
        for rc in realizations:
            ster = self.stereotypes.get(rc.realization_of_concept_id)
            realized_concepts = [rc.realized_concept_name]
            if ster:
                realized_self = self.realizations_by_stereotype_id.get(ster.id, [])
                realized_concepts = [r.realized_concept_name for r in realized_self]
            special_impls = []
            if ster:
                for si in self.special_implementations:
                    if si.supplier_name.lower() == ster.name.lower():
                        special_impls.append(_format_special_impl(si))
            results.append({
                "stereotype_name": rc.realization_of_concept_name,
                "stereotype_id": rc.realization_of_concept_id,
                "stereotype_documentation": ster.documentation.strip() if ster else None,
                "realized_concepts": realized_concepts,
                "special_implementations": special_impls,
            })
        return results

    def get_special_implementations(self, stereotype_name: str | None = None) -> list[dict]:
        results = []
        for si in self.special_implementations:
            if stereotype_name and si.client_name.lower() != stereotype_name.lower() and si.supplier_name.lower() != stereotype_name.lower():
                continue
            results.append(_format_special_impl(si))
        return results


def create_store(data_dir: str | None = None) -> DataStore:
    if data_dir is None:
        # Default: look relative to this file's location
        here = Path(__file__).resolve().parent
        data_dir = here.parent.parent.parent / "src" / "_data"
    return DataStore(str(data_dir))
