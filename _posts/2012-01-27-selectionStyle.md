---
category: dev
layout: post
title: "Css - 마우스로 드래그했을때 색 바꾸기 (셀렉션)"
subtitle: 
tags: [css]
---
css에 추가 해주면 된다. 알다시피 background는 셀렉션 했을때 배경색이고 color은 글자색이다. ie는 8이하는 작동 안한다.
<!--more-->

```css
::-moz-selection{background:#fe57a1;color:#fff;}
::selection{background:#fe57a1;color:#fff;}
```