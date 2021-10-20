---
layout: post
title: "Js - Moment를 Dayjs 로 변환 해보기"
tags: [vue, php]
---
Moment가 지원종료된 것도 있고 번들링 된 파일의 거의 30% 가까이 용량을 차지 하고 있는걸 확인(약 300kb - 특히 locale 파일)하고서  dayjs(약 6kb) 로 변경하는 작업을 진행했던걸 정리해봤습니다.
<!--more-->

번들 포비아(<a href="https://bundlephobia.com/" target="_blank" class="link">https://bundlephobia.com/</a>)에서 각 모듈의 번들링 사이즈를 확인 하면 두개의 차이가 확보입니다.

## Moment ( <a href="https://momentjs.com/" target="_blank" class="link">https://momentjs.com/</a> )
![moment 사이즈](/assets/img/post/moment.png)

## Dayjs ( <a href="https://day.js.org/" target="_blank" class="link">https://day.js.org/</a> )
![dayjs 사이즈](/assets/img/post/dayjs.png)

### 설치
#### npm
```shell
npm install dayjs --save
```
#### CDN
```html
<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
```

### 사용법
위와같이 인스톨(이나 include)이 끝났다면 페이지에서 바로 쓸 수 있습니다.

Dayjs는 Moment와 거의 대부분이 호환되고, 기존 Moment 사용자라면 Moment를 사용했던거처럼 쉽게 변환해 사용 할 수 있습니다.

```js
//Momentjs
moment();   //오늘
moment(date, 'YYYY-MM-DD[T]HH:mm:ss').format('YYYY-MM-DD'); //YYYY-MM-DD 포멧으로 변경
let diffTime = END_TIME.diff(START_TIME);
moment.duration(diffTime).hours()  //날짜 비교

//Dayjs
dayjs();    //오늘
dayjs(date, 'YYYY-MM-DD[T]HH:mm:ss').format('YYYY-MM-DD'); //YYYY-MM-DD 포멧으로 변경
let diffTime = END_TIME.diff(START_TIME);
dayjs.duration(diffTime).hours()  //날짜 비교
```

#### 요일표기
요일을 표기 할때처럼 한글이 필요한 상황이라면 dayjs는 경량화된 날짜 관련 라이브러리기때문에 locale 파일을 포함하고 있지 않아서 따로 import 해줘야 합니다.
```js
//Momentjs에서 요일(한글) 표기
import moment from 'moment';
moment('2021-10-20T23:59:59', 'YYYY-MM-DD[T]HH:mm:ss' ).locale( 'ko' ).format( 'ddd' ); //수

//Dayjs에서 요일(한글) 표기
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs('2021-10-20T23:59:59', 'YYYY-MM-DD[T]HH:mm:ss' ).locale( 'ko' ).format( 'ddd' ) //수
```

#### 커스텀포멧 적용
Dayjs는 입력받을 날짜 형식이 정형화 되지 않는 포멧이라면 따로 customParseFormat 를 dayjs모듈에 추가 해줘야 합니다.
```js
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
dayjs('10/20/2021 5:00:00', 'MM/DD/YYYY H:mm:ss');
dayjs('2021-10-20', 'YYYY-MM-DD');
```
그리고 dayjs 두번째 인자에 첫번째인자로 입력받은 날짜 포멧에 맞게 적어줘야 합니다. 
아래처럼 맞춰주지 않는다면 오류(Invalid Date)가 뜰거에요.
```js
dayjs('2021-10-21', 'YYYY-MM-DD[T]HH:mm:ss');   //Invalid Date
```

#### 날짜비교
상단 사용법에서 날짜 비교는 그냥 **dayjs.duration(diffTime).hours()** 이렇게 적어 뒀지만 사실 duration 도 customParseFormat와 같이 확장 플러그인을 추가해줘야합니다.
```js
var duration = require('dayjs/plugin/duration');
dayjs.extend(duration);
```

## 요약
이처럼 기능은 거의 동일하지만 용량은 수십배 차이나니 dayjs를 안쓸 이유가 없어 보입니다.

번들링을 하다보면 유난히 큰 모듈들을 발견하기도 하는데 이때 문서 상단에서 스샷으로 보여 드렸던 번들 포비아(<a href="https://bundlephobia.com/" target="_blank" class="link">https://bundlephobia.com/</a>) 사이트에서 해당 패키지들을 검색해보면 내가 검색한 패키지와 비슷한 패키지들을 추천해줍니다.

![번들포비아](/assets/img/post/bundle2.png)
dayjs는 96%가 유사하다고 나오죠.

## 번외
따로 포스팅을 하긴 할건데 번들링할때 각 패키지 사이즈를 직관적으로 보여주는 플러그인이 있습니다.
**webpack-bundle-analyzer** 를 추가하시면 아래와 같이 볼 수 있습니다.

![webpack-bundle-analyzer](/assets/img/post/bundle.png)