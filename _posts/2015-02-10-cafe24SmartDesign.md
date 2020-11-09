---
layout: post
title: "CAFE24쇼핑몰 스마트디자인 정리"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [css, script, webstandatds]
---
<div class="entry-content">
    <h2>개요</h2>
    <p>cafe24 쇼핑몰은 제이쿼리가 내장되어있다. 근데 이게 1.4.4 버전이라 플러그인 적용하기가 쉽지 않다. 그냥 1.4.4에 직접맞게 코드 짜서 쓰는게 맘이 편할 정도..</p>
    <p>css부분도 관리가 쉽게 하기 위해서 각 모듈별로 정리해놨는데 난 이게 더 불편하다. 파일 하나하나 열어보고 이 모듈에서 인클루드되어있는 css를 다시 찾아가야 하는 번거로움이 있다. 그냥 common.css나 sub.css, main.css, product.css, board.css 정도로 넣고 안에서 주석 처리 하면 될것을 .. ㅠㅠ css 파일 찾다 시간 다 간다. 여튼 csfe24 스마트 디자인에서는 인클루드를 다음과 같이 한다.<span id="more-795"></span></p>
    <pre class="html cH_kip"><ol><li class="odd"><span><b class="comment">&lt;!--@css(/layout/basic/css/common.css)--&gt;</b>  // css</span></li><li class="even"><span><b class="comment">&lt;!--@js(/layout/basic/js/basic.js)--&gt;</b>      // js</span></li><li class="odd"><span><b class="comment">&lt;!--@import(/layout/basic/top.html)--&gt;</b>     // html</span></li></ol></pre>
    <h2>슬라이드 기능넣기</h2>
    <p>이미지 롤링 부분은 cafe24 스마트디자인에서 제공을 해준다. 별다른 기능 안쓰고 롤링만 원한다면 관리자페이지 &gt; c스토어 &gt; 전체앱목록에서 포토 슬라이드 v2(무료) 를 구매 하시고 c스토어 &gt; 마이앱에서 포토슬라이드 부분에서 관리하기 눌러서 설정만 해주시면<br>
    롤링 적용이 된다.<br>
    정확한건 포토슬라이드 메뉴얼을 보면 나와있음</p>
    <h2>관리자페이지</h2>
    <p>기본적인거 말고 찾는데 살짝 어려웠던 부분을 적어본다.</p>
    <dl>
    <dt>메일 설정</dt>
    <dd>고객관리 &gt; 자동메일발송설정 (주문완료 메일,가입메일…)</dd>
    <dt>운영일지</dt>
    <dd>게시판관리 &gt; 운영일지 (난 운영일지를 blog처럼..사용한다 =ㅁ=; 크롬에서 운영일지 글쓰기 에디터 안먹음 -_-; 익스로 써야함;;)</dd>
    <dt>SEO</dt>
    <dd>상점관리 &gt; 운영관리 &gt; 검색엔진최적화</dd>
    <dt>네이버연동</dt>
    <dd>상점관리&gt;제휴서비스</dd>
    <dt>쇼핑몰 메인 롤링 배너</dt>
    <dd>C스토어 &gt; 전체앱목록 &gt; 검색(포토 슬라이드v2-무료) 구매하기 후 관리</dd>
    <dt>택배연동서비스</dt>
    <dd>부가서비스 &gt; 운영지원서비스 &gt; 택배연동서비스</dd>
    <dt>반품주소</dt>
    <dd>상점관리 &gt; 배송관리 &gt; 배송/반품설정</dd>
    <dt>검색창에 홍보문구</dt>
    <dd>프로모션 &gt; 홍보배너/문구관리 &gt; 상품검색키워드 설정</dd>
    </dl>
    <h2>찾기 어려운 파일 위치</h2>
    <pre class="html cH_kip"><ol><li class="odd"><span>/sde_design/선택스킨/board/opdiary/ //운영일지게시판</span></li></ol></pre>
</div>