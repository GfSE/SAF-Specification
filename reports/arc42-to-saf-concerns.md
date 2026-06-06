# arc42 → SAF Concern Mapping

Maps engineering questions from arc42 documentation and FAQ posts to SAF (System Architecture Framework) concerns, identifying gaps.

## Introduction

### Purpose

This document extracts engineering questions (concerns) that an architecture description should answer from the arc42 documentation and FAQ, and maps them against the concerns already defined in the SAF ontology. The goal is to identify concerns that arc42 practitioners consider important but are not yet framed as SAF concerns.

### Source Repositories

Two arc42 repositories are analyzed:

| Repo | Content | Path |
|---|---|---|
| [docs.arc42.org-site](https://github.com/arc42/docs.arc42.org-site.git) | Canonical documentation pages for each arc42 section | `/workspace/docs.arc42.org-site/_pages/section-<N>.md` |
| [faq.arc42.org-site](https://github.com/arc42/faq.arc42.org-site.git) | Community-contributed FAQ posts; each post explores a specific question | `/workspace/faq.arc42.org-site/_posts/C-arc42/<section>/` |

### Methodology

The analysis follows these steps for each arc42 section:

1. **Read the documentation page** (`_pages/section-<N>.md`) for the section. Extract engineering questions from its Content, Motivation, Form, and any sub-section descriptions.
2. **Read all FAQ posts** in the corresponding `_posts/C-arc42/<section>/` directory. Each post contains a question (title) and an answer/discussion. Extract both the explicit title question and any sub-questions surfaced in the discussion.
3. **Extract engineering questions** — both the explicit title question and any sub-questions surfaced in the text. These represent what a stakeholder might want to know about the architecture.
4. **Map to SAF terminology** using the established correspondence:
   - arc42 "business context" → SAF "conceptual" domain
   - arc42 "technical context" → SAF "physical" domain
   - arc42 section numbers → SAF domains/aspects where applicable
5. **Cross-reference against existing SAF concerns** by querying the SAF ontology API for concerns framed by relevant viewpoints. Each extracted question is classified as:
   - ✅ **Covered** — a SAF concern already frames the same question
   - ⚠️ **Partial** — a SAF concern touches on the topic but does not fully address it
   - ❌ **Gap** — no SAF concern frames this question
6. **Record gaps** in a summary table at the end of each section, capturing the missing concern and its source.

### Framework Paradigm Difference

SAF and arc42 operate at different scope levels, which is critical for interpreting gaps:

| Dimension | arc42 | SAF |
|---|---|---|
| **Scope** | Software architecture documentation template | Model-Based Systems Engineering (MBSE) framework |
| **Domain coverage** | Solution-oriented (conceptual + physical/technical) | Operational + Conceptual + Physical + Architecture Management |
| **"Why"** | Briefly covered in §1 (Introduction & Goals) | **Operational domain** extensively models mission, capability gaps, stakeholder needs before solution design |
| **"What"** | Requirements overview (§1), Context (§3) | Conceptual domain (System Context, Structure, Functions) |
| **"How"** | Building blocks (§5), Deployment (§7) | Physical domain (Physical Structure, Deployment) |
| **MBSE integration** | Not MBSE — documentation-focused | Full MBSE — model-based with formal ontology |

Because arc42 focuses on software architecture documentation (not systems engineering), it has **no equivalent** to SAF's **Operational domain** (O1-O8 viewpoints). The Operational domain in SAF addresses:
- Operational stories/missions and scenarios
- Operational capability definition and gap analysis
- Operational performer and stakeholder identification
- Operational processes, states, and interactions
- Stakeholder requirement definition

Therefore, some concerns that arc42 treats briefly (or not at all) — such as detailed operational mission analysis, capability-based acquisition, and stakeholder needs analysis — **are well-covered by SAF's Operational domain** even though arc42 doesn't ask about them. These are marked as **⚠️ covered by Operational domain** rather than ❌ gaps.

Conversely, arc42 is a documentation template that includes **project management concerns** which are out of scope for SAF. For example, arc42 asks who is responsible for documenting specific views, what level of detail is appropriate, and how to balance documentation effort against other concerns. These process/documentation-management questions are not part of SAF's ontology, which focuses on the system being described rather than the documentation process itself. Such gaps reflect a difference in scope rather than a genuine shortcoming in either framework.

### Document Structure

The document follows arc42's 12-section structure. Sections that have not yet been analyzed contain a placeholder.

### Terminology

| Term | Meaning |
|---|---|---|
| arc42 doc | Canonical documentation page for an arc42 section (`_pages/section-<N>.md`) |
| arc42 FAQ | Community-contributed Q&A posts (`_posts/C-arc42/<section>/`) |
| SAF | System Architecture Framework — an architecture framework with a formal ontology of concepts, viewpoints, and concerns |
| Concern | A question a stakeholder has about a system; what the architecture description must answer |
| Viewpoint | A perspective on the system that frames a set of related concerns |
| Conceptual domain | SAF domain for logical/functional/black-box views (≈ arc42 business context) |
| Physical domain | SAF domain for implementation/hardware views (≈ arc42 technical context) |
| Operational domain | SAF domain for mission/capability/stakeholder analysis; no equivalent in arc42 |
| Exchange Type (as domain model) | SAF's domain modeling happens via Operational Exchange Type (O2_OETD) and System Exchange Type (C2_SETD) viewpoints. These define entity types, their attributes, and relationships (via `composed of`). The name "exchange type" reflects that most domain concepts are visible on conceptual interfaces — what flows between performers or functions. This is SAF's equivalent of a domain/business entity model. |
| ⚠️ Covered by Operational domain | A concern arc42 asks that is addressed by SAF's Operational domain (out of arc42's scope) |

---

## 01 — Requirements

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Quality goals / quality attributes | Distributed across SAF quality-related concerns (reliability, security, etc.) |
| Stakeholder table | Stakeholder concept (D2_STKD) / Stakeholder Requirement (O6_SKRD) |
| Requirements overview | System Requirement (C8_SRQT) / Stakeholder Requirement (O6_SKRD) |

---

### Documentation Page (section-1.md)

#### 1.0 — Introduction and Goals (general)

**Content:** Business goals, essential features, functional requirements, quality goals, relevant stakeholders and their expectations.

**Motivation:** Driving forces that architects and development team must consider.

| Engineering concern / question | SAF coverage |
|---|---|
| What are the underlying business goals driving the system? | ⚠️ Covered by Operational domain — O1_OSTY (operational story), O2_OCYD (operational capability definition), and O1_OCXD (operational context) collectively analyze the mission, capability needs, and operational environment that drive system existence. |
| What are the essential features and functional requirements? | ✅ C3_SPRO: "Which functions will the system provide?" / "What is the functional scope of the system?" |
| What are the quality goals for the architecture? | ⚠️ Partial — SAF has reliability, security quality concerns, but no general "quality goal" concern. |

#### 1.1 — Requirements Overview

**Content:** Short description of functional requirements, links to requirements documents.

**Motivation:** From the end user perspective, system improves support of business activity or quality.

| Engineering concern / question | SAF coverage |
|---|---|
| What is a short overview of the functional requirements? | ✅ C3_SPRO: "What is the functional scope of the system?" |
| Where are the detailed requirements documents? | ❌ **GAP** — Out of scope (documentation practice). No concern asks where to find requirements or references external documents — see paradigm note in Introduction. |
| How to balance readability with redundancy vs. requirements documents? | ❌ **GAP** — Out of scope (documentation practice). No concern about documentation economy or level of detail for requirements — see paradigm note in Introduction. |

#### 1.2 — Quality Goals

**Content:** Top 3-5 quality goals with concrete scenarios, ordered by priority.

**Motivation:** Stakeholder quality goals influence fundamental architectural decisions.

| Engineering concern / question | SAF coverage |
|---|---|
| What are the top quality goals for the architecture? | ❌ **GAP** — SAF has no concern that asks to prioritize or rank quality goals. Individual quality attributes (reliability, security) have concerns but no holistic quality goals overview. |
| How to distinguish between runtime, non-runtime, and business quality attributes? | ❌ **GAP** — SAF does not categorize quality attributes this way. |
| How to make quality goals concrete and measurable via scenarios? | ❌ **GAP** — SAF has no quality scenario concept. |

#### 1.3 — Stakeholders

**Content:** Overview of stakeholders — persons, roles, or organizations with interest in the architecture.

**Motivation:** Know all parties involved or affected; they determine extent and level of detail of architecture work.

| Engineering concern / question | SAF coverage |
|---|---|
| Who are the stakeholders of the system? | ✅ D2_STKD: "Who are the architecture framework stakeholders of the frameworks viewpoints?" — but this is meta-framework level. O6_SKRD mentions stakeholders. |
| What does each stakeholder expect from the architecture or its documentation? | ⚠️ **Partial** — O2_STID asks "What concerns and rationals does a Stakeholder have?" which covers stakeholder interests broadly, but does not specifically ask what *deliverables* each stakeholder expects from the architecture team. |
| Who should know, be convinced of, work with, or decide about the architecture? | ⚠️ **Partial** — O2_STID asks "In which phases of the life cycle is a Stakeholder involved in the project?" which covers stakeholder lifecycle involvement, but does not categorize them by *type* of involvement (know, be convinced, work with, decide). |

---

### FAQ Posts

#### Post C-1-1: "How extensive shall I describe requirements?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How detailed should requirements be described in the architecture documentation?** | ❌ **GAP** — Out of scope (documentation practice). No concern about appropriate granularity — see paradigm note in Introduction. |

#### Post C-1-2: "What are quality goals (quality attributes)?"

| Engineering concern / question | SAF coverage |
|---|---|
| What distinguishes runtime, non-runtime, and business quality attributes? | ❌ **GAP** — SAF doesn't categorize quality attributes by observability at runtime. |

#### Post C-1-3 to C-1-5: Stakeholder table and deliverables

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the expected deliverables from architecture for each stakeholder?** | ❌ **GAP** — Out of scope (project management). SAF doesn't ask what each stakeholder expects to receive from the architecture team — see paradigm note in Introduction. |

#### Post C-1-6: "When to describe requirements more extensively?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Which requirements have disproportionate architectural impact?** | ❌ **GAP** — No concern identifies which requirements have outsized influence on architecture decisions. |

#### Post C-1-7: "Where to document quality requirements?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to split quality requirements between high-priority (section 1.2) and the rest (section 10)?** | ❌ **GAP** — Out of scope (documentation practice). SAF has no concept of splitting requirements across documentation sections — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 01

| # | Missing Concern | Source |
|---|---|---|
| 11 | Where are detailed requirements documents referenced? | doc §1.1 |
| 12 | How to balance readability vs. redundancy with requirements docs? | doc §1.1 |
| 13 | What are the top prioritized quality goals for the architecture? | doc §1.2 |
| 14 | How to distinguish runtime, non-runtime, and business quality attributes? | C-1-2 |
| 15 | How to make quality goals measurable via concrete scenarios? | doc §1.2 |
| 16 | What does each stakeholder expect from the architecture (deliverables)? | doc §1.3, C-1-3/4/5 |
| 17 | Who should know, be convinced of, work with, or decide about the architecture? | doc §1.3 |
| 18 | How detailed should requirements be in architecture documentation? | C-1-1 |
| 19 | Which requirements have disproportionate architectural impact? | C-1-6 |
| 20 | How to split quality requirements between high-priority and the rest? | C-1-7 |

Gap #11 (business goals) is addressed by SAF's Operational domain (O1_OSTY, O2_OCYD, O1_OCXD) — see detailed analysis.

---

## 02 — Constraints

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Constraints (technical, organizational, conventions) | No equivalent concept in SAF |
| — | O6_SKRD captures operational lifecycle constraints (environment, performance, validation) but NOT supplier/development constraints |

**Paradigm note:** O6_SKRD's purpose states it "captures constraints for the system to be developed from stakeholders perspective," but the concerns it actually frames focus on the *operational life cycle* — environmental conditions, performance requirements, validation criteria. arc42's constraint concerns in §2 are about *building the system*: what restricts the architects' and developers' freedom during design, implementation, and delivery. These are constraints on the supplier's work, not on the system's operational life. SAF's Operational domain does not capture supplier/development constraints, so these remain genuine gaps.

---

### Documentation Page (section-2.md)

**Content:** Any requirement that constrains architects' freedom of design and implementation decisions or development process decisions.

**Motivation:** Architects should know exactly where they are free and where they must adhere to constraints.

**Form:** Tables of constraints, subdivided into technical, organizational/political, and conventions.

| Engineering concern / question | SAF coverage |
|---|---|
| **What constraints restrict design and implementation freedom?** | ❌ **GAP** — O6_SKRD captures *operational* constraints (environmental conditions, performance, validation) but not *supplier/development* constraints. arc42 constraints are about restrictions on the architects' and developers' freedom during system creation — a concern absent from SAF. |
| **What types of constraints apply: technical, organizational, or conventions?** | ❌ **GAP** — SAF has no constraint categorization concept. The arc42 distinction between technical, organizational, and convention constraints is a documentation convention for supplier work, not an operational concern. |
| **Which constraints are negotiable vs. fixed?** | ❌ **GAP** — SAF does not model constraint negotiability, which is a project management concern related to the supplier's work. |

---

### FAQ Posts

#### Post C-2-1: "What are constraints?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What constraints restrict freedom in architectural decisions?** | ❌ **GAP** — O6_SKRD operational constraints do not cover supplier/development constraints on architect freedom. |

#### Post C-2-2: "What types of constraints exist?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to differentiate organizational, technical, and convention constraints?** | ❌ **GAP** — SAF has no concept of categorizing constraints by type. The arc42 categorization applies to supplier work constraints, not operational context. |

#### Post C-2-3: "What kind of constraints shall I document?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Which constraints shaped important architectural decisions?** | ❌ **GAP** — SAF does not link constraints to architectural decisions, nor does it have a general constraint concept for supplier work. |

#### Post C-2-4: "Can/shall we negotiate constraints?"

| Engineering concern / question | SAF coverage |
|---|---|
| **When should unfavorable, risky, or expensive constraints be negotiated?** | ❌ **GAP** — Out of scope (project management). SAF does not model constraint negotiability — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 02

O6_SKRD captures *operational* constraints (environmental conditions, performance, validation criteria for the system in use) but NOT the *supplier/development* constraints that arc42 §2 focuses on — restrictions on architects' and developers' freedom during design, implementation, and delivery. These remain genuine gaps.

| # | Missing Concern | Source |
|---|---|---|
| 22 | What constraints restrict freedom of design and implementation? | doc §2, C-2-1 |
| 23 | What are the types of constraints (technical, organizational, conventions)? | C-2-2 |
| 24 | Which constraints shaped important architectural decisions? | C-2-3 |
| 25 | When should unfavorable/risky/expensive constraints be negotiated? | C-2-4 |

---

## 03 — Context

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Business context (domain inputs/outputs, no technology) | Conceptual System Context — C1_SCXD + C1_SCXE |
| Technical context (channels, protocols, hardware, network) | Physical System Context — P1_PCXD + P1_PCXE |
| External interfaces (domain level) | Conceptual Interaction Point / Conceptual Item Exchange |
| External interfaces (technical level) | Physical Interaction Point / Physical Item Exchange |
| Physical channel (transmission medium) | Physical Connection (connects two Physical Interaction Points) |

---

### Documentation Page (section-3.md)

#### 3.0 — Context and Scope (general)

**Content:** System scope and context delimits the system from all its communication partners (neighboring systems and users). It specifies the external interfaces. If necessary, differentiate business context from technical context.

**Motivation:** Domain interfaces and technical interfaces to communication partners are among the system's most critical aspects.

**Form:** Context diagrams; lists of communication partners and their interfaces.

| Engineering concern / question | SAF coverage |
|---|---|
| What is the system scope — what delimits the system from its environment? | ✅ C1_SCXD: "Which are the given contexts the system is embedded and utilized in?" |
| Which are the communication partners (neighboring systems, users)? | ✅ C1_SCXD: "Which interface partners does the system have?" / "Which are the external conceptual entities the system interacts with?" |
| What are the external interfaces? | ✅ C1_SCXE: "Which are the conceptual interfaces of the system?" |
| **How do the Conceptual System Context and Physical System Context relate — what traceability exists between Conceptual Item Exchanges and Physical Connections?** | ❌ **GAP** — SAF has separate viewpoints for conceptual context (C1_SCXD/C1_SCXE) and physical context (P1_PCXD/P1_PCXE). P8_PLOM maps conceptual elements to physical *elements* (functions/components), but no concern asks how context-level exchanges map to physical connections (channels). |

#### 3.1 — Business Context

**Content:** Specification of *all* communication partners (users, IT-systems, ...) with explanations of domain-specific inputs and outputs or interfaces. Optionally add domain-specific formats or communication protocols.

**Motivation:** All stakeholders should understand which data are exchanged with the environment.

**Form:** Black-box diagrams showing the system and domain interfaces; alternatively a table with columns for communication partner, inputs, and outputs.

| Engineering concern / question | SAF coverage |
|---|---|
| Who are all communication partners (users, IT systems, ...) at the domain level? | ✅ C1_SCXD: "Which interface partners does the system have?" |
| What domain-specific inputs and outputs (or interfaces) exist? | ✅ C1_SCXE: "Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?" |
| What domain-specific formats or communication protocols apply? | ✅ P1_PCXE covers standards/protocols at the physical level, but domain-specific (conceptual) protocols are less explicitly covered. |
| **What data is exchanged with the environment of the system (stakeholder understanding)?** | ✅ C1_SCXE: "Which kind of conceptual items ... are exchanged between the system and external entities?" |
| **How can context elements be abstracted or aggregated (table of partners, inputs, outputs)?** | ❌ **GAP** — Out of scope (documentation practice). No concern asks about abstraction level or representation format — see paradigm note in Introduction. |

#### 3.2 — Technical Context

**Content:** Technical interfaces (channels and transmission media) linking the system to its environment. In addition a **mapping of domain-specific I/O to channels** — i.e., an explanation of which I/O uses which channel.

**Motivation:** Many stakeholders make architectural decisions based on technical interfaces. Especially infrastructure or hardware designers decide these technical interfaces.

**Form:** UML deployment diagram describing channels to neighboring systems, together with a mapping table of channels to I/O.

| Engineering concern / question | SAF coverage |
|---|---|
| What technical interfaces (channels, transmission media) link the system to its environment? | ✅ P1_PCXE: "Which are the external physical entities the system interacts with?" / "Which standards, protocols, and format specifications apply to a physical interface?" / Physical Connection connects Physical Interaction Points. |
| **Which Physical Connection realizes each Conceptual Item Exchange (mapping of domain I/O to channels)?** | ❌ **GAP** — SAF defines conceptual exchanges (C1_SCXE) and physical connections (P1_PCXE) separately. P8_PLOM maps conceptual elements to physical *elements*, but does not map conceptual item exchanges to physical connections. The context-level traceability between exchanged items and the channels carrying them is missing. |
| Who are the stakeholders for technical context decisions (infrastructure, hardware designers)? | ✅ P1_PCXD lists stakeholders: Hardware Developer, Mechanic Developer, Software Developer, System Architect. |

---

### FAQ Posts

#### Post C-3-1: "What is the context?"

**Question:** What delimits the system from its communication partners? What are the external interfaces?

| Engineering concern / question | SAF coverage |
|---|---|
| Which external communication partners delimit the system scope? | ✅ C1_SCXD: "Which interface partners does the system have?" / "Which are the external conceptual entities the system interacts with?" |
| What are the external interfaces? | ✅ C1_SCXE: "Which are the conceptual interfaces of the system?" / P1_PCXE: "Which standards, protocols, and format specifications apply to a physical interface?" |
| **How do the Conceptual System Context and Physical System Context relate — what traceability exists between Conceptual Item Exchanges and Physical Connections?** | ❌ **GAP** — SAF has separate viewpoints for conceptual context (C1_SCXD/C1_SCXE) and physical context (P1_PCXD/P1_PCXE). P8_PLOM maps conceptual elements to physical *elements* (functions/components), but no concern asks how context-level exchanges map to physical connections (channels). |

#### Post C-3-2: "What does business and technical context mean?"

**Question:** What is the difference between domain-level interactions and technical infrastructure?

| Engineering concern / question | SAF coverage |
|---|---|
| What domain-specific business interactions exist with the environment? | ✅ C1_SCXD definition covers conceptual external entities. |
| What technical infrastructure, hardware details, protocols, and network details define the physical context? | ✅ P1_PCXD / P1_PCXE cover physical external entities, physical items exchanged, standards/protocols. |
| **When is the physical/technical context relevant vs. deferrable to deployment?** | ❌ **GAP** — Out of scope (documentation practice). Deciding when to include physical context is a documentation scoping decision — see paradigm note in Introduction. |

#### Post C-3-3: "Does it make sense to show major components in context view?"

**Question:** Should context view show internal structure or remain black-box?

| Engineering concern / question | SAF coverage |
|---|---|
| **How is the context view (external scope) separated from internal building block structure?** | ❌ **GAP** — Out of scope (documentation practice). SAF marks context viewpoints as "BlackBox" exposure; the boundary between scoping and internal architecture is assumed — see paradigm note in Introduction. |

#### Post C-3-4: "When shall I document the business context?"

**Answer:** Always. (Design guidance, not a question.)

#### Post C-3-5: "How can I simplify documentation of the business context?"

**Question:** How can context documentation be kept lean?

| Engineering concern / question | SAF coverage |
|---|---|
| **How can external context elements be abstracted or aggregated?** | ❌ **GAP** — Out of scope (documentation practice). No concern asks about abstraction level or granularity — see paradigm note in Introduction. |
| **How can communication partners be categorized into meaningful groups or clusters?** | ❌ **GAP** — Out of scope (documentation practice). SAF defines concrete element types but does not address grouping strategies — see paradigm note in Introduction. |

#### Post C-3-6: "Shall I document risks or problems in the context?"

**Question:** What risks associated with external interfaces need attention?

| Engineering concern / question | SAF coverage |
|---|---|
| What security risks exist at external interfaces (sensitive data crossing the boundary)? | ⚠️ Partial — C7_SECT (Security Context) covers adversaries, attack vectors, and assumptions, but not explicitly interface-specific security risk. |
| **What availability risks exist at external interfaces (external system downtime)?** | ❌ **GAP** — Not framed as a concern in SAF. |
| **What cost risks exist at external interfaces (expensive per-call usage)?** | ❌ **GAP** — Out of scope (project/business risk). Not framed as a concern in SAF — see paradigm note in Introduction. |
| **What volatility/change risks exist at external interfaces (frequent interface changes)?** | ❌ **GAP** — Out of scope (project/contract management). Not framed as a concern in SAF — see paradigm note in Introduction. |
| **What complexity risks exist at external interfaces (complex data structures, esoteric protocols)?** | ❌ **GAP** — Out of scope (project/process). Not framed as a concern in SAF — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 03

| # | Missing Concern | Source |
|---|---|---|
| 1 | How do the conceptual (business) context and physical (technical) context relate and map at the context level? | doc §3.0, C-3-1 |
| 2 | Which Physical Connection realizes each Conceptual Item Exchange (i.e., which channel carries which domain I/O)? | doc §3.2 |
| 3 | When is physical/technical context relevant vs. deferrable to deployment? | C-3-2 |
| 4 | How is the context view (external scope) separated from internal architecture? | C-3-3 |
| 5 | How can external context elements be abstracted or aggregated? | doc §3.1, C-3-5 |
| 6 | How can communication partners be categorized into meaningful groups? | C-3-5 |
| 7 | What availability risks exist at external interfaces? | C-3-6 |
| 8 | What cost risks exist at external interfaces? | C-3-6 |
| 9 | What volatility/change risks exist at external interfaces? | C-3-6 |
| 10 | What complexity risks exist at external interfaces? | C-3-6 |

---

## 04 — Strategy

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Solution strategy / fundamental decisions | No equivalent concept or viewpoint |
| Technology decisions, architectural patterns, decomposition | Implicit in structure and function viewpoints, but not framed as decisions |

---

### Documentation Page (section-4.md)

**Content:** Short summary of fundamental decisions and solution strategies: technology decisions, top-level decomposition, architectural patterns, quality approach, organizational decisions.

**Motivation:** These decisions form the cornerstones for the architecture; basis for many detailed decisions.

**Form:** Table linking quality goals → scenarios → solution approaches → links to details.

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the fundamental technology decisions shaping the architecture?** | ❌ **GAP** — SAF has no concept of technology decisions or design rationale. |
| **What architectural patterns or design patterns were chosen and why?** | ❌ **GAP** — No concern about patterns applied. |
| **How does the solution approach address key quality goals?** | ❌ **GAP** — No traceability from quality goals to solution approaches. |
| **What organizational decisions (process, third-party delegation) affect architecture?** | ❌ **GAP** — Out of scope (project management). No concern about organizational/process decisions — see paradigm note in Introduction. |

---

### FAQ Posts

#### Post C-4-1: "What is the solution strategy?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the fundamental solution ideas and strategies?** | ❌ **GAP** — SAF has no concept of a solution strategy summary. |

#### Post C-4-2: "How to document the solution strategy?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to present solution strategy at the right abstraction level for diverse stakeholders?** | ❌ **GAP** — Out of scope (documentation practice). No concern about presentation/abstraction for mixed audiences — see paradigm note in Introduction. |

#### Post C-4-3: "Examples for solution strategy"

| Engineering concern / question | SAF coverage |
|---|---|
| (Examples of technology decisions, pattern applications) | ❌ **GAP** — See above. |

#### Post C-4-4: "Relation between solution strategy and quality goals"

| Engineering concern / question | SAF coverage |
|---|---|
| **How do solution approaches achieve specific quality requirements?** | ❌ **GAP** — No traceability concern linking quality goals to solution approaches. |

---

### Summary of Gaps — Section 04

| # | Missing Concern | Source |
|---|---|---|
| 26 | What are the fundamental technology decisions shaping the architecture? | doc §4, C-4-1 |
| 27 | What architectural/decomposition patterns were chosen and why? | doc §4, C-4-3 |
| 28 | How do solution approaches address key quality goals (traceability)? | doc §4, C-4-4 |
| 29 | What organizational decisions affect the architecture? | doc §4 |
| 30 | How to present solution strategy at the right abstraction level? | C-4-2 |

---

## 05 — Building Blocks

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Building block (module, component, subsystem, class, etc.) | Conceptual System element / Physical Element |
| Whitebox (internal structure) | System Structure Definition (C2_SSTD) / Physical Structure Definition (P2_PSTD) |
| Blackbox (interface only) | Conceptual System / Interaction Point |
| Internal interfaces | System Internal Exchange (C4_SIEX) / Physical Internal Exchange (P4_PIEX) |
| External interfaces | System Context Exchange (C1_SCXE) / Physical Context Exchange (P1_PCXE) |

---

### Documentation Page (section-5.md)

#### 5.0 — Building Block View (general)

**Content:** Static decomposition of the system into building blocks with dependencies. Hierarchical: Level 1 (whitebox overall system + blackbox descriptions), Level 2+ (zoom into selected blocks).

**Motivation:** Maintain overview of source code through abstraction; communicate with stakeholders at abstract level.

| Engineering concern / question | SAF coverage |
|---|---|
| What is the static decomposition of the system into building blocks? | ✅ C2_SSTD: "What is the conceptual breakdown of the system?" / P2_PSTD: "What is the physical breakdown of the system?" |
| What are the dependencies (relationships, associations) between building blocks? | ⚠️ Partial — C4_SIEX covers conceptual connections between elements; no concern explicitly about general dependency/association. |
| **What is the responsibility/purpose of each building block?** | ❌ **GAP** — SAF structure viewpoints identify elements but no concern asks "what does this element do?" |
| **Where is the source code located for each building block?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not link architecture elements to source code location — see paradigm note in Introduction. |

#### 5.1 — Whitebox Overall System

**Content:** Decomposition overview diagram, motivation for decomposition, blackbox descriptions of contained building blocks, optional important interfaces.

| Engineering concern / question | SAF coverage |
|---|---|
| **What is the motivation or rationale for the decomposition?** | ❌ **GAP** — SAF shows the decomposition but does not ask *why* it was done that way. |
| **What interfaces does each building block expose?** | ✅ C4_SIEX: "How do the conceptual system elements interact?" / "What are the items exchanged?" |

#### 5.2 — Level 2 (and 5.3 Level 3)

**Content:** Inner structure of selected building blocks. Focus on important, surprising, risky, complex, or volatile blocks.

| Engineering concern / question | SAF coverage |
|---|---|
| **Which building blocks are important enough to detail at deeper levels?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not ask which elements warrant deeper decomposition — see paradigm note in Introduction. |
| **What is the inner structure of important building blocks?** | ✅ C2_SSTD + hierarchy allows recursive decomposition, but no concern asks about selecting which blocks to decompose. |

---

### FAQ Posts

#### Post C-5-1: "What is a building block?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What source code constructs are abstracted as building blocks?** | ❌ **GAP** — Out of scope (documentation practice). SAF defines Conceptual System but not what source-level constructs it maps to — see paradigm note in Introduction. |

#### Post C-5-2: "Do third-party libraries count?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Should external libraries/frameworks be shown in the building block view?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not address inclusion of third-party/COTS elements in structural views — see paradigm note in Introduction. |

#### Post C-5-3: "How does source code relate to building blocks?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How does the source code directory/organization map to building blocks?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not trace architecture elements to source code artifacts — see paradigm note in Introduction. |

#### Post C-5-4: "How detailed shall we document the building block view?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What level of building block detail is appropriate for stakeholders?** | ❌ **GAP** — Out of scope (documentation practice). No concern about appropriate documentation depth — see paradigm note in Introduction. |

#### Post C-5-6: "How to document building blocks?"

| Engineering concern / question | SAF coverage |
|---|---|
| What is the responsibility of each blackbox? | ❌ **GAP** — SAF doesn't ask about element responsibility. |
| What is the interface of each blackbox (input/output, API)? | ✅ C4_SIEX covers conceptual interaction points and item exchanges. |

#### Post C-5-8 / C-5-9: Internal vs. external interfaces

| Engineering concern / question | SAF coverage |
|---|---|
| How to describe internal interfaces between building blocks? | ✅ C4_SIEX: "How do the conceptual system elements interact?" / P4_PIEX for physical level. |
| How do external interfaces differ from internal ones in terms of risk and stakeholder control? | ❌ **GAP** — SAF has separate viewpoints for context vs. internal exchange, but no concern asks about the difference in risk/stakeholder management. |

#### Post C-5-10: "How to avoid interface redundancy across hierarchy levels?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to avoid redundant interface descriptions across context, level-1, and level-2 views?** | ✅ **Covered** — SAF separates interface definitions from their application to interaction points, allowing interface definition libraries to be reused across hierarchy levels without redundancy. |

#### Post C-5-12 / C-5-13: "What building blocks to document or omit?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Which building blocks should be documented (important, risky, complex, business-critical) vs. omitted (small, generic, purely technical)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not guide selection of which elements to describe — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 05

| # | Missing Concern | Source |
|---|---|---|
| 31 | What is the responsibility/purpose of each building block? | doc §5.1, C-5-6 |
| 32 | Where is the source code located for each building block? | doc §5.1 |
| 33 | What is the motivation/rationale for the decomposition? | doc §5.1 |
| 34 | Which building blocks are important enough to detail at deeper levels? | doc §5.2, C-5-4 |
| 35 | Which building blocks should be documented vs. omitted? | C-5-12, C-5-13 |
| 36 | Should external/COTS libraries be shown in building blocks? | C-5-2 |
| 37 | How does source code directory structure map to building blocks? | C-5-3 |
| 38 | How do external vs. internal interfaces differ in risk and stakeholder control? | C-5-8, C-5-9 |

---

## 06 — Runtime

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Runtime scenario / behavior | System Context Interaction (C4_SCXI) / System Process (C3_SPRO) |
| Building block interactions | System Internal Exchange (C4_SIEX) / Physical Internal Exchange (P4_PIEX) |
| Sequence of interactions | System Context Chronological Message / System Context Interaction Scenario |

---

### Documentation Page (section-6.md)

**Content:** Concrete behavior and interactions of building blocks in scenarios: important use cases, critical external interface interactions, operation/administration (startup, stop), error/exception scenarios.

**Motivation:** Understand how building blocks perform their job and communicate at runtime; communicate to stakeholders less willing to read static models.

| Engineering concern / question | SAF coverage |
|---|---|
| How do building blocks execute important use cases or features? | ✅ C4_SCXI: "How is the system being used or utilized and interacting with other external systems to satisfy user needs?" |
| How do building blocks interact at critical external interfaces? | ✅ C4_SCXI covers system-context interactions. |
| **How does the system behave at startup, shutdown, and during operation/administration?** | ✅ **Covered** — O3_OSTA (Operational State) captures state changes observable at the operational level (e.g., aircraft takeoff vs. in-flight, with consequences for crew procedures). C3_SSTA (System State) defines system-level modes and states directly, asking "Which modes and states does the system have?" and "Which system functions depend on a system's mode or state?" — this covers startup, shutdown, operation, and administration states. System states are a necessary consequence of operational states; both viewpoints act together. |
| **How does the system behave in error or exception scenarios?** | ❌ **GAP** — SAF has no general error/failure scenario concern. |
| **Which building block is responsible for which runtime activities or functions?** | ✅ **Covered** — C8_SFUM (System Function Mapping) asks "Which functions are allocated to which parts of the conceptual architecture?" P8_PFUM (Physical Functional Mapping) asks "What is the mapping of functions to the physical SOI physical architecture?" Together they cover function allocation at both conceptual and physical levels. |

---

### FAQ Posts

#### Post C-6-1 / C-6-2: "What is the runtime view?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What scenarios should be captured (use cases, external interfaces, startup, errors)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not guide which scenarios are architecturally relevant — see paradigm note in Introduction. |

#### Post C-6-3: "How to describe scenarios?"

| Engineering concern / question | SAF coverage |
|---|---|
| (plain text, activity diagrams, sequence diagrams as notations) | ⚠️ Partial — SAF supports sequence-like interaction scenarios (C4_SCXI) but does not guide notation choice. |

#### Post C-6-4: "What are partial scenarios?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to document only the interesting/difficult/risky parts of a scenario without the trivial parts?** | ❌ **GAP** — Out of scope (documentation practice). No concern about scenario abstraction or partial/de-scoped scenarios — see paradigm note in Introduction. |

#### Post C-6-5: "Which scenarios to describe?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Which scenarios are architecturally relevant (general case, external interactions, quality-affecting, error conditions, startup/shutdown, non-standard behavior, timing constraints)?** | ❌ **GAP** — Out of scope (documentation practice). SAF has no selection criteria for which scenarios are worth documenting — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 06

| # | Missing Concern | Source |
|---|---|---|
| 40 | How does the system behave in error or exception scenarios? | doc §6 |
| 41 | Which scenarios are architecturally relevant to document? | C-6-2, C-6-5 |
| 42 | How to focus on interesting/risky parts of scenarios (partial scenarios)? | C-6-4 |
| 43 | How to document timing-constrained or non-standard behavior? | C-6-5 |

Gap #40 (startup/shutdown behavior) is fully covered by SAF — O3_OSTA (Operational State) captures operational-level state changes, and C3_SSTA (System State) defines system-level modes and states directly. Both viewpoints act together.

---

## 07 — Deployment

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Technical infrastructure (hardware, nodes, channels) | Physical Structure Definition (P2_PSTD) / Physical Element / Physical Connection |
| Mapping of software to hardware | Physical Logical Mapping (P8_PLOM) / Physical Functional Mapping (P8_PFUM) |
| Deployment environments | No equivalent concept in SAF |

---

### Documentation Page (section-7.md)

#### 7.0 — Deployment View (general)

**Content:** (1) Technical infrastructure: geographical locations, environments, computers, processors, channels, net topologies. (2) Mapping of software building blocks to infrastructure.

**Motivation:** Software does not run without hardware; infrastructure influences system and crosscutting concepts.

**Form:** UML deployment diagrams; nesting for complex infrastructure.

| Engineering concern / question | SAF coverage |
|---|---|
| What technical infrastructure executes the system (nodes, channels, locations)? | ✅ P2_PSTD: "What is the physical breakdown of the system?" / P1_PCXD covers physical context elements. |
| **What is the mapping of software building blocks to infrastructure nodes?** | ❌ **GAP** — P8_PLOM maps conceptual to physical elements, but that covers function-to-component mapping, not software-artifact-to-infrastructure-node deployment. |
| **What are the different deployment environments (development, test, production)?** | ❌ **GAP** — SAF has no concept of deployment environments or stages. |

#### 7.1 — Infrastructure Level 1

**Content:** Distribution to locations, environments, computers; physical connections; justification; quality/performance features; mapping of software to infrastructure.

| Engineering concern / question | SAF coverage |
|---|---|
| What is the distribution of the system to multiple locations/environments? | ✅ P1_PCXD: "Where and what are the geographical and physical locations of the intended or proposed elements of the solution?" |
| **What is the justification/motivation for the deployment structure?** | ❌ **GAP** — SAF does not ask for rationale behind deployment decisions. |
| **What quality and performance features of the infrastructure are relevant?** | ❌ **GAP** — SAF has no infrastructure quality/performance concern. |

#### 7.2 — Infrastructure Level 2

**Content:** Internal structure of selected infrastructure elements.

| Engineering concern / question | SAF coverage |
|---|---|
| What is the internal structure of infrastructure elements? | ✅ P2_PSTD supports hierarchical decomposition. |

---

### FAQ Posts

#### Post C-7-1 to C-7-3: "What, why, and who for deployment?"

| Engineering concern / question | SAF coverage |
|---|---|
| Who is responsible for documenting the infrastructure vs. the deployment mapping? | ❌ **GAP** — Out of scope (project management). SAF does not assign documentation responsibility to roles — see paradigm note in Introduction. |

#### Post C-7-5: "Deployment variants?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the different deployment scenarios or variants (stages, alternatives)?** | ❌ **GAP** — SAF does not model deployment variants. |

#### Post C-7-6: "Dynamic deployment?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to describe deployment when building blocks are dynamically assigned to execution nodes (microservices, serverless)?** | ❌ **GAP** — SAF assumes static mapping of elements to nodes. |

---

### Summary of Gaps — Section 07

| # | Missing Concern | Source |
|---|---|---|
| 46 | What is the mapping of software building blocks to infrastructure nodes? | doc §7, C-7-1 |
| 47 | What are the different deployment environments (dev, test, production)? | doc §7 |
| 48 | What is the justification/rationale for the deployment structure? | doc §7.1 |
| 49 | What quality/performance features of the infrastructure are relevant? | doc §7.1 |
| 50 | Who is responsible for documenting infrastructure vs. deployment mapping? | C-7-3 |
| 51 | What are the deployment variants/alternatives? | C-7-5 |
| 52 | How to describe dynamic/elastic deployment (microservices, serverless)? | C-7-6 |

---

## 08 — Concepts

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Crosscutting concept | No equivalent general viewpoint in SAF |
| Domain/business model | O2_OETD (Operational Exchange Type Definition) and C2_SETD (System Exchange Type Definition) — see Terminology for explanation |
| Security and safety concepts | Security Context (C7_SECT) — partial coverage |
| Persistence, logging, communication concepts | Not covered in SAF |

---

### Documentation Page (section-8.md)

**Content:** Crosscutting concepts — practices, patterns, regulations, or solution ideas related to multiple building blocks. Topics: domain model, architecture patterns, UX, safety/security, development, operations, infrastructure.

**Motivation:** Concepts form the basis for conceptual integrity (consistency, homogeneity) of the architecture.

| Engineering concern / question | SAF coverage |
|---|---|
| **What crosscutting concepts exist in the system?** | ❌ **GAP** — SAF has no general "crosscutting concept" concern. Security (C7_SECT) and safety are partially covered. |
| **What is the domain/business model (entities, relationships)?** | ✅ **Covered** — C2_SETD (System Exchange Type Definition Viewpoint) purpose states it "specifies the data types, entity types, related value types, and units" and "defines these item types and their relationships." The concern "Which kind of conceptual items are used in the conceptual architecture?" captures the domain entities and their composition relationships. |
| **What architecture and design patterns have been applied?** | ❌ **GAP** — No concern about applied patterns. |
| **What persistence, distribution, transaction, caching, threading, error handling concepts exist?** | ❌ **GAP** — Not covered in SAF. |
| **What operations concepts (deployment, installation, monitoring) exist?** | ⚠️ **Partial** — Lifecycle/operations concepts are described by SAF's Operational domain. O1_OSTY (Operational Story) captures scenarios for deployment, installation, monitoring, and maintenance. O3_OPRO (Operational Process) defines the processes and activities for these lifecycle phases. O3_OSTA (Operational State) explicitly lists "maintenance" as an operational mode. O2_OCYD (Operational Capability) captures capabilities like "deployable" or "maintainable." Physical deployment topology (where components run) remains a gap. |

---

### FAQ Posts

#### Post C-8-1: "What is a crosscutting concept?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Which rules, principles, or decisions influence multiple building blocks?** | ❌ **GAP** — SAF does not frame this as a concern. |

#### Post C-8-2: "How to organize crosscutting concepts?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to group/order crosscutting topics (domain, patterns, UX, safety/security, dev, operations)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not guide organization of crosscutting topics — see paradigm note in Introduction. |

#### Post C-8-3: "How to deal with the multitude of topics?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to prioritize and select which crosscutting concepts to document?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not guide selection/prioritization — see paradigm note in Introduction. |

#### Post C-8-4: "How to describe the business/domain model?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to describe the domain model (tabular glossary, entity model, DDD)?** | ✅ **Covered** — See Terminology entry "Exchange Type (as domain model)". SAF provides domain modeling via O2_OETD (Operational Exchange Type Definition) at the operational level and C2_SETD (System Exchange Type Definition) at the conceptual level. Both define entity types, attributes, and relationships (via `composed of`). The name "exchange type" reflects that most domain concepts are visible on conceptual interfaces — they are what flows between performers or functions. SAF does not prescribe a tabular/DDD notation but provides the underlying concept model. |

#### Post C-8-5: "Rules for describing a concept?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to describe a concept practically (source code examples, developer use cases, rationale, applicability, limits)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not guide concept description format — see paradigm note in Introduction. |

#### Post C-8-6: "Candidates for concepts?"

| Engineering concern / question | SAF coverage |
|---|---|
| (List of candidate topics: batch processing, printing, reporting, archiving, persistence, safety, security) | ❌ **GAP** — Out of scope (documentation practice). No checklist/catalog of potential crosscutting topics exists in SAF — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 08

| # | Missing Concern | Source |
|---|---|---|
| 53 | What crosscutting concepts exist in the system? | doc §8, C-8-1 |
| 54 | What architecture/design patterns have been applied? | doc §8 |
| 55 | What persistence, distribution, caching, threading, error handling concepts exist? | doc §8, C-8-6 |
| 56 | What operations concepts (deployment, monitoring) exist? | doc §8 | ⚠️ Partial — see detailed analysis |
| 57 | How to organize/group crosscutting topics? | C-8-2 |
| 58 | How to prioritize which crosscutting concepts to document? | C-8-3 |
| 59 | How to describe a concept practically (examples, rationale, applicability)? | C-8-5 |

Gap #54 (domain/business model) is covered by C2_SETD — see detailed analysis.<br>Gap #56 (operations concepts) is partially covered by Operational domain — see detailed analysis.

---

## 09 — Decisions

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Architecture decisions / ADRs | No equivalent concept in SAF |
| Decision rationale, context, alternatives, consequences | Not modeled in SAF |

---

### Documentation Page (section-9.md)

**Content:** Important, expensive, large-scale, or risky architecture decisions with rationales. ADR format: title, context, decision, status, consequences.

**Motivation:** Stakeholders should be able to comprehend and retrace decisions.

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the architecturally significant decisions?** | ❌ **GAP** — SAF has no concept of architectural decisions. |
| **What is the context/forces behind each decision?** | ❌ **GAP** — Not modeled. |
| **What alternatives were considered and why was this chosen?** | ❌ **GAP** — Not modeled. |
| **What is the status of each decision (proposed, accepted, deprecated, superseded)?** | ❌ **GAP** — Not modeled. |
| **What are the consequences of each decision?** | ❌ **GAP** — Not modeled. |

---

### FAQ Posts

#### Post C-9-1: "What kind of decisions to document?"

| Engineering concern / question | SAF coverage |
|---|---|
| **Which decisions are architecturally significant (critical, quality-influencing, unconventional, risky, expensive, long-lasting)?** | ❌ **GAP** — Entirely missing from SAF. |

#### Post C-9-2 / C-9-3: "How to document decisions (ADR format)?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What format should be used for documenting decisions (context, decision, status, consequences)?** | ❌ **GAP** — Out of scope (documentation practice). SAF has no decision documentation format — see paradigm note in Introduction. |

#### Post C-9-4: "How to handle many decisions?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to manage a large number of architecture decisions (blog, tagging, filtering)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not address decision management — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 09

| # | Missing Concern | Source |
|---|---|---|
| 61 | What are the architecturally significant decisions? | doc §9, C-9-1 |
| 62 | What is the context/rationale behind each decision? | doc §9, C-9-3 |
| 63 | What alternatives were considered and why was this chosen? | C-9-2 |
| 64 | What is the status of each decision? | C-9-3 |
| 65 | What are the consequences of each decision? | C-9-3 |
| 66 | How to manage a large number of decisions? | C-9-4 |

---

## 10 — Quality

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Quality requirements | Distributed — reliability concerns exist; no general quality concern |
| Quality scenarios (stimulus, response, metric) | Not modeled in SAF |
| Quality tree / Q42 tagging | Not modeled in SAF |

---

### Documentation Page (section-10.md)

#### 10.0 — Quality Requirements (general)

**Content:** All relevant quality requirements. Top-priority ones in §1.2; the rest here.

**Motivation:** Quality requirements influence architectural decisions; must be specific and measurable.

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the quality requirements for the system?** | ⚠️ Partial — SAF has reliability, security quality concerns but no general "quality requirement" concern. |
| **How to make quality requirements specific and measurable?** | ❌ **GAP** — SAF has no quality scenario concept (stimulus, response, metric). |

#### 10.1 — Quality Requirements Overview

**Content:** Summary or overview of quality requirements, possibly categorized by ISO 25010 or Q42.

| Engineering concern / question | SAF coverage |
|---|---|
| **How to categorize/summarize quality requirements (by ISO 25010, Q42 labels)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not guide quality categorization — see paradigm note in Introduction. |

#### 10.2 — Quality Scenarios

**Content:** Detailed quality scenarios with context, stimulus, response, metric.

**Form:** Usage scenarios (runtime behavior), change scenarios (modification), failure scenarios.

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the quality scenarios with concrete stimulus, response, and measurable metric?** | ❌ **GAP** — SAF has no quality scenario concept. |
| **What usage scenarios describe runtime quality (performance, throughput)?** | ❌ **GAP** — Not modeled. |
| **What change scenarios describe modifiability/extensibility?** | ❌ **GAP** — Not modeled. |
| **What failure scenarios describe system behavior under fault conditions?** | ❌ **GAP** — Not modeled. |

---

### FAQ Posts

#### Post C-10-1: "What is software quality?"

| Engineering concern / question | SAF coverage |
|---|---|
| (Definition of software quality) | ❌ **GAP** — SAF has no definition or concept of software quality. |

#### Post C-10-2 / C-10-3: "Quality scenarios and quality tree"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to structure quality requirements (quality tree, Q42 tagging)?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not model quality documentation structures — see paradigm note in Introduction. |

#### Post C-10-4: "Examples of quality scenarios"

| Engineering concern / question | SAF coverage |
|---|---|
| (Examples: performance, modifiability, failure handling, memory) | ❌ **GAP** — Entirely missing from SAF. |

#### Post C-10-5: "Why is quality section at the end?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to prioritize top quality goals in §1.2 vs. the rest in §10?** | ❌ **GAP** — Out of scope (documentation practice). SAF does not prioritize quality requirements across doc sections — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 10

| # | Missing Concern | Source |
|---|---|---|
| 67 | What are the quality requirements for the system? | doc §10 |
| 68 | How to make quality requirements specific and measurable (scenarios)? | doc §10.2, C-10-2 |
| 69 | How to categorize/summarize quality requirements? | doc §10.1 |
| 70 | What usage scenarios describe runtime quality (performance, throughput)? | C-10-2 |
| 71 | What change scenarios describe modifiability/extensibility? | C-10-2 |
| 72 | What failure scenarios describe behavior under fault conditions? | C-10-2 |
| 73 | How to structure quality requirements (tree, tagging)? | C-10-3 |
| 74 | How to prioritize top quality goals vs. the rest? | C-10-5 |

---

## 11 — Risks and Technical Debt

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Technical risks | Risk concept exists but is security-specific (Security Context) |
| Technical debt | Not modeled in SAF |

---

### Documentation Page (section-11.md)

**Content:** List of identified technical risks or technical debts, ordered by priority.

**Motivation:** Systematic detection and evaluation of risks and technical debts; needed by management stakeholders for overall risk analysis.

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the technical risks for the system?** | ⚠️ Partial — SAF has Risk concept and Security Risk Analysis Viewpoint, but these are security-specific. General technical risks are not covered. |
| **What is the technical debt (known problems in code, structure, concepts, decisions)?** | ❌ **GAP** — SAF has no concept of technical debt. |
| **What measures are suggested to minimize, mitigate, or avoid risks or reduce technical debt?** | ❌ **GAP** — SAF does not ask for mitigation measures. |

---

### FAQ Posts

#### Post C-11-1: "What are risks and technical debt?"

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the currently known problems and risks in the system?** | ⚠️ Partial — Security-specific risk analysis exists but general risk is missing. |
| **What technical debt exists in source code, structures, concepts, decisions, and processes?** | ❌ **GAP** — Technical debt is entirely absent from SAF. |

---

### Summary of Gaps — Section 11

| # | Missing Concern | Source |
|---|---|---|
| 75 | What are the general technical risks for the system (beyond security)? | doc §11, C-11-1 |
| 76 | What is the technical debt? | doc §11, C-11-1 |
| 77 | What measures mitigate risks or reduce technical debt? | doc §11 |

---

## 12 — Glossary

### Terminology Mapping

| arc42 | SAF |
|---|---|
| Domain and technical terms | Glossary concept exists but is not exposed in any viewpoint |
| Term definitions | "Terms and standards" concern category exists |

---

### Documentation Page (section-12.md)

**Content:** The most important domain and technical terms that stakeholders use when discussing the system. Can include translations.

**Motivation:** Clearly define terms so all stakeholders have identical understanding and do not use synonyms/homonyms.

| Engineering concern / question | SAF coverage |
|---|---|
| **What are the important domain and technical terms?** | ✅ **Covered** — A2_TRMD (Common Terms Definition Viewpoint) asks "Which terms and abbreviations are applicable to the system of interest or its system elements and their interfaces and interactions?" and "What are the sources of terms?" The Term concept covers terms from both standards and project-specific development work. |
| **What is the definition of each term?** | ⚠️ **Partial** — A2_TRMD asks which terms are applicable and the Term concept includes definitions implicitly, but no concern explicitly asks "what does each term mean?" |
| **How to ensure common understanding and avoid synonyms/homonyms?** | ⚠️ **Partial** — A2_TRMD provides a single authoritative source for terms, enabling common understanding, but does not frame terminological consistency as an explicit concern. |

---

### FAQ Posts

#### Post C-12-1: "Why is the glossary important?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to ensure all participants have a common understanding of terminology?** | ⚠️ **Partial** — A2_TRMD provides a single authoritative source for project-specific terms (via "Which terms and abbreviations are applicable to the system of interest?"), which enables common understanding. However, the concern is not explicitly framed as a stakeholder question. |

#### Post C-12-2: "How to describe terms without much effort?"

| Engineering concern / question | SAF coverage |
|---|---|
| **How to keep the glossary lean (table, relevant terms only, product owner responsibility)?** | ❌ **GAP** — Out of scope (documentation practice/project management). No concern about glossary economy or ownership — see paradigm note in Introduction. |

---

### Summary of Gaps — Section 12

| # | Missing Concern | Source |
|---|---|---|
| 78 | What is the definition of each term? | doc §12 |
| 79 | How to ensure common understanding and avoid synonyms/homonyms? | doc §12, C-12-1 |
| 80 | How to keep the glossary lean and who owns it? | C-12-2 |

Gap #78 (important domain and technical terms) is covered by A2_TRMD — see detailed analysis.

---

## Consolidated Gap Summary

The following concerns raised by arc42 are not fully covered by SAF concerns. Gaps addressed by SAF's Operational domain (which has no arc42 equivalent) are listed separately below.

| # | Missing Concern | Section |
|---|---|---|
| 1 | How do conceptual and physical context relate and map? | 03 |
| 2 | Which Physical Connection realizes each Conceptual Item Exchange? | 03 |
| 3 | When is physical/technical context relevant vs. deferrable to deployment? | 03 |
| 4 | How is the context view separated from internal architecture? | 03 |
| 5 | How can external context elements be abstracted or aggregated? | 03 |
| 6 | How can communication partners be categorized into groups? | 03 |
| 7 | What availability risks exist at external interfaces? | 03 |
| 8 | What cost risks exist at external interfaces? | 03 |
| 9 | What volatility/change risks exist at external interfaces? | 03 |
| 10 | What complexity risks exist at external interfaces? | 03 |
| 11 | Where are detailed requirements documents referenced? | 01 |
| 12 | How to balance readability vs. redundancy with requirements docs? | 01 |
| 13 | What are the top prioritized quality goals? | 01 |
| 14 | How to distinguish runtime, non-runtime, and business quality attributes? | 01 |
| 15 | How to make quality goals measurable via concrete scenarios? | 01 |
| 16 | What does each stakeholder expect from the architecture? | 01 |
| 17 | Who should know, be convinced of, work with the architecture? | 01 |
| 18 | How detailed should requirements be in architecture documentation? | 01 |
| 19 | Which requirements have disproportionate architectural impact? | 01 |
| 20 | How to split quality requirements between high-priority and the rest? | 01 |
| 21 | What constraints restrict freedom of design and implementation? | 02 |
| 22 | What are the types of constraints (technical, organizational, conventions)? | 02 |
| 23 | Which constraints shaped important architectural decisions? | 02 |
| 24 | When should unfavorable/risky/expensive constraints be negotiated? | 02 |
| 25 | What are the fundamental technology decisions? | 04 |
| 26 | What architectural/decomposition patterns were chosen and why? | 04 |
| 27 | How do solution approaches address key quality goals? | 04 |
| 28 | What organizational decisions affect the architecture? | 04 |
| 29 | How to present solution strategy at the right abstraction level? | 04 |
| 30 | What is the responsibility/purpose of each building block? | 05 |
| 31 | Where is the source code located for each building block? | 05 |
| 32 | What is the motivation/rationale for the decomposition? | 05 |
| 33 | Which building blocks are important enough to detail at deeper levels? | 05 |
| 34 | Which building blocks should be documented vs. omitted? | 05 |
| 35 | Should external/COTS libraries be shown in building blocks? | 05 |
| 36 | How does source code directory structure map to building blocks? | 05 |
| 37 | How do external vs. internal interfaces differ in risk and control? | 05 |
| 38 | How does the system behave in error or exception scenarios? | 06 |
| 39 | Which scenarios are architecturally relevant to document? | 06 |
| 40 | How to focus on interesting/risky parts of scenarios? | 06 |
| 41 | How to document timing-constrained or non-standard behavior? | 06 |
| 42 | What is the mapping of software to infrastructure nodes? | 07 |
| 43 | What are the different deployment environments? | 07 |
| 44 | What is the justification for the deployment structure? | 07 |
| 45 | What quality/performance features of infrastructure are relevant? | 07 |
| 46 | Who documents infrastructure vs. deployment mapping? | 07 |
| 47 | What are the deployment variants/alternatives? | 07 |
| 48 | How to describe dynamic/elastic deployment? | 07 |
| 49 | What crosscutting concepts exist in the system? | 08 |
| 50 | What architecture/design patterns have been applied? | 08 |
| 51 | What technical concepts (persistence, distribution, caching, etc.) exist? | 08 |
| 52 | What operations concepts (deployment, monitoring) exist? | 08 | ⚠️
| 53 | How to organize/group crosscutting topics? | 08 |
| 54 | How to prioritize which crosscutting concepts to document? | 08 |
| 55 | How to describe a concept practically? | 08 |
| 56 | What are the architecturally significant decisions? | 09 |
| 57 | What is the context/rationale behind each decision? | 09 |
| 58 | What alternatives were considered and why chosen? | 09 |
| 59 | What is the status of each decision? | 09 |
| 60 | What are the consequences of each decision? | 09 |
| 61 | How to manage a large number of decisions? | 09 |
| 62 | What are the quality requirements for the system? | 10 |
| 63 | How to make quality requirements measurable (scenarios)? | 10 |
| 64 | How to categorize/summarize quality requirements? | 10 |
| 65 | What usage scenarios describe runtime quality? | 10 |
| 66 | What change scenarios describe modifiability/extensibility? | 10 |
| 67 | What failure scenarios describe behavior under fault conditions? | 10 |
| 68 | How to structure quality requirements (tree, tagging)? | 10 |
| 69 | How to prioritize top quality goals vs. the rest? | 10 |
| 70 | What are the general technical risks (beyond security)? | 11 |
| 71 | What is the technical debt? | 11 |
| 72 | What measures mitigate risks or reduce technical debt? | 11 |
| 73 | What is the definition of each term? | 12 |
| 74 | How to ensure common understanding and avoid synonyms/homonyms? | 12 |
| 75 | How to keep the glossary lean and who owns it? | 12 |

**Concerns addressed by SAF (covered, not gaps):**
- Business goals driving the system (Section 01) — O1_OSTY, O2_OCYD, O1_OCXD (Operational domain)
- Startup/shutdown behavior (Section 06) — ✅ fully covered by O3_OSTA (Operational State) + C3_SSTA (System State) acting together
- Building block → runtime behavior responsibility (Section 06) — ✅ fully covered by C8_SFUM (System Function Mapping) + P8_PFUM (Physical Functional Mapping)
- Domain and technical terms (Section 12) — ✅ fully covered by A2_TRMD (Common Terms Definition Viewpoint)

**Note on constraints (Section 02):** O6_SKRD captures *operational* constraints (environmental conditions, performance, validation for the system in use) but NOT *supplier/development* constraints — restrictions on architects' and developers' freedom during design, implementation, and delivery. arc42 §2 asks about the latter, which SAF does not cover. These remain genuine gaps (items #21-#24).
