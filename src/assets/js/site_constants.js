---
title: my js file
---
{%- comment %}handle development serving site on root{% endcomment %}
{%- if site.baseurl.size == 0 %}
const basePath = '';
{%- else %}
const basePath = '{{ site.baseurl }}';
{%- endif %}

{%- if site.repository_nwo != nil %}
const repository_nwo = '{{ site.repository_nwo }}';
{%- else %}
const repository_nwo = '{{ site.github.repository_nwo }}';
{%- endif %}

