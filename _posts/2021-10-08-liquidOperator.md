---
layout: post
title: "Jekyll - Liquid Boolean 처리(and, or)"
subtitle:
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [jekyll, error]
---
git 블로그 작업을 하다가 메뉴의 조건문을 줘야 하는데 &&, and 연산자가 안먹히는 증상을 찾아보니
<!--more-->
불편하게 liquid에서는 Boolean에 대한 처리를 잘못해주고 있는걸 알게 됐다.

## 사용 방법
<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html" data-slug-hash="zYdOwGp" data-user="aloveu" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/aloveu/pen/zYdOwGp">
  liquid-boolean</a> by Hoon.kim (<a href="https://codepen.io/aloveu">@aloveu</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 참고
<a href="https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html" target="_blank" class="link">jekyll</a>