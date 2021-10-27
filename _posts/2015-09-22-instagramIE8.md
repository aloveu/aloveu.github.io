---
categories: Dev
layout: post
title: "Js - 인스타그램피드 IE8이하 에러 해결"
subtitle: 
tags: [js, instagram]
---
인스타 피드 적용을 하다 보니 ie8쪽에서 에러가 난다.<br>
또 indexOf로 필터링을 해도 indexOf가 ie8에서는 안되다 보니 피드를 불러올수가 없었다.
<!--more-->

해결책은 역시 구글링!!!!

두군데서 찾았다. 우선 ie8쪽 instafeed.min.js에서 에러 나는 부분은 아래 링크에 나오는걸 보고 페이지 최하단에 적용 시키면 된다.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Streamlining_cross-browser_behavior" target="_blank" class="link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Streamlining_cross-browser_behavior</a>

indexOf 부분은 하단링크에 나오는 방법대로(if (!Array.prototype.indexOf) ~ ) 페이지상단에 쓰면 된다=ㅁ=

<a href="http://stackoverflow.com/questions/3629183/why-doesnt-indexof-work-on-an-array-ie8" target="_blank" class="link">Javascript indexOf Polyfill</a>