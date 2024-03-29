---
categories: Dev
layout: post
title: "Vue - router 이동때 페이지 스와이프 효과 주기"
subtitle:
tags: [vue]
---
vue에서 router로 이동할때 swipe 효과 주려면 transition 과 router를 적절히 사용 해주 면 되는데 하나씩 알아보자
<!--more-->
## router 설정
라우터 설정파일에서는 페이지가 이동 할 때마다 스와이프가 왼쪽으로 이동할 건지 오른쪽으로 이동할 건지 방향 알기 위해 meta 에 page index를 추가 해준다.

예제에서는 page가 큰방향이면 좌=>우, 작은방향이면 우=>좌로 이동하게 만들 예정이다.

```js
const routes = [
    {
        path: '/home',
        meta: {page : 0}
    },
    {
        path: '/profile',
        meta: {page : 1}
    },
    {
        path: '/blog',
        meta: {page : 2}
    }
]
```

## App.vue 설정
* router-view 컴포넌트를 transition으로 감싼다.
* transition에 name을 이전 router 파일에서 설정한 meta.page 값을 비교해 동적으로 변하게 작성한다.
* transition에 name를 바탕으로 css를 작성한다.

페이지를 이동 할때마다 transition의 name을 변경해주면서 transition에서 사용할 좌우 효과를 적용할 style도 작성 해준다.

```vue
<template>
  <main>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </main>
</template>
<script>
export default {
    data() {
        return {
            transitionName: '',
        }
    },
    watch: {
        $route(to, from) {
            this.transitionName = to.meta.page > from.meta.page ? 'next' : 'prev';
            if (from.meta.page === 0 && to.meta.page === 2) {
                this.transitionName = 'prev';
            } else if (from.meta.page === 2 && to.meta.page === 0) {
                this.transitionName = 'next';
            }
        },
    },
}
</script>

<style lang="scss">
main {
    position: relative;
    z-index: 0;
    width: 100%;
    min-height: 100%;
    flex: 1;
    background-color: white;
    overflow-x: hidden;
    & > * {
        width: 100%;
        grid-area: main;
        background-color: white;
        position: relative;
        overflow: hidden;
    }
    & > :first-child {
        z-index: 1;
    }
    & > :nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
    }
}
.next {
    &-leave-to {
        animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 0;
    }
    &-enter-to {
        animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 1;
    }
}
.prev {
    &-leave-to {
        animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 1;
    }
    &-enter-to {
        animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 0;
    }
}
@keyframes leaveToLeft {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(-100%, 0, 0);
        filter: brightness(0.95);
    }
}
@keyframes enterFromLeft {
    from {
        transform: translate3d(-100%, 0, 0);
        filter: brightness(0.95);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes leaveToRight {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(100%, 0, 0);
    }
}
@keyframes enterFromRight {
    from {
        transform: translate3d(100%, 0, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}
</style>
```