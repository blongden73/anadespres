---
layout: default
---

<div class="header-imager">
  {% assign headerText = page.content %}
  <div class="header-image-container">
    {% for project in site.projects %}
      <img src="{{project.['Cover Image']}}">
    {% endfor%}
  </div>
  <div class="header-text">
    <h1>{{headerText | markdownify}}</h1>
  </div>
  <div class="header-footer">
    <div class="flex">
      <div class="left">
        <h4>Available for freelance</h4>
      </div>
      <div class="right">
        <h4><a href="mailto:hola@anadespres.com">hola@anadespres.com</a><h4>
      </div>
    </div>
  </div>
</div>

{% for project in site.projects %}
  <h1 class="project-title">{{project.title}}</h1>
  <div class="project-description">
    {{project.content}}
  </div>
  <div class="project-expertise">
    {% for skill in project.Expertise %}
      {{ skill.['Skill text'] | markdownify }}
    {% endfor %}
  </div>

  {% for image in project.Images %}
    {% if image.Fullwidth-image %}
      <img src="{{image.Fullwidth-image}}">
    {% endif %}
    {% if image.Half-left-image or image.Half-right-image %}
    <div class="flex left-right">
      {% if image.Half-left-image %}
        <img src="{{image.Half-left-image}}">
      {% endif %}
      {% if image.Half-left-image %}
        <img src="{{image.Half-right-image}}">
      {% endif %}
    </div>
    {% endif %}
    <img src="{{image.Image}}">
  {% endfor %}

{% endfor %}
