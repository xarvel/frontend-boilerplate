<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Frontend Boilerplate</title>

    <link rel='stylesheet' href='assets/stylesheets/main.css'>

    <!--
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    -->
</head>
<body>

<!-- open limits -->
<div class='limits'>
    <!-- open container -->
    <div class='container'>
        {% block content %}
        This is the default content
        {% endblock %}
    </div>
    <!-- close container -->
</div>
<!-- close limits -->

<script src='assets/javascripts/app.bundle.js'></script>
</body>
</html>