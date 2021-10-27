---
categories: Dev
layout: post
title: "Vue - filter 로 문자열을 원하는 포멧으로 변환시키기"
subtitle:
tags: [vue]
---
Vue 에서는 필터 기능으로 해당 문자열을 내가 원하는 포멧으로 변환을 시킬 수가 있다.
<!--more-->

천단위 콤마(,) 찍기, 날짜 포멧, 전화번호 - 추가 등의 처리를 필터에 정의만 해두면 어디서든 가져다가 쉽게 쓸 수 있다.

보통 전역으로 filter.js를 따로 만들어 관리를 하고 index.js 에 필터를 임포트해서 전역으로 쓴다.

## ✔ 사용 방법
### 1. filter.js 생성
프로젝트 src/filter/filter.js 파일을 추가한다.

![필터파일 추가](/assets/img/post/filter.png)

### 2. index.js에 filter 추가
프로젝트 루트 아래 index.js 에 생성한 filter를 import 해준다.

```js
var a = 1;
import '@/src/filters/filters.js';
```


### 3. 사용할 필터 정의
filters.js 안에 사용할 필터를 정의 해준다.
```js
import Vue from 'vue';

Vue.filter('comma', (value) => {
    if (!value) return 0;
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

//위 코드처럼 바로 vue filter에 전역으로 설정해도 되지만 추후 test code를 작성 하려면 아래와 같이 작성한다.
//그래야 test code 작성때 comma 에 접근할 수 있다.
const comma = (value) => {
    if (!value) return '';
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
Vue.filter('mmm_ddd', comma);
```

### 4. 필터 사용
정의한 필터를 각 컴포넌트에서 사용할때는 해당 값 뒤에 [[ 값 | 필터명 ]] 처럼 작성 하면 된다. ({}가 표현이 안돼 []로 표현)

```js
price = 1000;
[[ price | comma ]]
```

## 천단위 콤마
<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="PoKYbPo" data-user="aloveu" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/aloveu/pen/PoKYbPo">
  vue-filter</a> by Hoon.kim (<a href="https://codepen.io/aloveu">@aloveu</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 필터 체이닝
필터는 체이닝 할 수 있습니다. 예를 들어 천단위 콤마를 찍고, 원(₩)표시를 하려고 하면 순서대로 적어주시면 됩니다.

```js
price = 1000;
[[ price | comma | won ]]
```

## 📌 참조
<a href="https://kr.vuejs.org/v2/guide/filters.html" target="_blank" class="link">kr.vuejs.org</a>