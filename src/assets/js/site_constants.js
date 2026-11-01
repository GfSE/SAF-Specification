---
title: my js file
---
{%- comment %}handle development serving site on root{% endcomment %}
{%- if site.baseurl.size == 0 %}
const basePath = '';
{%- else %}
const basePath = '{{ site.baseurl }}';
{%- endif %}

// Public contract for the root-served plugin scripts (see plugin_versions_menu.js): released
// pages under /version/<x>/ load this file from the site root, so `basePath` and `releases`
// must keep their names and shapes; additions are fine.
// release menu entries; curated in _data/releases.yml, order = menu order
const releases = {{ site.data.releases | jsonify }};

