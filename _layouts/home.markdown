---
layout: default
---

<div class="header-imager"></div>

{% for project in site.projects %}
  <h1 class="project-title">{{project.title}}</h1>

  {% for image in project.Images %}
    <img src="{{image.Fullwidth-image}}">
    <div class="flex left-right">
      <img src="{{image.Half-left-image}}">
      <img src="{{image.Half-right-image}}">
    </div>
    <img src="{{image.Image}}">
  {% endfor %}

{% endfor %}
