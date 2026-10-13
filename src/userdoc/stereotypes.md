---
title: Stereotypes
layout: default
nav_order: 30
---
# Stereotypes
The table below reports the stereotypes of the SAF Profile (used in system models), the stereotypes of the SCM Profile (used to specify or extend the SAF, typically not in system models), and the SCM defined patterns. Use the checkmarks to switch categories on or off, and type into the filter field to narrow the table.

<div class="stereo-filters">
<label><input type="checkbox" class="stereo-cat-check" value="diagrams" checked> Diagram Stereotypes</label>
<label><input type="checkbox" class="stereo-cat-check" value="relational" checked> Relational Stereotypes</label>
<label><input type="checkbox" class="stereo-cat-check" value="elements" checked> Classes &amp; Other Elements</label>
<label><input type="checkbox" class="stereo-cat-check" value="patterns" checked> Patterns</label>
<label><input type="checkbox" class="stereo-cat-check" value="scm" checked> Development (SCM) Stereotypes</label>
<input type="search" id="stereotypes-search" class="stereo-search" placeholder="Filter by name or description">
</div>

<table id="stereotypes-table">
<tr><th>Name</th><th>Description</th></tr>
{% for element in site.data.stereotypes | sort: "Name" %}
{% if element.MetaClass contains "Diagram" %}
{% assign cat = "diagrams" %}
{% elsif element.MetaClass contains "Association" or element.MetaClass contains "Dependency" or element.MetaClass contains "Generalization" %}
{% assign cat = "relational" %}
{% else %}
{% assign cat = "elements" %}
{% endif %}
<tr data-cat="{{ cat }}">
<td><A id={{ element.ID }}>{{ element.Name }}</A></td>
<td>{{ element.Documentation | replace:  "https://saf.gfse.org/devdoc", "../devdoc" | replace:  "https://saf.gfse.org/userdoc", "../userdoc"}}</td>
</tr>
{% endfor %}
{% for element in site.data.special-implementations | sort: "Stereotype" %}
{% if element.Stereotype == "SCM_TypedBy" %}
{% assign specialtext = element.Client.Name | append: " typed by " | append: element.Supplier.Name %}
{% elsif element.Stereotype == "SCM_ContainedIn" %}
{% assign specialtext = element.Client.Name | append: " contained in " | append: element.Supplier.Name %}
{% elsif element.Stereotype == "SCM_Attribute" %}
{% assign specialtext = "attribute " | append: element.Name | append: " of type " | append: element.Supplier.Name | append: " at " | append: element.Client.Name %}
{% endif %}
{% assign realized = site.data.realizeconcept | where: "RealizationOfConcept.ID", element.ID | map: "RealizedConcept" | uniq %}
<tr data-cat="patterns">
<td><A id={{ element.ID }}>{{ specialtext }}</A></td>
<td>
{{ element.Documentation | replace:  "https://saf.gfse.org/devdoc", "../devdoc" | replace:  "https://saf.gfse.org/userdoc", "../userdoc"}}
{% if realized.size > 0 %}
Realized Concepts: {% for c in realized %}
{% assign concept = site.data.concepts | where: "ID", c.ID %}
<A href="../devdoc/concepts.html#{{ c.ID }}">{{ concept.first.AssociationEnds[1].Name }} {{ c.Name }} {{ concept.first.AssociationEnds[0].Name }}</A>{% unless forloop.last %}, {% endunless %}{% endfor %}
{% endif %}
</td>
</tr>
{% endfor %}
{% for element in site.data.scmstereotypes | sort: "Name" %}
<tr data-cat="scm">
<td><A id={{ element.ID }}>{{ element.Name }}</A></td>
<td>{{ element.Documentation | replace:  "https://saf.gfse.org/devdoc", "../devdoc"}}</td>
</tr>
{% endfor %}
</table>

## Used SysML Stereotypes

{: .todo }
report used SysML and UML objects

