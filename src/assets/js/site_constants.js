---
title: my js file
---
// handle development serving site on root
// title section is required to prevent jekyll from treating this as a static file and not processing liquid tags
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

