<!DOCTYPE html>
<html>

  {% include head.html %}

  <body class="{{page.title | slugify | downcase}} {{page.layout | slugify | downcase}}">

    <div class="ad-wrapper">
      {% include header.html %}

          {{ content }}

      {% include footer.html %}
    </div>
  </body>

</html>
