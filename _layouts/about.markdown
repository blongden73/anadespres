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
    <div><a target="_blank" href="{{page.['The Dots Link']}}">The Dots</a></div>
  </div>
  <div class="other-sites">
    <div><a target="_blank" href="{{page.['Behance Link']}}">Behance</a></div>
  </div>
  <div class="other-sites">
    <div><a target="_blank" href="{{page.['Instagram Link']}}">Instagram</a></div>
    <div><a target="_blank" href="{{page.['Illustration Link']}}">Illustration</a></div>
  </div>
</div>

<div class="ad-three-col">
  <div class="clients">
    <h2>Selected clients</h2>
    {% assign clients = page.Clients %}
    {% for client in clients %}
    <div><a target="_blank" href="{{client.Link}}">{{client.Title}}</a></div>
    {% endfor %}
  </div>
  <div class="other-sites">

  </div>
  <div class="feature">
    <h2>Featured in</h2>
    {% assign featured = page.Featured %}
    {% for feature in featured %}
    <div><a target="_blank" href="{{feature.Link}}">{{feature.Title}}</a></div>
    {% endfor %}
  </div>
</div>
