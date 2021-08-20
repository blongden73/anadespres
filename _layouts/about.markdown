---
layout: default
---

<div class="tracker"></div>
<div class="header-imager">
  {% assign headerText = page.content %}
  <div class="about-page-wrapper header-text">{{headerText | markdownify}}</div>
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
<div class="ad-three-col">
  <div class="other-sites">
    <div><a href="#">The Dots</a></div>
  </div>
  <div class="other-sites">
    <div><a href="#">Behance</a></div>
  </div>
  <div class="other-sites">
    <div><a href="#">Instagram</a></div>
    <div><a href="#">Illustration</a></div>
  </div>
</div>

<div class="ad-three-col">
  <div class="clients">
    <h2>Selected clients</h2>
    {% assign clients = page.Clients %}
    {% for client in clients %}
    <div><a href="{{client.Link}}">{{client.Name}}</a></div>
    {% endfor %}
  </div>
  <div class="other-sites">

  </div>
  <div class="feature">
    <h2>Featured in</h2>
    {% assign featured = page.Featured %}
    {% for feature in featured %}
    <div><a href="{{feature.Link}}">{{feature.Title}}</a></div>
    {% endfor %}
  </div>
</div>
