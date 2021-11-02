---
categories: Dev
layout: post
title: "Html - Video Auto Play (자동재생) 🎥"
tags: [html, video]
---
비디오를 자동 재생을 하고 싶을 때 브라우저에서 여러가지 제약이 있는걸 볼 수 있습니다.
어떤 속성을 추가 해야 자동 재생이 되는지 정리 해 봤습니다.
<!--more-->

자동 재생을 하려면 크게 영상에 소리가 있을 때와 없을 때 두가지로 나뉩니다.
해당 포스팅은 좀 더 자동재생 정책이 유연한 데스크탑일때는 고려하지 않고 모바일 기준으로 작성했습니다.

### 1. 영상에 소리가 있을때 🔊
1. 유저의 인터렉션이 있을때 재생이 됩니다. <br>
   이 때는 사실상 자동 재생이라고 보기는 어렵지만 굳이 비디오를 직접 클릭하지 않고 탭클릭 같은 다른 인터렉션에 비디오 재생 액션을 추가하면 됩니다.
   
2. 모바일에서 사용자가 홈화면에 사이트를 추가 했을 때도 소리가 있지만 자동 재생이 가능합니다. 단지 이건 실개발할때는 클라이언트가 홈화면에 추가를 했는지에 대한 유무를 알 수가 없기 때문에 고려할 만한 상황이 아니겠죠.


### 2. 영상에 소리가 없을때 🔈
사실, 영상이 우리가 생각하고 있는(페이지 진입을 하거나, 스크롤을 내리거나 했을 때) 자동재생이 되려면 *muted* attribute 가 필요합니다.  
당연히, *autoplay* 라는 attribute는 필수구요.
muted가 없더라도 영상에 오디오 트랙 자체가 없을때도 autoplay가 되지만 여러 영상을 바인딩할 때 이 영상이 오디오 트랙이 있는지 없는지 확인하기 어렵기 때문에 그냥 *muted* 는 기본적으로 넣는다고 생각하면 될거 같습니다.  

**iOS 10버전 이후 부터는 *playsinline* 도 추가해줘야 자동 재생이 됩니다.**

주의 해야하는건 이렇게 자동 재생 중에 사용자의 인터렉션이 없는데 음소거가 해제되거나 새로운 오디오트랙이 있는 영상이 재생되거나 하면 비디오는 일시 중지 됩니다. 

## ✔ 코드
```html
<video
    src="mediaUrl"
    autoplay
    muted
    playsinline
/>
```

## 📌 참조
<a href="https://developer.chrome.com/blog/autoplay/" target="_blank" class="link">Chrome Developers</a>

<a href="https://developer.apple.com/documentation/webkit/delivering_video_content_for_safari" target="_blank" class="link">Apple Developers</a>
