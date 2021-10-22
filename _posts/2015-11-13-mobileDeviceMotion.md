---
category: dev
layout: post
title: "Js - 모바일 자이로센서 확인"
subtitle: 
tags: [jquery, mobile, js]
---
2014년경 뉴욕타임스퀘어 광장에서 자신의 모바일기기에 쓴 글을 휴대폰 던지는 모션을 취하면 전광판에 submit 되게 했던 프로젝트였다. 

아이폰 기능중에 input에 글을 쓰고 휴대폰을 흔들면 글쓰기 취소가 된다는 것을 깜빡하고 진행했던 프로젝트였는데 당시에 어떻게 아이폰도 같이 서브밋했는지 대응했던 방법이 기억이 나질 않는다 -_-; 어쨌든 잘 마무리 됐었던 프로젝트였다
<!--more-->
```js
window.ondevicemotion = function(event) {
    ax = event.accelerationIncludingGravity.x
    ay = event.accelerationIncludingGravity.y
    az = event.accelerationIncludingGravity.z
    rotation = event.rotationRate;
    if (rotation != null) {
        arAlpha = Math.round(rotation.alpha);
        arBeta = Math.round(rotation.beta);
        arGamma = Math.round(rotation.gamma);
    }
}

window.ondeviceorientation = function(event) {
    alpha = Math.round(event.alpha);
    beta = Math.round(event.beta);
    gamma = Math.round(event.gamma);
}
```
그 당시 움직임 체크후 서브밋 했던 <a href="/demo/sensor.html" class="link">데모</a>