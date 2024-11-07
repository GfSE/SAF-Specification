{% assign vp_tmp = site.data.viewpoints | where: "Name", page.title %}
{% assign vp = vp_tmp.first %}
{% assign examples = site.data.mdexamples | where: "ExampleForVPID", vp.VP_ID %}
{% capture maturityimage -%}
<img src="../../assets/images/maturity-{{ vp.Maturity | replace: " ", "-"  }}.svg " height="20" width="20" >
{%- endcapture %}
{% capture domainlink -%}
[{{ vp.Domain }}](../domains.html#{{ vp.Domain | downcase }}-domain)
{%- endcapture %}
{% capture aspectlink -%}
[{{ vp.Aspect }}](../aspects.html#{{ vp.Aspect | downcase | replace: " ","-" | replace: "&",""}}-aspect)
{%- endcapture %}
{% capture maturitylink -%}
[{{ vp.Maturity }}](../maturity.html#{{ vp.Maturity }})
{%- endcapture %}
**{{ vp.VP_ID }}** {{ vp.Name }}

|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|{{ domainlink }}|{{ aspectlink }}|{{ maturityimage }}{{ maturitylink }}|



## Example
{% for ex in examples %}
<img src="../../diagrams/examples_md/exa{{ ex.ID }}.svg" />
{% endfor %}

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
<li><A href="../stakeholders.html#{{ stk_id }}"> {{ stk.first.Name }} </A></li>
{% endfor %}
</ul>

## Concern
<ul>
{% for concern_id in vp.Concern %}
{% assign concern = site.data.concerns | where: "ID", concern_id %}
<li><A href="../concerns.html#{{ concern_id }}"> {{ concern.first.Name }} </A></li>
{% endfor %}
</ul>

## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
{% assign this_exposes = site.data.exposes | where: "Viewpoint.Name", vp.Name %}
{% assign this_concepts = this_exposes | map: "ExposedConcept" %}
{% assign t_i = "" | split: "" %}

{% for c in this_concepts %}
{% assign r = site.data.realizeconcept | where: "RealizedConcept.ID", c.ID | map: "RealizationOfConcept" %}
{% assign t_i = t_i | concat: r | uniq%}
{% endfor %}

<ul>
{% for real in t_i %}


{% assign scm_st = site.data.scmstereotypes | where: "ID", real.ID %}
{% assign saf_st = site.data.stereotypes | where: "ID", real.ID %}
{% assign special = site.data.special-implementations | where: "ID", real.ID %}
{% if special.first.Stereotype =="SCM_TypedBy" %}
{% assign specialtext =  special.first.Client.Name | append: " typed by " | append: special.first.Supplier.Name %}
{% elsif special.first.Stereotype =="SCM_ContainedIn" %}
{% assign specialtext =  special.first.Client.Name | append: " contained in " | append: special.first.Supplier.Name %}
{% elsif special.first.Stereotype =="SCM_Attribute" %}
{% assign specialtext =  "attribute " | append: special.first.Name | append: " of type " | append: special.first.Supplier.Name | append: " at " | append: special.first.Client.Name %}
{% elsif scm_st.size > 0 %}
{% assign specialtext =  scm_st.first.Name %}
{% elsif saf_st.size > 0 %}
{% assign specialtext =  saf_st.first.Name %}
{% else %}
{% assign specialtext =  real.Name %}
{% endif %}

<li><A href="../../userdoc/stereotypes.html#{{ real.ID }}">{{ specialtext }}</A></li>
{% endfor %}
</ul>


## Related Viewpoints
### Required Viewpoints
<ul>
{% for reqvp_id in vp.RequiredVP %}
{% assign rvp = site.data.viewpoints | where: "ID", reqvp_id %}
<li><A href="../{{ rvp.first.Domain }} Domain/{{ rvp.first.Name }}.html">{{ rvp.first.Name }}</A></li>
{% endfor %}
</ul>

### Recommended Viewpoints
<ul>
{% for recovp_id in vp.RecommendedVP %}
{% assign recvp = site.data.viewpoints | where: "ID", recovp_id %}
<li><A href="../{{ recvp.first.Domain }} Domain/{{ recvp.first.Name }}.html">{{ recvp.first.Name }}</A></li>
{% endfor %}
</ul>
