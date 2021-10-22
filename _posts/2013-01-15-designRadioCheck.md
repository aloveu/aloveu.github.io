---
category: dev
layout: post
title: "Css - 체크박스, 라디오버튼 디자인 입히기"
subtitle: 
tags: [css, mobile]
---
모바일을 작업하다가 라디오버튼과 체크박스 버튼이 마음에 안들어서 검색 검색!! 그리고 내 입맛에 맞게 수정수정 한 것입니다. 물론 하위브라우저는 안됩니다.
<!--more-->

<input type="radio" name="sex" id="male" value="M"><label for="male">남</label><br>
<input type="radio" name="sex" id="female" value="F"><label for="female">여</label><br>
<input type="checkbox" name="agree" id="agree"><label for="agree">동의합니다.</label>

```html
<input type="radio" name="sex" id="male" value="M"><label for="male">남</label>
<input type="radio" name="sex" id="female" value="F"><label for="female">여</label>
<input type="checkbox" name="agree" id="agree" /><label for="agree">동의합니다.</label>
```
<br>
```css
/* 라디오버튼 */
input[type=radio]{position: absolute;margin:8px 10px 0 0;height:9px;width:9px;background:#fff;border:1px solid #fff;filter: alpha(opacity=0);-moz-opacity: 0;-webkit-opacity: 0;opacity: 0;}
input[type=radio] + label{font: normal 18px/18px;margin-left:35px;}
input[type=radio] + label::before{content: "\2714";display: inline-block;text-indent: -9999px;width: 14px;height:14px;font: bold 12px/12px;text-transform: uppercase;border: solid 1px #767676;border-radius:7px;box-shadow: 0 0 1px 1px #ccc;background: #fff;margin: 3px 4px 0 -35px;}        
input[type=radio]:checked + label::before{text-indent: 2px;color: #0b70cd;text-shadow: 0 0 2px #0b70cd;}
/* 체크박스 */
input[type=checkbox]{position: absolute;margin:2px 10px 0 0;height:10px;width:10px;background:#fff;border:1px solid #fff;filter: alpha(opacity=0);-moz-opacity: 0;-webkit-opacity: 0;opacity: 0;}
input[type=checkbox]+label{font: normal 18px/18px ;margin-left:35px;}
input[type=checkbox]+label::before{content: "\2714";display: inline-block;text-indent: -9999px;width: 16px;height:16px;font: bold 14px/14px;text-transform: uppercase;border: solid 1px #767676;border-radius: 3px;box-shadow: 0 0 1px 1px #ccc;background: #fff;margin: 3px 4px 0 -35px;}        
input[type=checkbox]:checked + label::before{text-indent: 2px;color: #0b70cd;text-shadow: 0 0 2px #0b70cd;}
```