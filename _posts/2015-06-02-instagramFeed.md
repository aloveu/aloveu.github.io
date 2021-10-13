---
layout: post
title: "Js - 인스타그램 이미지 가져오기"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [instagram, js]
---
<strong>인스타그램 API 정책이 바껴서 태그로 호출은 안된다고 보면 된다. 모두 앱에 대한 승인건도 그렇고 태그를 호출할래도 accessToken을 받아서 처리하게 되어있는데 그렇게 되면 자기 계정의 태그만 불러지는 현상이 발생한다.</strong>
<!--more-->

인스타그램을 잘 하지 않았는데 개발을 주업으로 하고 있다보니 프로젝트에 쓸일이 있어 최근에 열었다. 특정 태그에 대한 인스타그램 목록을 작성하거나 개인 인스타그램이미지를 가져 와야 할때가 있어서 정리해봤다.

1. <a href="http://instafeedjs.com/" target="_blank" title="새창" class="link">http://instafeedjs.com/</a>에서 instafeed.min.js 파일을 다운 받아 임포트 시킨다. 보라색 download 버튼 누르면 된다.
2. 인스타그램에 로그인 한 상태에서 <a href="https://instagram.com/developer/clients/manage/" target="_blank" title="새창" class="link">https://instagram.com/developer/clients/manage/</a>에 접속한다. 처음 해보는 분들은 register your application을 눌러서 앱 등록을 먼저 해야 한다. 등록을 다 하게 되면 client id를 알 수 있다.
3. 또한 <a href="http://instafeedjs.com/#user" target="_blank" title="새창">http://instafeedjs.com/#user</a>에 들어가서 user id와 accesstoken을 얻어 와야한다. don’t know your user id or token? Click here to get one. 이라는 글에서 click here를 눌러주자. 그러면 페이지 리디렉션 되면서 녹색 박스에 userid와 accessToken을 확인 할 수 있다.
4. 특정 태그명으로 가져오는건 검색할 태그명과 clientId 값만으로 목록을 불러 들일 수 있지만 개인 계정의 리스트를 뿌리는건 그 권한을 얻어야 되기때문에 clientId, userId, accessToken 를 알아야 한다.

인스타그램 옵션은 <a href="http://instafeedjs.com/" target="_blank" title="새창" class="link">http://instafeedjs.com/</a> 에서 확인하면 된다. 아래에 쓰였던 옵션만 설명하자면 target은 인스타그램에서 가져온 이미지들을 뿌려줄 id값을 적어주면 된다. 기본은 instafeed 아이디로 되는데 아래는 두종류를 불러와서 id값을 두개 쓸수 없어 instafeed1로 한개 더 만들어서 target을 적용해준것이다. limit 는 불러올 이미지 갯수다.
<hr>
<script type="text/javascript" src="/js/instafeed.min.js"></script>

## 태그로 검색해서 인스타그램 이미지 불러오기
```html
<script src="js/instafeed.min.js"></script>
<ul id="instafeed1"></div>
<script type="text/javascript">
var feed = new Instafeed({
    get: 'tagged',
    tagName: 'love',
    target: 'instafeed1',
    clientId: 'YOUR CLIENTID',
    limit: '4',
    resolution: 'standard_resolution',
    template: '<li><a href="" target="_blank"><img src="" /></a></li>'
});
feed.run();
```
<ul id="instafeed1"></ul>
<hr>

## 개인 인스타그램 이미지 불러오기
```html
<script src="js/instafeed.min.js"></script>
<ul id="instafeed"></div>
<script type="text/javascript">
var feed = new Instafeed({
    get: 'user',
    userId: YOUR_USERID,
    accessToken: 'YOUR_ACCESSTOKEN',
    link: 'true',
    clientId: 'YOUR CLIENTID',
    limit: '4',
    resolution: 'standard_resolution',
    template: '<li><a href="" target="_blank"><img src="" /></a></li>'
});
feed.run();
</script>
```
<ul id="instafeed"></ul>
<hr>

## 개인 인스타그램 이미지에서 특정 태그만 불러오기
```html
<script src="js/instafeed.min.js"></script>
<ul id="instafeed2"></div>
<script type="text/javascript">
var feed = new Instafeed({
    get: 'user',
    userId: YOUR_USERID,
    accessToken: 'YOUR_ACCESSTOKEN',
    filter: function(image) {
        return image.tags.indexOf('test') >= 0;
    },
    link: 'true',
    target: 'instafeed2',
    clientId: 'YOUR CLIENTID',
    limit: '4',
    resolution: 'standard_resolution',
    template: '<li><a href="" target="_blank"><img src="" /></a></li>'
});
feed.run();
</script>
```
<ul id="instafeed2"></ul>
<hr>

<p>프로젝트에 적용할려면 문제가 있는데 인스타그램에서는 api호출이 1시간에 5,000뷰 제한이 있다. 엔드포인트부터 1시간동안 5000뷰 넘어가면 보이지 않으니 매체광고 타버리는 프로젝트들은 한번에 몰릴 수 있어서 인스타그램피드 불러오기로 프로젝트 돌리기 어렵게 된다. 관련 내용은 <a href="https://instagram.com/developer/limits/" target="_blank" title="새창">https://instagram.com/developer/limits/</a> 에서 확인할 수 있다. 아쉽다.</p>
<p>~ 는 아니고 해결 방법이 있긴 하다. api호출이 시간당 5000뷰니깐 클라이언트쪽에서 피드를 불러오면 계속 페이지 열때마다 api를 불러오게 된다. 당연히 사람이 몰리면 뻗으니… 서버쪽에서 처리를 하는게 맞는거 같다. 서버쪽에서 분당 한번씩이라던가 적당한 시간에 api호출해서 피드를 받아서 이미지 url이랑 링크등 정보를 DB에 쌓은 후에 클라이언트쪽에서 페이지열때는 db에서 링크만 뿌려주면 되는것이다. </p>
<p>이렇게 프로젝트를 해보진 않았는데 이론상 그렇다는 말이니 후에 프로젝트가 있으면 이걸로 테스트를 해보고 고쳐가면 될 것 같다.</p>

