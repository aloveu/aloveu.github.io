---
categories: Dev
layout: post
title: "Css - 유튜브 영상 가로 100%로 설정했을때 세로 AUTO"
subtitle: 
tags: [css, youtube]
---
말 그대로 유튜브 영상을 가로 100%로 설정했을때 가로 너비에 비례해서 높이가 혼자 변하지 못했다.

반응형웹같은 곳에서 유튜브 영상을 넣을때 난감했었는데 얼마전에 외국 블로그에서 해결책을 발견했다.
<!--more-->

```html
<div class="video-container">
    <iframe width="100%" height="315" src="//www.youtube.com/embed/6lNKrFeARzc" frameborder="0" allowfullscreen></iframe>
</div>
```
<br>
```css
.video-container{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}
.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%;}
```
<br>
<div class="video-container">
    <iframe src="//www.youtube.com/embed/6lNKrFeARzc" frameborder="0" allowfullscreen="" id="fitvid481316"></iframe>
</div>
살펴보면 유튜브 아이프레임을 div 컨테이너에 넣어서 패딩값으로 높이를 조절했다. 저런생각을 했다는게 신기하다 =ㅁ=;

## 📌 참조
<a href="http://avexdesigns.com/responsive-youtube-embed/">http://avexdesigns.com/responsive-youtube-embed/</a>