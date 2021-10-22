---
category: dev
layout: post
title: "Html - 아이폰 주소창 없애기"
subtitle: 
tags: [html, js, ios]
---
minimal-ui 만 추가해주면 된다.
<!--more-->

```html
<meta name="viewport" content="width=device-width, minimal-ui">
```
단 ios 7.1 이상에서만 된다. 그 이하는
```js
window.addEventListener('load', function(){
    setTimeout(scrollTo, 0, 0, 1);
},false);
```

스크롤 값을 올리는거라 document의 높이가 window창의 높이보다 작으면 스크롤이 안생기기 때문에 주소창이 사라지지 않는다.
