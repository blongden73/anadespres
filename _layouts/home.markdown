---
layout: default
---
<div class="ad-wrapper">
{% for project in site.projects %}
  {{project.title}}
{% endfor %}
</div>
