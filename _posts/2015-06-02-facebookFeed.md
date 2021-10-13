---
layout: post
title: "Js - 페이스북 글 가져오기"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [facebook, js]
---
페이스북 타임라인의 글을 가져와 보자..해보니 페이지의 글은 불러오고 개인계정 타임라인 글은 못불러오는듯 하다
<!--more-->

먼저 해야 할 일은 https://developers.facebook.com/apps/ 에 가서 페이스북앱을 만들고 <a href="https://developers.facebook.com/tools/access_token/" target="_blank" title="새창">https://developers.facebook.com/tools/access_token/</a>에서 App Access Token 을 확인 할 수 있다. 그 후에 하단 코드처럼 access token 을 넣어주고 https://graph.facebook.com/ 다음 부분에 페이지 명을 써주면 된다.  테스트로 에드시런(<a href="https://www.facebook.com/EdSheeranMusic" target="_blank" title="새창" class="link">https://www.facebook.com/EdSheeranMusic</a>)의 글을 불러와봤다.</p>

```html
<div class="facebookfeed"></div>
<script type="text/javascript">
function fbFetch(){
    var url = "https://graph.facebook.com/EdSheeranMusic/feed?access_token=YOUR__APP_ACCESS_TOKEN&locale=ko_KR&limit=4&callback=?";
    $.getJSON(url,function(json){
        var html = "<ul>";
        $.each(json.data,function(i,fb){
            if(fb.picture != "")	
                html += "<li><a href='"+fb.link+"' target='_blank'><img src='"+fb.picture+"' alt=''  /><br/><span>" + fb.message + "</span></a></li>";
            else
                html += "<li><span>" + fb.message + "</span></li>";
        });
        
        html += "</ul>";
        $('.facebookfeed').html(html);
    });
};
$(window).load(function(){
    fbFetch();
});
</script>
```

<div class="facebookfeed"><ul></ul></div>