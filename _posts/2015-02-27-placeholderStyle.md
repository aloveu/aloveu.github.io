---
layout: post
title: "Css - HTML5 PLACEHOLDER 색,줄바꿈"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [css, js, webstandards]
---
<div class="entry-content">
    <p>html5 placeholder를 사용하면 스크립트로 그부분 안짜도 되서 참 간단하게 처리 된다. 가끔 이 placeholer 부분도 스타일을 먹이고 싶을때가 있는데 알아보자<span id="more-800"></span></p>
    <div class="test"><textarea id="" cols="30" name="" rows="10" placeholder="플레이스홀더"></textarea></div>
    <pre class="html cH_kip"><ol><li class="odd"><span><b class="interactive">&lt;</b><a href="http://tranbot.net/html5/the-button-element.html#the-textarea-element" class="interactive">textarea</a> name="" id="" cols="30" rows="10" placeholder="플레이스홀더"<b class="interactive">&gt;</b><b class="interactive">&lt;/textarea</b><b class="interactive">&gt;</b></span></li></ol></pre>
    <pre class="css cH_kip"><ol><li class="odd"><span>::-<b class="css">webkit-input-placeholder:</b>:after {</span></li><li class="even"><span>    <b class="css">display:</b> block;</span></li><li class="odd"><span>    <b class="css">content:</b> "타인을 배려하는 마음으로 댓글을 달아주세요 \A 내용에 따라 임의 조치를 수행 할 수 있습니다.";</span></li><li class="even"><span>	<b class="css">letter-spacing:</b>-0.1em;</span></li><li class="odd fifth"><span>}</span></li><li class="even"><span>textarea[placeholder],input[placeholder],</span></li><li class="odd"><span>    [placeholder],</span></li><li class="even"><span>    *[placeholder] {</span></li><li class="odd"><span>      <b class="css">color:</b> #00ffff;</span></li><li class="even fifth"><span>    }</span></li><li class="odd"><span></span></li><li class="even"><span>::-webkit-input-placeholder { <b class="comment">/* WebKit, Blink, Edge */</b></span></li><li class="odd"><span>    <b class="css">color:</b>    #909;</span></li><li class="even"><span>}</span></li><li class="odd fifth"><span>:-moz-placeholder { <b class="comment">/* Mozilla Firefox 4 to 18 */</b></span></li><li class="even"><span>   <b class="css">color:</b>    #909;</span></li><li class="odd"><span>   <b class="css">opacity:</b>  1;</span></li><li class="even"><span>}</span></li><li class="odd"><span>::-moz-placeholder { <b class="comment">/* Mozilla Firefox 19+ */</b></span></li><li class="even fifth"><span>   <b class="css">color:</b>    #909;</span></li><li class="odd"><span>   <b class="css">opacity:</b>  1;</span></li><li class="even"><span>}</span></li><li class="odd"><span>:-ms-input-placeholder { <b class="comment">/* Internet Explorer 10-11 */</b></span></li><li class="even"><span>   <b class="css">color:</b>    #909;</span></li><li class="odd fifth"><span>}</span></li></ol></pre>
    <p>근데 줄바꿈은 일부기기 지원 안함 -_-;; 갤럭시s3같은…</p>
</div>