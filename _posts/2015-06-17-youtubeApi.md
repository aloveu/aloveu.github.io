---
layout: post
title: "Js - YOUTUBE IFRAME API로 유튜브영상 제어하기"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [js, css, youtube]
---
유튜브영상을 프로젝트에 삽입시킬때 제어를 해야하는 경우가 있다. 슬라이드에 유튜브영상을 넣어서 재생중일때는 자동슬라이드를 막는다던가.. 재생중일때 슬라이드 시키면 재생을 멈춘다던가 하는 작업을 해야될때 참고해둘만 하다.
<!--more-->

javascript api 등 다른 방법들도 있다. 관련 api내용은 구글개발자페이지(<a href="https://developers.google.com/youtube/iframe_api_reference?hl=ko" target="_blank" title="새창" class="link">https://developers.google.com/youtube/iframe_api_reference?hl=ko</a>)에 나와있다
<hr>

## iframe api로 동영상 로드
```html
<div id="player_id"></div>

<script type="text/javascript">
    // youtube start
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player_id', {
            height: '307',
            width: '561',
            videoId: '6lNKrFeARzc',
            events: {
            'onStateChange': onPlayerStateChange
            }
        });
    }
  
    function onPlayerStateChange(event) { //동영상상태가 변할때 호출됨
        if(event.data == 0){
            alert('끝');
            //event.data == -1 시작되지않음
            //event.data == 0영상이 끝났을때
            //event.data == 1 재생중
            //event.data == 2 일시중지
            //event.data == 3 버퍼링
            //event.data == 5 동영싱신호
        }
    }
    
    player.playVideo(); //실행
    // player.pauseVideo() //일시중지
    // player.stopVideo() //멈춤
    // player.clearVideo() // 동영상지우기
    // player.mute() //음소거
    // player.unMute() //음소거해제
    // player.isMuted() //음소거 상태반환
    // player.setSize(width,height) // 아이프레임의 크기를 픽셀단위로 설정
</script>
```
<br>

<iframe id="player_id" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="307" src="https://www.youtube.com/embed/6lNKrFeARzc?enablejsapi=1&amp;origin=http%3A%2F%2Fkyouyoum.cafe24.com&amp;widgetid=1"></iframe>
<p><script type="text/javascript">
// youtube start
var tag = document.createElement('script');tag.src = "https://www.youtube.com/iframe_api";var firstScriptTag = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);var player;
function onYouTubeIframeAPIReady() {player = new YT.Player('player_id', {height: '307',width: '561',videoId: '6lNKrFeARzc',events: {'onStateChange': onPlayerStateChange}});}
function onPlayerStateChange(event) {if(event.data == 0){alert('끝');}}
player.playVideo(); //실행
</script></p>