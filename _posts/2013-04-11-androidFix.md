---
layout: post
title: "Js - 안드로이드 FIXED된 레이어 가로,세로 전환시 뷰포트 문제"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [mobile, js]
---
<p>이미지를 100%로 잡고 모든 수치를 %로 작업을 하는건 너무 고된 일이라 최근엔 가로 640으로 작업후 뷰포트로 조절을 하고 있다.</p>
<p>근데 기분좋게 작업을 마치고 안드로이드에서 가로 세로 회전을 하는 순간 픽스된 상하단 쪽 이미지가 잘려서 나오고 가로에서 다시 세로로 변환했더니 가로로 확대 됐던 레이어가 확대된 상태로 남아 있는것이였다. ㅠㅠ 여기 저기 기웃거려 보기도 하고 검색 많이 해봤지만 못찾았다 결국은 꼼수로 가로나 세로로 회전을 할때 해당 화면을 리로드 시켜주는 방법밖에 없었다.</p>
<!--more-->
<pre class="html cH_kip"><ol><li class="odd"><span>(function(){  </span></li><li class="even"><span>var init = function() {  </span></li><li class="odd"><span>  var updateOrientation = function() {  </span></li><li class="even"><span>    var orientation = window.orientation;  </span></li><li class="odd fifth"><span>      </span></li><li class="even"><span>    switch(orientation) {  </span></li><li class="odd"><span>      case 90: case -90:  </span></li><li class="even"><span>        orientation = 'landscape';  </span></li><li class="odd"><span>		location.reload();</span></li><li class="even fifth"><span>      break;  </span></li><li class="odd"><span>      default:  </span></li><li class="even"><span>        orientation = 'portrait';  </span></li><li class="odd"><span>    }  </span></li><li class="even"><span>      </span></li><li class="odd fifth"><span>    location.reload();</span></li><li class="even"><span>  };  </span></li><li class="odd"><span>    </span></li><li class="even"><span>  // event triggered every 90 degrees of rotation  </span></li><li class="odd"><span>  window.addEventListener('orientationchange', updateOrientation, false);  </span></li><li class="even fifth"><span>    </span></li><li class="odd"><span>}  </span></li><li class="even"><span>  </span></li><li class="odd"><span>window.addEventListener('DOMContentLoaded', init, false);  </span></li><li class="even"><span>  </span></li><li class="odd fifth"><span>})();</span></li></ol></pre>
<p>혹시나 아시는분 알려주시면 감사하겠습니다 (__);</p>
<hr>
<p>참고로 뷰포트를 1로 해서 작업하면 fixed 된 레이아웃에는 문제가 없다.</p>
<hr>
<p>그럼에도 불고 하고 fixed를 써야 되겠다 싶으면 디자인부터 가변을 생각해서 나와야 한다. 그냥 viewport 1로 고정시켜놓고 하면 되니깐…</p>
<p>그런데 디자인이 통짜 이미지에 디자인이 덕지덕지 붙어있다?라고 하면 꼼수로 html,body를 height:100%로 잡고 fixed할 부분을 absolute로 잡는다. 그리고 컨텐츠들은 내부 스크롤로 처리하면된다.(overflow:auto;) 그런데 overflow:auto도 문제가 있기 때문에 iscroll등을 이용해서 스크롤 처리를 하지만 유튜브 영상이나 input 등이 그안에 내용으로 들어가면 또 iscroll 문제가 발생한다.. 어렵다!!!</p>
