---
categories: Dev
layout: post
title: "Css - TEXT를 더 다양하게 꾸미기"
subtitle: 
tags: [css]
---
이번 포스트에는 텍스트를 기존보다 더 다양한 방법으로 꾸미는 방법을 정리 해본다.
<!--more-->

텍스트에 그라디언트를 적용 시키고, 이미지를 텍스트안에서만 bg로 처리 하고 거기에 반짝이는 효과까지 기술해보려고 한다.
<hr />

## background-clip:text
먼저 background-clip을 사용해 볼거다. 현재 background-clip은 -webkit- 밴더프리픽스를 붙여서 사용을 하고 있다. 이건 Edge와 IE 계열을 지원하지 않는다.

```html
<p class="text-clip clip-img">HELLO</p>
<p class="text-clip clip-gradient">HELLO</p>
```
<br>
```css
.text-clip{
    font-size:50px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.clip-img{
    background-image:url('imgURL');
}
.clip-gradient{
    background:linear-gradient(to bottom, #ffd781 0%, #ffd781 15%, #ffeabb 35%, #ca9f74 50%, #cf9663 55%, #daa671 70%, #ecc89c 100%);
}
```

<p class="text-clip clip-img">HELLO</p>
<p class="text-clip clip-gradient">HELLO</p>

그렇다면 Edge나 IE 에서는 어떻게 같은 효과를 줄 수 있을까? 여기까지 지원할려면 더 번거로운 작업을 해야하는데 바로 svg로 텍스트를 표현해줘야한다.

상단 gradient부분을 svg로 표현해 보자.

<p data-height="300" data-theme-id="28545" data-slug-hash="evKEEM" data-default-tab="html,result" data-user="aloveu" data-embed-version="2" data-pen-title="evKEEM" class="codepen">See the Pen <a href="https://codepen.io/aloveu/pen/evKEEM/">evKEEM</a> by Hoon.kim (<a href="http://codepen.io/aloveu">@aloveu</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
<style>
.text-clip{
    font-size:50px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:0 !important;
}
.clip-img{
    background-image:url(/assets/img/post/img_textStyle01.jpg);
}
.clip-gradient{
    background-image:linear-gradient(to bottom, #ffd781 0%, #ffd781 15%, #ffeabb 35%, #ca9f74 50%, #cf9663 55%, #daa671 70%, #ecc89c 100%);
}
</style>

이렇게 보면 svg가 background-clip:text보단 브라우저지원이 잘되서 더 좋아 보이지만 svg로 만들었을 때 문제점이 있다. text-overflow:ellipsis 가 먹지 않아서 ... 처리를 하려면 서버단에서 ... 처리 해서 내려줘야한다 ㅠㅠ

## TEXT ANIMATION
추후 작업....