---
categories: Dev
layout: post
title: "Css - HTML5 PLACEHOLDER 색,줄바꿈"
subtitle: 
tags: [css, js, webstandards]
---
html5 placeholder를 사용하면 스크립트로 그부분 안짜도 되서 참 간단하게 처리 된다. 가끔 이 placeholer 부분도 스타일을 먹이고 싶을때가 있는데 알아보자
<!--more-->

<div class="test">
<textarea id="" cols="30" name="" rows="10" placeholder="플레이스홀더"></textarea>
</div>

```html
<textarea name="" id="" cols="30" rows="10" placeholder="플레이스홀더"></textarea>
```
<br>
```css
::-webkit-input-placeholder::after {
    display: block;
    content: "타인을 배려하는 마음으로 댓글을 달아주세요 \A 내용에 따라 임의 조치를 수행 할 수 있습니다.";
    letter-spacing: -0.1em;
}
textarea[placeholder],input[placeholder],[placeholder],*[placeholder] {
    color: #00ffff;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #909;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #909;
   opacity: 1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #909;
   opacity: 1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #909;
}
```

근데 줄바꿈은 일부기기 지원 안함 -_-;; 갤럭시s3같은…

<style>

::-webkit-input-placeholder::after {
    display: block;
    content: "타인을 배려하는 마음으로 댓글을 달아주세요 \A 내용에 따라 임의 조치를 수행 할 수 있습니다.";
	letter-spacing:-0.1em;
}
textarea[placeholder],input[placeholder],
    [placeholder],
    *[placeholder] {
      color: #00ffff;
    }
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #909;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #909;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #909;
}
</style>