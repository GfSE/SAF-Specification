---
title: my js file
---
{%- comment %}handle development serving site on root{% endcomment %}
{%- assign menuBase = site.baseurl | default: '' -%}
{%- comment %}on versioned branches baseurl is <root>/version/<branch>; the version menu links relative to <root>, so strip the branch suffix{% endcomment %}
{%- if menuBase contains '/version/' -%}
{%-   assign menuBase = menuBase | split: '/version/' | first -%}
{%- endif -%}
{%- if menuBase.size == 0 %}
const basePath = '';
{%- else %}
const basePath = '{{ menuBase }}';
{%- endif %}

// Public contract for the root-served plugin scripts (see plugin_versions_menu.js): released
// pages under /version/<x>/ load this file from the site root, so `basePath` and `releases`
// must keep their names and shapes; additions are fine.
// release menu entries; curated in _data/releases.yml, order = menu order
const releases = {{ site.data.releases | jsonify }};

