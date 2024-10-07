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
{{ element.Documentation }}
{% endfor %}

## Stereotypes of the SCM Profile
The stereotypes of the SCM Profile are used to specify the SAF, or to extend the SAF. They are typically not used in system models.

{: .todo }
report dev stereotypes here

{% assign scmstereotypes = site.data.scmstereotypes | sort: "Name" %}
{% for element in scmstereotypes %}
<A id={{ element.ID }}></A>
### {{ element.Name }} 
{{ element.Documentation }}
{% endfor %}

## SCM defined Patterns

{: .todo }
report patterns like attribute_of, type_of, contained_in

## Used SysML Stereotypes

{: .todo }
report used SysML and UML objects

