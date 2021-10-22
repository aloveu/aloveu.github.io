---
category: dev
layout: post
title: "Css - INPUT TYPE=FILE 을 이미지로 대체하기"
subtitle: 
tags: [css, js, webstandards]
---
이미지가 없기 때문에 border와 background-color을 사용했다. 실제 사용할때는 #file_box에 있는 background부분을 이미지로 교체해주면 된다. 너비&amp;높이도 이미지 크기로 조절하고 border은 지워주면 된다.
<!--more-->

```html
<label for="upfile_value">파일업로드</label><input type="text" name="upfile_value" id="upfile_value" onclick="fileButtonClick();" readonly />
<div id="file_box"><input type="file" id="upfile" onchange="changeFile()" name="upfile"></div>
```
<br>

```js
function fileButtonClick(){
    document.getElementById('upfile').click();
}
function changeFile(){
    document.getElementById('upfile_value').value = document.getElementById('upfile').value;
}
```

<br>

```css
#upfile_value, #upfile{border:1px solid #ddd;width:105px;height:27px;line-height:27px;text-indent:5px;}
	#file_box{display:inline-block;height:29px;width:63px;cursor:pointer;overflow:hidden;vertical-align:middle;background:#eee;border:1px solid #666;}
	#upfile{height:25px;width:63px;cursor:pointer;opacity:0;filter:alpha(opacity=0);}
```