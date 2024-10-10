---
title: Concerns
layout: default
parent: "Framework Structure"
datatable: true
nav_order: 3
---
# Viewpoint Concerns
[Concerns](../faq.md#concerns) are the information needs of [Stakeholders](../faq.md#stakeholders). They should be justified by a rationale. Concerns are addressed by [viewpoints](../faq.md#viewpoints).

| Package | Concern | Stakeholder & Rationale | Viewpoint |
| --- | --- | --- | --- |
{%- for element in site.data.concerns %}
|<A id={{ element.ID }}></A>{{ element.Owner }} |
{{- element.Name }} | nix |
{%- for vp in element.ConcernsViewpoints %}
{%- assign rvp = site.data.viewpoints | where: "ID", vp.ID %}
{%- if rvp.first.Domain == "SAF Development" -%}
<A href="../devdoc/{{ rvp.first.Domain }} Domain/{{ rvp.first.Name }}.html">{{ rvp.first.Name }}</A>
{%- else -%}
<A href="../userdoc/{{ rvp.first.Domain }} Domain/{{ rvp.first.Name }}.html">{{ rvp.first.Name }}</A>
{%- endif %}
{%- unless forloop.last %}, {% endunless %}{% endfor %} |
{%- endfor %}
