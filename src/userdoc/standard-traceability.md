---
title: Standard Traceability
layout: default
parent: Viewpoints
nav_order: 90
---

The Table shows the Viewpoints supporting Processes as defined in ISO 15288:2023 and Information Items as defined in Systems Engineering Handbook 5.
<table>
<tr><th>Viewpoint</th><th>Applicability</th><th>Supported Processes</th><th>Supported Information Items</th></tr>
{%- for vp in site.data.viewpoints  -%}
{% assign objects = site.data.standard-mapping | where: "Viewpoint.ID", vp.ID  | map: "ObjectOfStandard" %}
{% assign processes = objects | where: "Type", "Activity" | where: "Stereotype", "ISOProcess" %}

{% assign infoitems = objects | where: "Type", "Class"  %}
<tr><td>{{ vp.Name }}</td><td>{{ vp.Applicability }}</td><td>
{% for proc in processes  -%}
{{proc.Name}}
{% unless forloop.last %},<BR> {% endunless %}{% endfor %}</td><td>
{% for ii in infoitems  -%}
{{ii.Name}}
{% unless forloop.last %},<BR> {% endunless %}{% endfor %}</td></tr>
{%- endfor %}
</table>

