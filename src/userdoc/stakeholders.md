---
title: Stakeholders
parent: "Framework Structure"
layout: default
nav_order: 2
---
# Stakeholders
![SAF_Stakeholder_Definition](../assets/images/SAF_stakeholder_definition.svg)
This section provides a list of the Stakeholder roles considered for the elicitation of concerns for SAF viewpoints. For each of the Stakeholders their [concerns](../faq.md#concerns) are listed.

The following subchapters describe the stakeholders and their concerns:

{% for element in site.data.stakeholders %}
<A id={{ element.ID }}></A>
# {{ element.Name }} 

{{ element.Documentation }}
## Concern
{% for rationale in element.Rationales %}
* {{ rationale.Concern }}
   {% unless rationale.Rationale == "" %}  <BR>*{{ rationale.Rationale  }}* {% endunless %}
{% endfor %}
{% endfor %}
