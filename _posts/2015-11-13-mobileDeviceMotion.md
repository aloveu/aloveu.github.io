---
layout: post
title: "모바일 자이로센서 확인"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [jquery, mobile, js]
---
<div class="entry-content">
    <p>2014년경 뉴욕타임스퀘어 광장에서 자신의 모바일기기에 쓴 글을 휴대폰 던지는 모션을 취하면 전광판에 submit 되게 했던 <a href="/portfolio/82">프로젝트</a>였다. 아이폰 기능중에 input에 글을 쓰고 휴대폰을 흔들면 글쓰기 취소가 된다는 것을 깜빡하고 진행했던 프로젝트였는데 당시에 어떻게 아이폰도 같이 서브밋했는지 대응했던 방법이 기억이 나질 않는다 -_-; 어쨌든 잘 마무리 됐었던 프로젝트였다</p>
    <p><span id="more-1193"></span></p>
    <pre class="html cH_kip"><ol><li class="odd"><span><b class="meta">&lt;</b><a href="http://tranbot.net/html5/scripting-1.html#script" class="meta">script</a> type="text/javascript"<b class="meta">&gt;</b></span></li><li class="even"><span></span></li><li class="odd"><span>window.ondevicemotion = <b class="js">function</b>(event) {</span></li><li class="even"><span>  ax = event.accelerationIncludingGravity.x</span></li><li class="odd fifth"><span>  ay = event.accelerationIncludingGravity.y</span></li><li class="even"><span>  az = event.accelerationIncludingGravity.z</span></li><li class="odd"><span>  rotation = event.rotationRate;</span></li><li class="even"><span>  <b class="js">if</b> (rotation != <b class="js">null</b>) {</span></li><li class="odd"><span>    arAlpha = Math.round(rotation.alpha);</span></li><li class="even fifth"><span>    arBeta = Math.round(rotation.beta);</span></li><li class="odd"><span>    arGamma = Math.round(rotation.gamma);</span></li><li class="even"><span>  }</span></li><li class="odd"><span>}</span></li><li class="even"><span></span></li><li class="odd fifth"><span>window.ondeviceorientation = <b class="js">function</b>(event) {</span></li><li class="even"><span>  alpha = Math.round(event.alpha);</span></li><li class="odd"><span>  beta = Math.round(event.beta);</span></li><li class="even"><span>  gamma = Math.round(event.gamma);</span></li><li class="odd"><span>}</span></li><li class="even fifth"><span><b class="meta">&lt;/script</b><b class="meta">&gt;</b></span></li></ol></pre>
    <p>그 당시 움직임 체크후 서브밋 했던 <a href="/demo/sensor.html">데모</a></p>
</div>