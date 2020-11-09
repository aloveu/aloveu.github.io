---
layout: post
title: "아이폰 주소창 없애기"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [css, script, webstandatds]
---
<div class="entry-content">
    <pre class="html cH_kip"><ol><li class="odd"><span><b class="meta">&lt;</b><a href="http://tranbot.net/html5/semantics.html#meta" class="meta">meta</a> name="viewport" content="width=device-width, minimal-ui"<b class="meta">&gt;</b></span></li></ol></pre>
    <p>minimal-ui 만 추가해주면 된다.<br>
    단 ios 7.1 이상에서만 된다.<span id="more-352"></span><br>
    그 이하는</p>
    <pre class="js cH_kip"><ol><li class="odd"><span>window.addEventListener(<b class="jsString">'load'</b>, <b class="js">function</b>(){</span></li><li class="even"><span>	setTimeout(scrollTo, 0, 0, 1);</span></li><li class="odd"><span>},<b class="js">false</b>);</span></li></ol></pre>
    <p>스크롤 값을 올리는거라 document의 높이가 window창의 높이보다 작으면 스크롤이 안생기기 때문에 주소창이 사라지지 않는다.</p>
</div>