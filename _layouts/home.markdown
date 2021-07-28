---
layout: default
---

<div class="tracker"></div>
<div class="header-imager">
  {% assign headerText = page.content %}
  <div class="header-image-container">
    {% for project in site.projects %}
      {% assign cover = project.['Cover Image'] %}
      {% for image in cover %}
        <img loading=lazy src="{{image.Image}}">
      {% endfor %}
    {% endfor %}
  </div>
  <div class="header-text">
    <h1>{{headerText | markdownify}}</h1>
  </div>
  <div class="header-footer">
    <div class="flex">
      <div class="left">
        <h4>Available for freelance</h4>
      </div>
      <div class="center top">
        <h4><a href="#top">To Top ↑</a></h4>
      </div>
      <div class="right">
        <h4><a href="mailto:hola@anadespres.com">hola@anadespres.com</a><h4>
      </div>
    </div>
  </div>
</div>

{% for project in site.projects %}
  <div class="ad-project-wrapper">
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
      <div class="image-wrapper">
        <img loading=lazy src="{{image.Fullwidth-image}}">
      </div>
      {% endif %}
      {% if image.Half-left-image or image.Half-right-image %}
      <div class="flex left-right">
        {% if image.Half-left-image %}
          {% unless image.Half-left-image contains '.mp4' %}
          <img loading=lazy src="{{image.Half-left-image}}">
          {% else %}
          <div class="video-wrapper">
            <video autoplay loop playsinline muted width="320" height="240">
              <source src="{{image.Half-left-image}}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          {% endunless %}
        {% endif %}
        {% if image.Half-left-image %}
          {% unless image.Half-right-image contains '.mp4' %}
            <img loading=lazy src="{{image.Half-right-image}}">
            {% else %}
            <div class="video-wrapper">
              <video autoplay loop playsinline muted width="320" height="240">
                <source src="{{image.Half-left-image}}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          {% endunless %}
        {% endif %}
      </div>
      {% endif %}
      {% if image.Image %}
      <div class="image-wrapper">
        <img loading=lazy src="{{image.Image}}">
      </div>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}
