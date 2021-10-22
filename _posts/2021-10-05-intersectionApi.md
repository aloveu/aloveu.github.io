---
category: dev
layout: post 
title: "Js - 엘리먼트(영역)가 화면에 보이는지 확인하는 법"
subtitle: 
tags: [js]
---
페이지가 스크롤 되는 도중에 내가 원하는 컨텐츠가 화면에 보였을때 콜백을 처리 하려면 IntersectionObserver API 를 사용 하면 된다.
<!--more-->
예를 들어 화면에 있는 비디오 태그가 화면의 어느시점에 보였을 때의 코드를 구현 한다면

```js
//비디오 observer 콜백함수
function videoObserverCallback(_entries) {
    _entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            entry.target.pause();
        } else {
            entry.target.play();
        }
    });
};

//메인 feed video 재생 handler
function videoScrollHandler() {
    const observer = new IntersectionObserver(this.videoObserverCallback, { threshold: 0.6 });
    const videos = document.getElementsByTagName('video');
    videos?.forEach((_video) => observer.observe(_video));
};

videoScrollHandler();
```

## 📌 참조
<a href="https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API" target="_blank">MDN</a>