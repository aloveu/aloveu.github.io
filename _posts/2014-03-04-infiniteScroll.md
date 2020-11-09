---
layout: post
title: "INFINITE SCROLL PLUGIN (스크롤 새로고침, 스크롤 로딩, 무한 스크롤)"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [css, script, jquery]
---
<div class="entry-content">
    <h2>Infinite scroll</h2>
    <p>최근들어서 작업을 하다가 이 문제와 관련해서 문의를 많이 받다보니 트랜드가보다! 싶다. 페이스북, 인스타그램, 카카오스토리 등을 보다 보면 스크롤이 맨 하단으로 갔을때 새로운 내용이 로딩된다.</p>
    <p><span id="more-292"></span></p>
    <p>참 편리하게도 제이쿼리 플러그인으로 나와서 적용만 하면 된다. 우선 아래 링크가 해당 플러그인 사이트이다.</p>
    <p><a href="http://www.infinite-scroll.com/infinite-scroll-jquery-plugin/comment-page-2/" target="_blank">http://www.infinite-scroll.com/infinite-scroll-jquery-plugin/comment-page-2/</a></p>
    <p>위 링크에도 다 나와있지만 로딩하는 페이지들을 2.html , 3.html 과 같이 만들어 놓고 로드시킨다.</p>
    <pre class="html cH_kip"><ol><li class="odd"><span><b class="meta">&lt;</b><a href="http://tranbot.net/html5/scripting-1.html#script" class="meta">script</a> type="text/javascript"<b class="meta">&gt;</b></span></li><li class="even"><span>	$(<b class="jsString">'#content'</b>).infinitescroll({</span></li><li class="odd"><span>		binder : $(<b class="jsString">'#content'</b>), </span></li><li class="even"><span>		navSelector  : <b class="jsString">"#page-nav"</b>,</span></li><li class="odd fifth"><span>		nextSelector : <b class="jsString">"#page-nav a"</b>,</span></li><li class="even"><span>		itemSelector : <b class="jsString">"li"</b> <b class="comment">//2page, 3page에서 추가할 엘리먼트</b></span></li><li class="odd"><span>		},<b class="js">function</b>() {</span></li><li class="even"><span>			<b class="comment">//콜백함수</b></span></li><li class="odd"><span>		});</span></li><li class="even fifth"><span>	});</span></li><li class="odd"><span><b class="meta">&lt;/script</b><b class="meta">&gt;</b></span></li></ol></pre>
</div>