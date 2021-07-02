---
layout: default
---

{% for project in site.projects %}
  <h1 class="project-title">{{project.title}}</h1>

  {% for image in project.Images %}
    <img src="{{image.Fullwidth-image}}">
    <div class="flex left-right">
      <img src="{{image.Half-Image-left}}">
      <img src="{{image.Half-Image-right}}">
    </div>
    <img src="{{image.Image}}">
  {% endfor %}

{% endfor %}
