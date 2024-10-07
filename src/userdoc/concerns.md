---
title: Concerns
layout: default
parent: "Framework Structure"
datatable: true
nav_order: 3
---
# Viewpoint Concerns

| Package | Concern | Stakeholder & Rationale | Viewpoint |
| --- | --- | --- | --- |
{%- for element in site.data.concerns %}
|<A id={{ element.ID }}></A>{{ element.Owner }} | {{ element.Name }} | nix |{% for vp in element.ConcernsViewpoints %}{{ vp.Name }}{% unless forloop.last %}, {% endunless %}{% endfor %} |{% endfor %}
