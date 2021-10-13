---
layout: post
title: "Css - SELECT박스 디자인 입히기"
subtitle: 
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [css, webstandards]
---
<p>selectbox 는 원래 디자인이 안된다. border,background 정도야 요즘 나오는 브라우저들은 지원해주지만 제약이 많은건 사실이다.<br>하지만 안되는건 없으니 꼼수로 디자인을 입혀보자</p>
<!--more-->
<p>사실 radio버튼으로 스크립트를 이용해서 깔끔하게 나오게 디자인을 입힐 수 있다. 근데 이건 스크립트도 삽입 해야하고 모바일에서 select 박스 클릭했을때 실행되는 UI가 다르게 나오니 최대한 select박스를 건드리지 말고 작업 하는 거다.</p>

```html
<div class="style_select">
    <select>
        <option value="1">1</option>
    </select>
</div>
```
<br>

```css
.style_select{width:138px;height:47px;margin:0 auto 15px auto;overflow:hidden;background:url('/images/bg_select.png') no-repeat;}
.style_select select{width:160px;height:47px;padding-left:14px;border:none;font-size:1.4em;letter-spacing:0.5em;background:transparent;}
```

셀렉트박스를 bg와 border를 안보이게 해주고 다른 엘리먼트로 감싸주고 그 엘리먼트에 디자인을 입히고 ov:h 해준다. 그리고 셀렉트박스를 위에 감싼 엘리먼트보다 width값을 22px정도 더 크게 만들어주자. 이건 셀렉트 박스 우측에 나타나는 역삼각형을 감추기 위한 것이다. 그러면 아래처럼 나온다. 대신 클릭했을 때 나오는 option 부분의 크기가 다르기 때문에 모바일에서 쓰기를 추천드린다 =ㅁ=; pc는 아까 말한 radio 버튼으로 만드는 select박스 디자인 입히기로… ;;;;