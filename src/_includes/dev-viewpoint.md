{% assign vp_tmp = site.data.viewpoints | where: "Name", page.title %}
{% assign vp = vp_tmp.first %}
{% assign examples = site.data.mdexamples | where: "ExampleForVPID", vp.VP_ID %}
{% capture maturityimage -%}
<img src="../../assets/images/maturity-{{ vp.Maturity | replace: " ", "-"  }}.svg " height="20" width="20" >
{%- endcapture %}
{% capture domainlink -%}
[{{ vp.Domain }}](../../userdoc/domains.html#{{ vp.Domain | downcase }}-domain)
{%- endcapture %}
{% capture aspectlink -%}
[{{ vp.Aspect }}](../../userdoc/aspects.html#{{ vp.Aspect | downcase | replace: " ","-" | replace: "&",""}}-aspect)
{%- endcapture %}
{% capture maturitylink -%}
[{{ vp.Maturity }}](../../userdoc/maturity.html#{{ vp.Maturity }})
{%- endcapture %}
**{{ vp.VP_ID }}** {{ vp.Name }}

|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|{{ domainlink }}|{{ aspectlink }}|{{ maturityimage }}{{ maturitylink }}|

## Purpose
{{ vp.Purpose }}

## Applicability
{{ vp.Applicability }}

## Presentation
{% for pres in vp.Presentation %}
{{ pres }}
{% endfor %}

## Stakeholder
<ul>
{% for stk_id in vp.Stakeholders %}
{% assign stk = site.data.stakeholders | where: "ID", stk_id %}
<li><A href="../../userdoc/stakeholders.html#{{ stk_id }}"> {{ stk.first.Name }} </A></li>
{% endfor %}
</ul>

## Concern
<ul>
{% for concern_id in vp.Concern %}
{% assign concern = site.data.concerns | where: "ID", concern_id %}
<li><A href="../../userdoc/concerns.html#{{ concern_id }}"> {{ concern.first.Name }} </A></li>
{% endfor %}
</ul>

{% assign this_exposes = site.data.exposes | where: "Viewpoint.Name", vp.Name %}
{% assign this_concepts = this_exposes | map: "ExposedConcept" %}

## Exposed Concepts
The Diagram shows the concepts exposed by the viewpoint, and related concepts if necessary.
{% assign diagc = site.data.concept-viewpointdiags | where: "VP_ID", vp.ID %}
<img src="../../diagrams/examples_md/exa{{ diagc.first.ID }}.svg" />

The Table shows the concepts exposed by the viewpoint, and related concepts if necessary.
<table>
<tr><th>Concept</th><th>Documentation</th></tr>
{%- for c in this_concepts -%}
{% assign concept = site.data.concepts | where: "ID", c.ID%}
<tr><td><A href="../concepts.html#{{ c.ID }}">{{ c.Name }}</A></td><td>{{concept.first.Documentation}}</td></tr>
{%- endfor %}
</table>

## Realization of exposed Concepts
The Diagram shows the realization of exposed concepts.
{% assign diagp = site.data.profile-viewpointdiags | where: "VP_ID", vp.ID %}
<img src="../../diagrams/examples_md/exa{{ diagp.first.ID }}.svg" />



The Table shows the realization of exposed concepts.
<table>
<tr><th>Concept</th><th>Realization</th></tr>
{%- for c in this_concepts -%}
{% assign concept = site.data.concepts | where: "ID", c.ID%}
{% assign r = site.data.realizeconcept | where: "RealizedConcept.ID", c.ID | map: "RealizationOfConcept" |map: "ID"%}
{% assign scm_st = site.data.scmstereotypes | where: "ID", r.first %}
{% assign saf_st = site.data.stereotypes | where: "ID", r.first %}
<tr><td><A href="../concepts.html#{{ c.ID }}">{{ c.Name }}</A></td><td><A href="../../userdoc/stereotypes.html#{{ r.first }}">{{ scm_st.first.Name }}{{ saf_st.first.Name }}</A></td></tr>
{%- endfor %}
</table>

## Related Viewpoints

### Required Viewpoints
<ul>
{% for reqvp_id in vp.RequiredVP %}
{% assign rvp = site.data.viewpoints | where: "ID", reqvp_id %}
<li><A href="{{ rvp.first.Name }}.html">{{ rvp.first.Name }}</A></li>
{% endfor %}
</ul>

### Recommended Viewpoints
<ul>
{% for recovp_id in vp.RecommendedVP %}
{% assign recvp = site.data.viewpoints | where: "ID", recovp_id %}
<li><A href="{{ recvp.first.Name }}.html">{{ recvp.first.Name }}</A></li>
{% endfor %}
</ul>

## Example
{% for ex in examples %}
<img src="../../diagrams/examples_md/exa{{ ex.ID }}.svg" />
{% endfor %}