---
categories: Dev
layout: post
title: "잡담 - 코딩을 좀 더 빠르게.. ZEN CODING 을 알아보자"
subtitle: 
tags: [chat, zencoding]
---
얼마전부터 EditPlus가 3.40버전으로 업데이트 되면서 Zen Coding을 지원 하게 됐다.
<!--more-->

젠코딩(Zen Coding)은 CSS Selector 방식으로 빠른 코딩과 HTML, XML, XSL 그리고 다른 구조의 코드 유형을 편집하기 쉽게 해 주기 위한 플러그인의 집합이다. 이 프로젝트는 2009년에 Sergey Chikuyonok에 의해 만들어졌으며 Chikuyonok과 젠코딩 유저들에 의해 지속적으로 활발하게 개발되고 있다. 도구는 고 프로파일 텍스트 에디터의 숫자로 통합되어왔으며 몇몇의 플러그 인은 젠코딩 팀과 개별적으로 실행시키는 다른 사람들에 의해 개발된다. 젠코딩은 기본적으로 소프트웨어의 부분을 사용한다기 보다 엔진을 바로 사용한다는 점에서 다른 텍스트 에디터와는 구분된다.

젠코딩은 현재 MIT에 의해 오픈 소스로 공개되고 있다.(위키백과 참고)

### 젠코딩 명령어
* expand abbreviation : 약어 실행
* wrap width abbreviation : 영역을 감싸고 약어를 실행
* Match pair : 쌍으로 매치되는 영역을 선택합니다.
* Match pair Inward : 현재 커서위치 부터 매치되는 영역을 선택 합니다.
* Next Edit pointer : 다음 수정될 포인터 위치
* Prev Edit pointer : 이전 수정될 포인터 위치
* go to Matcing pair : 매칭 되는 태그 위치로 커서를 이동
* Merge Lines : 현재 선택된 영역 부터 한줄로 정렬합니다.
* Toggle Comment : 선택된 영역부터 주석처리 하기
* Split/join : 나누고/합치기. ( 흠.. 태그하나로 변경되어버리네. ^^; )
* Remove Tag : 태그 지우기 
* Numbers
    - Evaluate Math Expression : 연산을 실행
    – Increment Number by 1 : 1 증가
    – Decrement Number by 1 : 1 감소
    – Increment Number by 0.1 : 0.1 증가
    – Decrement Number by 0.1 : 0.1 감소
    – Increment Number by 10 : 10 증가
    – Decrement Number by 10 : 10 감소
* select Next Item  : 다음 아이템을 선택
* select previous item : 이전 아이템을 선택
* reflect css value : css 값을 반영 

유명한 젠코딩 영상이다.
<div class="video-container">
  <iframe src="http://player.vimeo.com/video/7405114" frameborder="0" id="fitvid975704"></iframe>
</div>

실제로 사용해 본 결과 아주 좋다. 이전에는 필수 속성같은 부분을 가끔씩 빠뜨려서 html validator에 걸렸었는데 이건 그럴일이 없다. 다 알아서 삽입되어 뿌려주니 편하다. 아마 익숙해 진다면 코딩 속도는 2배이상 빨라질것 같다. 참고로 젠코딩을 실행하는 건 expand abbreviation 이다. 기본 단축키는 Ctrl+e 이지만 좀 더 빠른 코딩을 위해 난 <strong class="impt">Shift+Enter</strong>으로 바꿨다. 단축키 설정은 EditPlus에서 도구&gt;기본설정&gt;키보드 에 보면 zen coding 이라고 있는데 여기서 하면된다. 아래는 실제 사용되는 젠코딩 엘리먼트들을 나열해 본것이다. 너무 많으니 많이 쓰일만한 것만 골라봤다. 스크립트 쪽도 해봤는데 그 부분은 없는듯 했다.

#### Zen HTML Elements
```html
html:4t // doctype html 4.01 Transitional 으로 셋팅되어있는 기본 폼이 호출 된다. 전체를 다 쓰기에는 길어서 패스 (doctype+html+head+title+body) 까지 나온다.
html:4s  // 이제부터 예상된다. doctype html 4.01 Strict 로 셋팅
html:xt  // doctype xhtml 1.0 transitional 로 셋팅
html:xs  // doctype xhtml 1.0 string 로 셋팅
html:xxs // doctype xhtml 1.1 로 셋팅
html:5   // doctype html5로 셋팅
link:css // media type이 all 인 css 링크가 나오게 된다. :print 면 media type이 print
link:favicon, link:rss 는 이제 보기만 해도 알 거 같다.
link:touch // 애플 터치아이콘 링크가 나온다. 아이폰에서 바탕화면에 바로가기 하면 뜨는 아이콘을 지정해 주는 태그다.
table+  // 테이블포함 tr, td 까지 나온다.
dl+  // dl 포함 dt, dd까지 나온다.
ul+  // ul 포함 li 까지 나온다.
li*3 // li가 세개가 나온다
ul>li // ul안에 li가 나온다.
h1+p // h1 다음에 p 태그가 나온다.
ul#menu // <ul id="menu"></ul>
li.menu // <li class="menu"></li>
li.menu$*2 // <li class="menu1"></li><li class="menu2"></li>
// 응용을 한번 해보자
html:5>#wrap>#header>(h1>img)+ul#menu>li.menu$*5>a  //이렇게만 써도 하단 처럼 나온다.
<!DOCTYPE HTML>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <div id="wrap">
      <div id="header">
          <h1><img src="" alt="" /></h1>
          <ul id="menu">
              <li class="menu1"><a href=""></a></li>
              <li class="menu2"><a href=""></a></li>
              <li class="menu3"><a href=""></a></li>
              <li class="menu4"><a href=""></a></li>
              <li class="menu5"><a href=""></a></li>
          </ul>
      </div>
  </div>
</body>
</html>
// : 여기서 이 콜론은 type을 나타내는거고  $는 증감 되는 숫자에 쓰인다. .(점)은 class, #은 id 값, *n은 해당 엘리먼트 반복 수(n), > 는 자식선택자 +는 형제엘리먼트를 나타내게 된다.
// 나머지 엘리먼트들은 엘리먼트 명만 쓰고 엔터치면 된다.
```

엄청나다 +ㅁ+ 사랑하게 될거 같다. 이거…

#### Zen CSS Elements
다음은 css쪽을 알아보자 css는 거의 줄임말로 되어있다. 그래서 간단히 어떻게만 만들어 지는지 써보자

```css
@i // @import url();
@m // @media print{}
@f // @font-face{font-family:;src:url();}
! // !important
exp // expression()
pos:r // position:relative;
fl:l // float:left;
cl:b // clear:both;
d:n // display:none;
ov:h // overflow:hidden;
m // margin:;
p // padding:;
mr // margin-right:;
p:4 // padding:0 0 0 0;
w // width:;
h // height:;
bd // border:;
bg // background:;
bg+ // background:#fff url() 0 0 no-repeat;
c // color:#000;
```

다른것도 엄청나게 많지만 다 쓸려면 시간낭비이기에… (수십,수백개) 라 간단히 패턴만 알고 가면 쓰는데는 문제 없을 것 같다. 그래도 알아야겠다는 사람들을 위해서 참고 할 수 있는 url을 남겨 놓겠다.

### 📌 참조
* <a href="http://code.google.com/p/zen-coding/wiki/ZenHTMLSelectorsEn" target="_blank" title="새창" rel="noopener noreferrer" class="link">http://code.google.com/p/zen-coding/wiki/ZenHTMLSelectorsEn</a>
* <a href="http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf" target="_blank" title="새창" rel="noopener noreferrer" class="link">http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf</a>