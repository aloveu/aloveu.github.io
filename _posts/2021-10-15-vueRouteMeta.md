---
layout: post
title: "Vue - routes 의 meta 정보를 children 에서 활용하기"
subtitle: 'test'
tags: [vue]
---
routes meta 정보를 페이지에서 사용하는 도중에 children 페이지에 모두 똑같은 meta 정보를 넣어서 사용하다가 너무 비효율적인 거 같아 찾아봤는데  
<!--more-->

상위 라우터 레코드와 하위 라우트 레코드 모두 일치하는지 확인을 하려면 **$route.matched** 로 접근하면 되는데 
예를 들어 루트(/)나 page1이나 page2에서 로고를 보여줄건지 안보여줄건지에 대한 처리는 다음과 같다.

```js
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: { isLogoHide: true },
        children: [
            {
                path: 'page1',
                ...
            },
            {
                path: 'page2',
                ...
            },
        ]
    }
];
```
meta 설정은 상위 라우터 레코드에만 작성 해준다. 아래처럼 children 배열에 추가하지 않아도 된다.
```js
children:[
    {
        path: 'page1',
        meta: { isLogoHide: true },
    },
]
```

뷰페이지에서는 

```vue
//page1, page2에서..
<template v-if="$route.matched.some((m) => m.meta.isLogoHide)">Logo</template>
```