---
title: Aspects
parent: "Framework Structure"
layout: default
nav_order: 5
---
# Aspects
Aspects are the columns of the [SAF grid](../index.md#saf-grid). They organize the viewpoints by the kind of information need of stakeholders.
{% for element in site.data.aspects %}
<H2 id={{ element.ID }}> {{ element.Name }} Aspect</H2>
{{ element.Documentation }}
{% endfor %}
