---
categories: Dev
layout: post
title: "Css - svg animation"
tags: [css]
---
버튼에 svg 애니메이션을 적용해 봤습니다.  
<!--more-->
이건 추후에 개발 할때 참고 하기 위해 남겨두는 포스팅입니다. 

```html
<button class="btn-svg">
    <svg height="36" width="120">
        <rect height="36" width="120"></rect>
        <tspan>버튼</tspan>
    </svg>
    <span class="btn-text">버튼</span>
</button>
```
<br>
```scss
.btn-svg {
    position:relative;
    height:36px;
    padding: 0;
    border:0;
    background:transparent;
    svg{
        rect{
            fill:transparent;
            stroke: #ffd24d;
            stroke-width:2px;
            stroke-dashoffset:240%;
            stroke-dasharray: 330% 18;
            transition: 2s;
        }
    }
    &:hover svg rect {
        stroke-dashoffset: -110% !important
    }
    .btn-text{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        color: #525252;
        line-height: 36px;
    }
}
```

### 📝 결과
<button class="btn-svg">
    <svg height="36" width="120">
        <rect height="36" width="120"></rect>
    </svg>
    <span class="btn-text">버튼</span>
</button>