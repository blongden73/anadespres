<!DOCTYPE html>
<html>

  {% include head.html %}

  <body class="{{page.title | slugify | downcase}} {{page.layout | slugify | downcase}}">

    {% include header.html %}

        {{ content }}

    {% include footer.html %}

  </body>

</html>
