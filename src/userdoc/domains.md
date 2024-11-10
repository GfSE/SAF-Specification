---
title: Domains
parent: "Framework Structure"
layout: default
nav_order: 4
---
# Domains
Domains are the rows of the [SAF grid](../index.md#saf-grid) They implement the Stakeholder Perspective Concept from ISO 42010
{% for element in site.data.domains %}
<H2 id={{ element.ID }}> {{ element.Name }} Domain</H2>
{{ element.Documentation }}
{% endfor %}
