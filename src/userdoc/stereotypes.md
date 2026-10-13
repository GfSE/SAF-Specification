---
title: Stereotypes
layout: default
nav_order: 30
---
# Stereotypes
## Stereotypes of the SAF Profile
The stereotypes of the SAF Profile are used system models.

{% assign stereotypes = site.data.stereotypes | sort: "Name" %}
{% for element in stereotypes %}
{% assign realizations = site.data.realizeconcept | where: "RealizationOfConcept.ID", element.ID %}
<A id={{ element.ID }}></A>
### {{ element.Name }} 
{{ element.Documentation | replace:  "https://saf.gfse.org/devdoc", "../devdoc" | replace:  "https://saf.gfse.org/userdoc", "../userdoc"}}
{% endfor %}

## Stereotypes of the SCM Profile
The stereotypes of the SCM Profile are used to specify the SAF, or to extend the SAF. They are typically not used in system models.

{: .todo }
report dev stereotypes here

{% assign scmstereotypes = site.data.scmstereotypes | sort: "Name" %}
{% for element in scmstereotypes %}
<A id={{ element.ID }}></A>
### {{ element.Name }} 
{{ element.Documentation | replace:  "https://saf.gfse.org/devdoc", "../devdoc"}}

{% endfor %}

## SCM defined Patterns

The following patterns are defined in the SCM Profile. They are reported the way the viewpoints report them, each anchored by its UID.

{% assign specialimplementations = site.data.special-implementations | sort: "Stereotype" %}
{% for element in specialimplementations %}
{% if element.Stereotype == "SCM_TypedBy" %}
{% assign specialtext = element.Client.Name | append: " typed by " | append: element.Supplier.Name %}
{% elsif element.Stereotype == "SCM_ContainedIn" %}
{% assign specialtext = element.Client.Name | append: " contained in " | append: element.Supplier.Name %}
{% elsif element.Stereotype == "SCM_Attribute" %}
{% assign specialtext = "attribute " | append: element.Name | append: " of type " | append: element.Supplier.Name | append: " at " | append: element.Client.Name %}
{% endif %}
<A id={{ element.ID }}></A>
### {{ specialtext }}
{{ element.Documentation | replace:  "https://saf.gfse.org/devdoc", "../devdoc" | replace:  "https://saf.gfse.org/userdoc", "../userdoc"}}
{% assign realized = site.data.realizeconcept | where: "RealizationOfConcept.ID", element.ID | map: "RealizedConcept" | uniq %}
{% if realized.size > 0 %}
Realized Concepts: {% for c in realized %}
{% assign concept = site.data.concepts | where: "ID", c.ID %}
<A href="../devdoc/concepts.html#{{ c.ID }}">{{ concept.first.AssociationEnds[1].Name }} {{ c.Name }} {{ concept.first.AssociationEnds[0].Name }}</A>{% unless forloop.last %}, {% endunless %}{% endfor %}
{% endif %}

{% endfor %}

## Used SysML Stereotypes

{: .todo }
report used SysML and UML objects

