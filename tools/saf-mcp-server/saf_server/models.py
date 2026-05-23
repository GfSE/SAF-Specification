from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Concept:
    name: str
    id: str
    class_type: str
    documentation: str
    inherits_from: list[dict]
    is_general_for: list[dict]
    association_ends: list[dict]
    in_viewpoint: list[dict]


@dataclass
class Viewpoint:
    name: str
    id: str
    vp_id: str
    domain: str
    aspect: str
    purpose: str
    applicability: str
    maturity: str
    exposure: str
    presentation: list[str]
    stakeholder_ids: list[str]
    concern_ids: list[str]
    recommended_vp_ids: list[str]
    required_vp_ids: list[str]


@dataclass
class Concern:
    name: str
    id: str
    documentation: str
    owner: str
    concerns_viewpoints: list[dict]


@dataclass
class Rationale:
    id: str
    documentation: str
    concern_id: str
    concern_name: str
    stakeholder_id: str
    stakeholder_name: str


@dataclass
class Stakeholder:
    name: str
    id: str
    documentation: str
    rationales: list[dict]


@dataclass
class Expose:
    id: str
    concept_id: str
    concept_name: str
    viewpoint_id: str
    viewpoint_name: str
