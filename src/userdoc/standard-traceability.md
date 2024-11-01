---
title: Standard Traceability
layout: default
parent: Viewpoints
nav_order: 90
---

The Table shows the Viewpoints supporting Processes as defined in ISO 15288:2023 and Information Items as defined in Systems Engineering Handbook 5.
<table class="stdreftable">
<tr><th>Viewpoint</th><th>Applicability</th><th>Supported Processes</th><th>Supported Information Items</th></tr>
{%- for vp in site.data.viewpoints  -%}
{% assign objects = site.data.standard-mapping | where: "Viewpoint.ID", vp.ID  | map: "ObjectOfStandard" %}
{% assign processes = objects | where: "Type", "Activity" | where: "Stereotype", "ISOProcess" %}

{% assign infoitems = objects | where: "Type", "Class"  %}
<tr><td>
{%- if vp.Domain == "SAF Development" -%}
<A href="../devdoc/{{ vp.Domain }} Domain/{{ vp.Name }}.html" >{{ vp.Name }}</A>
{% else %}
<A href="../userdoc/{{ vp.Domain }} Domain/{{ vp.Name }}.html">{{ vp.Name }}</A>
{% endif %}

</td><td>{{ vp.Applicability }}</td><td>
{% for proc in processes  -%}
<div class="tooltip">
  <A href="{{ proc.URL }}">
    {{ proc.Name }}
      <span class="tooltiptext">{{ proc.Standard }}</span>
 </A>
</div>
{% unless forloop.last %},<BR> {% endunless %}{% endfor %}</td><td>
{% for ii in infoitems  -%}
{{ii.Name}}
{% unless forloop.last %},<BR> {% endunless %}{% endfor %}</td></tr>
{%- endfor %}
</table>

