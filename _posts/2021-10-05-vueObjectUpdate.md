---
layout: post
title: "Vue - Data 업데이트를 했는데 화면이 바뀌지 않을 때"
subtitle:
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/path.jpg
tags: [vue]
---
Vue Data(Object, Array) 업데이트를 했는데 화면이 바뀌지 않을 때 어떻게 처리해야하는지 ??
<!--more-->
Vue에서는 객체나 배열에 대해 속성의 추가, 수정, 삭제를 감지할 수 없을 때가 있습니다. 따라서 값을 변경을 해도 화면에서는 update되지 않습니다.

화면에서 업데이트 하기 위해서는 

## 객체(Object)의 경우
```js
//변경 되지 않음
someObject.a = '값';

//화면 반영
Vue.set(vm.someObject, 'a', '값');
this.$set(this.someObject, 'a', '값');
this.someObject = Object.assign({}, this.someObject, {a:'값'});
```

## 배열(Array)의 경우
```js
//변경 되지 않음
someArray[a] = '값';
someArray.length = 2;

//화면 반영
vm.someArray.splice(IndexOfA, 1, '값');
Vue.set(vm.someArray, 'a', '값');
this.$set(this.someArray, 'a', '값');
```

## 참고
<a href="https://v3.ko.vuejs.org/guide/change-detection.html" target="_blank">Vue2의 변경 감지 주의사항</a>