
<img src="/diagrams/concept/exa{{ diag.first.ID }}.svg" />
{{ diag.first.Documentation }}


{% assign conceptdiag = site.data.concept-diags | where: "ID", diag.first.ID%}
<table>
<tr><th>Concept</th><th>Documentation</th></tr>
{%- for c in conceptdiag.first.DiagConcepts -%}
{% assign concept = site.data.concepts | where: "ID", c.ID%}
<tr><td><A href="../concepts.html#{{ c.ID }}">{{ c.Name }}</A></td><td>{{concept.first.Documentation}}</td></tr>
{%- endfor %}
</table>