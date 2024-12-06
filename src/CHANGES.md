---
title: Changes
layout: default
navorder: 98
---
{% assign changes = site.data.changes |sort: "Body" |reverse %}
<table>
<tr><th>Date</th><th>Change</th></tr>
{%- for c in changes -%}
<tr><td>{{c.Body}}</td><td>{{c.Documentation}}</td></tr>
{%- endfor %}
</table>
