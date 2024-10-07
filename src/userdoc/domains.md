---
title: Domains
parent: "Framework Structure"
layout: default
nav_order: 4
---
# Domains
Domains are the rows of the SAF Grid. They implement the Stakeholder Perspective Concept from ISO 42010
{% for element in site.data.domains %}
## {{ element.Name }} Domain
{{ element.Documentation }}
{% endfor %}
