# SAF Concerns: Duplicate & Overlap Analysis

Date: 2026-05-23
Source: SAF Ontology API (remote)

## Methodology

All 141 concerns were retrieved from the SAF ontology and analyzed for semantic similarity. Each potential duplicate pair was cross-referenced by owner domain, associated viewpoints, and question structure. Concerns that could not be resolved via the API are noted as "unresolvable."

---

## 1. HIGH Confidence Duplicates

These concerns ask the same question in different wording and should be merged.

### 1.1 Functional Decomposition

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *What is the breakdown of functions into sub-functions?* | functional | System Functional Breakdown Structure VP, System Functional Refinement VP |
| 2 | *How are the system functions decomposed into smaller, and more manageable sub-functions?* | functional | *(unresolvable via API)* |

**Assessment:** Nearly identical. #2 is a more verbose restatement of #1. Both target functional decomposition.

**Recommendation:** Merge into one concern. Keep #1 as it is simpler and has explicit viewpoint coverage.

---

### 1.2 Functional Scope vs. Functions Provided

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *What is the functional scope of the system?* | functional | System Process VP |
| 2 | *Which functions will the system provide?* | functional | System Process VP, System Functional Breakdown Structure VP |

**Assessment:** Share the same viewpoint (System Process VP). "Functional scope" is semantically equivalent to "which functions the system provides."

**Recommendation:** Merge into a single concern. #2 has broader viewpoint coverage.

---

### 1.3 Framework Grid Structure

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *Which columns and rows does the frameworks grid have?* | meta-framework | — |
| 2 | *What is the definition of columns (aspects) in the frameworks grid?* | meta-framework | — |
| 3 | *What is the definition of rows (domains) in the frameworks grid?* | meta-framework | — |

**Assessment:** #1 asks the overarching question. #2 and #3 are the two halves of the answer. This is fragmentation of a single concern into three.

**Recommendation:** Merge into one concern: *"What are the columns and rows (aspects and domains) of the framework grid?"* Alternatively keep two (one per dimension) but drop the three-way split.

---

## 2. Conceptual/Physical Split

A recurring pattern throughout SAF is defining the same concern for "conceptual" and "physical" abstraction levels. While these pairs may appear to be duplicates, two factors justify their separation:

1. **No parameterization mechanism** — the framework currently has no means to parameterize a concern by abstraction level, so separate concerns are necessary.
2. **Different stakeholders** — conceptual information and physical information often serve different stakeholders (e.g., System Architect vs. Hardware Developer), so keeping them distinct preserves stakeholder traceability.

The subsections below note each pair but the default recommendation is **keep separate** given these constraints. Only consider merging if a parameterization mechanism is introduced.

### 2.1 Breakdown Structure

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *What is the conceptual breakdown of the system?* | structure | System Structure Definition VP |
| 2 | *What is the physical breakdown of the system?* | structure | Physical Structure Definition VP |

**Assessment:** Same stem — differs only by conceptual vs. physical. Keep separate per the rationale at 2.0.

---

### 2.2 Interface Definitions

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *Which are the interface definitions for the conceptual architecture?* | exchange & interface | System Interface Definition VP |
| 2 | *Which are the interface definitions for the physical architecture?* | exchange & interface | Physical Interface Definition VP |

**Assessment:** Same stem — differs only by conceptual vs. physical. Keep separate per the rationale at 2.0.

---

### 2.3 Interaction Sequences

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *What is the sequence of interactions among the system and context elements on concpetual level?* | interaction | System Context Interaction VP |
| 2 | *What is the sequence of interactions among the system and context elements on physical level?* | interaction | *(no viewpoints)* |

**Assessment:** Same stem — differs only by conceptual vs. physical. Keep separate per the rationale at 2.0. Note typo in #1: "concpetual."

---

### 2.4 External Entities (Boundary & Context)

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *Which are the external conceptual entities the system interacts with in the given context?* | boundary & context | System Context Exchange VP, System Context Definition VP |
| 2 | *Which are the external physical entities the system interacts with in the given context?* | boundary & context | Physical Context Definition VP, Physical Context Exchange VP |

**Assessment:** Same stem — differs only by conceptual vs. physical. Keep separate per the rationale at 2.0.

---

### 2.5 Conceptual vs. Physical System Element Interaction

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *How do the conceptual system elements interact to provide the system functions?* | interaction | — |
| 2 | *How do the physical system elements interact to provide the system function?* | interaction | Physical Internal Exchange VP |

**Assessment:** Same stem — differs only by conceptual vs. physical. Keep separate per the rationale at 2.0.

---

### 2.6 Exchange Items (8 concerns)

These concerns reflect three deliberately separate engineering aspects of exchange items:
1. **Identification** — what interaction points exist as a property of the system (internal exchange)
2. **Connection** — how those points connect externally, which depends on system usage (external exchange)
3. **Definition** — the detailed interface type definitions, which can be reused across products and models

Each applies at both the conceptual and physical abstraction levels, yielding the 3×2 structure below.

| # | Concern | Owner | Viewpoints |
|---|---|---|---|
| 1 | *What are the items exchanged between conceptual system elements during an interaction?* | interaction | System Internal Interaction VP, System Internal Exchange VP |
| 2 | *Which conceptual items (energy, material, information, etc.) are exchanged within the system?* | exchange & interface | System Internal Exchange VP, System Interface Definition VP |
| 3 | *Which kind of conceptual items (energy, material, information, etc.) are used in the conceptual architecture of the system?* | exchange & interface | *(unresolvable via API)* |
| 4 | *Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?* | exchange & interface | System Context Exchange VP, System Interface Definition VP |
| 5 | *Which kind of physical items (energy, material, information, etc.) are defined for the physical architecture of the system?* | exchange & interface | Physical Exchange Type Definition VP |
| 6 | *Which kind of physical items (energy, material, information, etc.) are exchanged between the system and external entities?* | exchange & interface | Physical Context Exchange VP |
| 7 | *Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element?* | exchange & interface | Physical Context Exchange VP, Physical Internal Exchange VP |
| 8 | *Which physical items (energy, material, information, etc.) are exchanged within the system?* | exchange & interface | Physical Internal Exchange VP |

These 8 concerns map to **3 engineering concerns × 2 abstraction levels**:

| Category | Conceptual | Physical |
|---|---|---|
| **Identification** | #1, #2 | #8 |
| **Connection** | #4 | #6 |
| **Definition** | #3 | #5, #7 |

**Assessment:** The separation into identification / connection / definition is deliberate and meaningful. The one overlap worth noting is **#1 vs #2** — both sit in the *conceptual + identification* cell. They ask the same question (what items flow between conceptual system elements internally) but are owned by different domains (*interaction* vs *exchange & interface*). These could be candidates for consolidation.

The parenthetical `(energy, material, information, etc.)` repeated verbatim across 7 concerns is cosmetic noise — consider extracting into a shared note or convention rather than repeating inline.

**Recommendation:** The 3 × 2 structure is valid. Only investigate merging #1 + #2 (same cell). No wholesale reduction needed.

---

## 3. Concerns Sharing the Same Viewpoint

These may not be exact duplicates but their co-location in the same viewpoint suggests overlap.

| Concern Pair | Shared Viewpoint | Assessment |
|---|---|---|
| *Which functions will the system provide?* + *What is the functional scope of the system?* | System Process VP | Already flagged as duplicate (1.2) |
| *Which modes and states does the system have?* + *Which system functions are dependent on a systems mode or state?* | System State VP | The first asks *what* the states are; the second asks which functions depend on them. Related but distinct. Could be merged into a broader "system state model" concern. |
| *What are the functional requirements imposed on the system?* + *What are the non-functional requirements imposed on the system?* | System Requirement Definition VP | Deliberate split (functional vs. non-functional) is standard SE practice. Keep separate. |
| *What are the Attack Vectors?* + *Who are the potential adversaries?* + *What are the Assumptions regarding the context Elements?* | Security Context VP | Related but distinct concerns in a security thread. Keep separate. |
| *What are the Security Measures?* + *What are the Security Requirements?* | Security Risk Analysis VP | Related but distinct. Keep separate. |
| *Which functions need to be implemented in HW?* + *Which functions and services need to be implemented in SW?* | Physical Functional Mapping VP | Same mapping question for different implementation targets. Could merge into *"Which functions are allocated to [HW / SW / mechanical] implementation?"* |

---

## 4. Orphaned Concerns (No Viewpoint Coverage)

These concerns exist in the catalog but have no viewpoints associated with them. They may be incomplete, deprecated, or awaiting viewpoint assignment.

| Concern | Owner |
|---|---|
| *What are the reliability requirements of functions assigned to the HW items?* | reliability |
| *What are the reliability requirements of functions assigned to SW that is allocated to the HW item?* | reliability |
| *What is the allocated reliability for a single function?* | reliability |
| *What is the allocated reliability for the complete item?* | reliability |
| *What is the sequence of interactions among the system and context elements on physical level?* | interaction |
| *How do the conceptual system elements interact to provide the system functions?* | interaction |

**Recommendation:** Either assign these to appropriate viewpoints or deprecate them.

---

## 5. Categorization Mismatches

Some concerns appear to be assigned to the wrong owner domain.

| Concern | Current Owner | Suggested Owner | Rationale |
|---|---|---|---|
| *What are the normal and extreme environmental conditions for normal operation, for not operational, for storage, and for transport?* | organization | requirement or boundary & context | Environmental conditions are not an organizational concern. |
| *What are the Assumptions regarding the context Elements?* | X-Concern (security) | boundary & context | Assumptions about context are general SE, not exclusively security. |
| *From which conceptual item (energy, material, information) is a physical item derived?* | traceability & mapping | exchange & interface or structure | This is about derivation/traceability but phrased in terms of item types, which fits exchange & interface better. |

---

## 6. Summary Statistics

| Metric | Count |
|---|---|
| Total concerns analyzed | 141 |
| HIGH confidence duplicate pairs | 3 groups (~7 concerns) |
| Conceptual/physical pairs (deliberate — keep separate) | 8 pairs (~16 concerns) |
| Exchange item concerns (3 categories × 2 levels, valid structure) | 8 |
| Orphaned concerns (no viewpoint) | 6 (4 reliability + 2 interaction) |
| Categorization mismatches | 3 |

### Priority Actions

1. **Merge functional decomposition concerns** (1.1) — trivial, clear win.
2. **Merge functional scope concerns** (1.2) — same viewpoint, same intent.
3. **Collapse the framework grid concerns** (1.3) — three into one.
4. **Investigate #1 vs #2 in exchange items** (2.6) — these are the only two occupying the same cell (conceptual + identification); everything else in that section is structurally justified.
5. **Assign or deprecate orphaned concerns** — especially the 4 reliability concerns that have zero viewpoint coverage.
6. **Fix categorization mismatches** — move 3 concerns to appropriate owners.
