---
title: my js file
---
{%- comment %}handle development serving site on root{% endcomment %}
{%- if site.baseurl.size == 0 %}
const basePath = '';
{%- else %}
const basePath = '{{ site.baseurl }}';
{%- endif %}

// release menu entries; curated in _data/releases.yml, order = menu order
const releases = {{ site.data.releases | jsonify }};

