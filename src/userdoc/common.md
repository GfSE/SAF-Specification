---
title: Common Domain
parent: "Viewpoints"
has_children: true
layout: default
nav_order: 10
---
## Common Domain
{% assign dom = site.data.domains | where: "Name","Common" %}
{{ dom.first.Documentation }}
