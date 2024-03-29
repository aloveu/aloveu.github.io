---
categories: Dev
layout: post
title: "Html - 컨텐츠 작업하면서 꼭 확인해야 할 접근성 부분"
subtitle: 
tags: [accessibility, webstandards, chat, html]
---
1. 논리적인 구조 : 왼쪽상단에서부터 우측하단까지 중요한 순서대로 놓는게 논리적인 구조에 맞다. 특히 탭메뉴로 이루어진 게시판같은 경우는 탭제목&gt;내용&gt;더보기,탭제목&gt;내용&gt;더보기 순서대로 구성해야한다.
2. 의미에 맞는 마크업 : 헤딩태그(hx), 리스트 태그(ul,ol), 정의태그(dl,dt,dd), 단락(p)등 글의 구조상 의미에 맞는 태그로 마크업한다.
<!--more-->
3. 건너뛰기 링크 제공 : 페이지가 새로 고쳐질때마다 반복되는 부분들은 키보드로만 웹을 사용하는 사용자들에게는 접근성이 떨어지게 된다. 따라서 그 부분들을 건너뛸 수 있는 링크를 만들어주는게 좋다.
```html
<ul class="accessibility">
    <li><a href="#lnb">주메뉴 바로가기</a></li>
    <li><a href="#content">본문 바로가기</a></li>
</ul>
```

4. 키보드로만 운용 : 모든 컨텐츠를 키보드로만 운용할 수 있어야 한다. 따라서 특정 기기만 지원하는 onmouseover등은 그에 상응하는 onfocus등과 같이 써주는게 좋다.  tabindex를 쓰는것은 나중에는 오히려 순서를 얽히게 하게 되므로 접근성을 해치고 html을 코딩할때 중요순서대로 코딩을 하게 되면 탭으로 이동할때 코딩순서 대로 이동하기 때문에 html을 논리적인 순서대로 배치하는게 중요합니다.
5. 스크립트는 보조적인 수단 : 자바스크립트가 없어도 모든 컨텐츠를 사용하는데 어려움이 없어야 한다. (특히 회원가입이나 게시판 같은경우)
6. 대체텍스트 : 대체텍스트는 꼭 작성해서 시각장애인, 이미지를 볼 수 없는사람도 동일한 정보를 얻을 수 있게 해야한다.<br>
    예) 이미지안에 광양전어축제에 귀하를 초대합니다. 라는 문구가 있는데 초대글 이라고 나올때 틀린 대체 텍스트.의미없는 이미지같은경우는 alt=”” 처럼 빈값으로 넣으면 된다. 그렇다고 alt=””를 제거 하면(&lt;img src=”” /&gt;처럼) 표준에 어긋난다.
7. 이미지맵 대체텍스트 : 맵전체를 대신할 수 있는 alt태그와 title태그로 자세한 설명 그리고 링크값마다의 alt태그를 달아주면 된다.
```html
<img src="map_korea.gif" usemap="#map" alt="○○○○○ 지원센터" title="원하는 지역을 선택하시면, 해당지역내의 서비스센터와 자세한 위치를 보실 수 있습니다." />
<map name="map" id="map">
   <area shape="rect" coords="124,100,168,120" href="kyungji.htm" alt="경기도" onclick="ViewMap('window','kyungji.htm','432','430')" />
   <area shape="rect" coords="188,105,231,125" href="kangwon.htm" alt="강원도" onclick="ViewMap('window','kangwon.htm','432','430')" />
</map>
```

8. 사용자가 원하지 않은 이벤트 : 팝업이나 새창으로 링크가 열리는 링크에는 사전에 예고를 해야한다. target=”_blank” 에는 title속성을 같이 넣어 줘야한다. title=”새창” , title=”새창으로열립니다.” 라고 새창으로 띄워진다는걸 명시해야한다. 또한 페이지가 뜰때 동영상이 플레이 된다든지 하는 이벤트 또한 마찬가지다. 사용자 컨트롤에 의해 플레이가 되야한다. 
9. 영상물은 caption이나 수화등으로 표시해줘야한다.
10. 서식에는 반드시 label 제공하기 : 아이디 값을 참조해서 label이 연결 된다.
```html
<label for="aa">아이디</label><input type="text" value="" id="aa" />
```

11. table : 썸머리에는 테이블을 요약한 말을 적고 caption은 테이블의 제목(썸머리와 캡션내용이 같으면 감점요인), colgroup의 width값은 px을 쓰면 안되고(디폴트값이 px),또는 %로도 쓰임. th에는 항상 scope(col,row,colgroup,rowgroup)를 달아준다. thead와 tbody 로 데이터 제목셀과 데이터셀을 구분해줘야한다.테이블이 데이터를 (th)포함한 테이블이라면 캡션과 썸머리가 꼭 들어가야 한다. <br> <strong class="impt">(단, 데이터 포함하지 않는 테이블은 캡션과 썸머리 생략해야한다.)</strong>

<a href="https://www.wah.or.kr:444/Participation/technique.asp" title="새창" target="_blank" rel="noopener noreferrer" class="link">웹 접근성 연구소-웹콘텐츠 제작기법</a> 부분을 참조

웹접근성 연구소에는 인증사이트들의 현황이 있는데 참고하면 많은 도움이 됩니다.

(<a href="http://www.wah.or.kr/Certification/condition.asp" title="새창" target="_blank" class="link">http://www.wah.or.kr/Certification/condition.asp</a>)
