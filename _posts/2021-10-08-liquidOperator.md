---
layout: post
title: "Jekyll - Liquid Boolean 처리(and, or)"
subtitle:
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [jekyll, error]
---
<p>git 블로그 작업을 하다가 메뉴의 조건문을 줘야 하는데 &&, and 연산자가 안먹히는 증상을 찾아보니</p>
<!--more-->
<p>불편하게 liquid에서는 Boolean에 대한 처리를 잘못해주고 있는걸 알게 됐다.</p>

<h2>사용 방법</h2>
<pre class="html">
// 작동 x
{% if (a == true and b == true) or (a == false and b == false) %}

// 작동 O 
{% if a == true and b == true %}
      {% assign finalValue = true %}
{% endif %}
{% if a == false and b == false %}
      {% assign finalValue = true %}
{% endif %}
{% if finalValue %}
      //작동함
{% endif %}
</pre>

<h2>참고</h2>
<a href="https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html" target="_blank" class="link">jekyll</a>