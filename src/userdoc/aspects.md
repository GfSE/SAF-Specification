---
title: Aspects
parent: "Framework Structure"
layout: default
nav_order: 5
---
# Aspects
Aspects are the columns of the SAF Grid. They organize the viewpoints by the kind of information need of stakeholders.
{% for element in site.data.aspects %}
## {{ element.Name }} Aspect
{{ element.Documentation }}
{% endfor %}
