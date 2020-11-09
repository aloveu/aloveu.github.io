---
layout: post
title: "유튜브 영상 가로 100%로 설정했을때 세로 AUTO"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [css, youtube]
---
<div class="entry-content">
    <p>말 그대로 유튜브 영상을 가로 100%로 설정했을때 가로 너비에 비례해서 높이가 혼자 변하지 못했다.<br>
    반응형웹같은 곳에서 유튜브 영상을 넣을때 난감했었는데 얼마전에 외국 블로그에서 해결책을 발견했다.</p>
    <p><span id="more-324"></span></p>
    <p>출처 : <a href="http://avexdesigns.com/responsive-youtube-embed/">http://avexdesigns.com/responsive-youtube-embed/</a></p>
    <pre class="html cH_kip"><ol><li class="odd"><span>    <b class="group">&lt;</b><a href="http://tranbot.net/html5/grouping-content.html#the-div-element" class="group">div</a> class="video-container"<b class="group">&gt;</b></span></li><li class="even"><span>        <b class="text">&lt;</b><a href="http://tranbot.net/html5/the-iframe-element.html#the-iframe-element" class="text">iframe</a> width="100%" height="315" <b class="text">src="//www.youtube.com/embed/6lNKrFeARzc"</b> frameborder="0" allowfullscreen<b class="text">&gt;</b><b class="text">&lt;/iframe</b><b class="text">&gt;</b></span></li><li class="odd"><span>    <b class="group">&lt;/div</b><b class="group">&gt;</b></span></li></ol></pre>
    <pre class="css cH_kip"><ol><li class="odd"><span>.video-container{<b class="css">position:</b>relative;<b class="css">padding-bottom:</b>56.25%;<b class="css">padding-top:</b>30px;<b class="css">height:</b>0;<b class="css">overflow:</b>hidden;}</span></li><li class="even"><span>.video-container iframe,.video-container object,.video-container embed{<b class="css">position:</b>absolute;<b class="css">top:</b>0;<b class="css">left:</b>0;<b class="css">width:</b>100%;<b class="css">height:</b>100%;}</span></li></ol></pre>
    <p><div class="fluid-width-video-wrapper" style="padding-top: 58%;"><iframe src="//www.youtube.com/embed/6lNKrFeARzc" frameborder="0" allowfullscreen="" id="fitvid481316"></iframe></div></p>
    <p>살펴보면 유튜브 아이프레임을 div 컨테이너에 넣어서 패딩값으로 높이를 조절했다. 저런생각을 했다는게 신기하다 =ㅁ=;</p>
</div>
