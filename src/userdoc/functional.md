---
title: Functional Domain
parent: "Viewpoints"
layout: default
has_children: true
nav_order: 30
---
## Functional Domain
{% assign dom = site.data.domains | where: "Name","Functional" %}
{{ dom.first.Documentation }}
