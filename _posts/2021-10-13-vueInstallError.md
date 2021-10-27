---
categories: Error
layout: post
title: "Vue - ⛔ cli 설치 후 에러"
subtitle:
tags: [vue, error]
---
**'vue'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는배치 파일이 아닙니다.**
<!--more-->

![vue create error](/assets/img/post/vueInstallError.png)

@vue/cli 설치 이후 프로젝트를 생성(vue create 'projectName')했을 때 위와 같은 오류가 발생 했을 경우

## 환경변수 설정
보통 환경 변수가 오류인 경우가 많아서 환경변수 세팅을 해줘야 한다.

키보드의 윈도우버튼을 누르고 '시스템 환경 변수 편집' 을 검색해서 아래와 같이 수정한다.

시스템 속성 > 고급 > 환경변수 > 사용자변수에서 Path를 '편집' 하고 Path의 환경 변수에 npm 위치를 추가하면 된다.

@vue/cli를 글로벌로 설치 했다면 설치된 위치는 아래와 같다.

```text
C:\Users\[[사용자이름]]\AppData\Roaming\npm
```

![vue create error](/assets/img/post/vueInstallError2.png)
   
![vue create error](/assets/img/post/vueInstallError3.png)
   
![vue create error](/assets/img/post/vueInstallError4.png)

환경설정이 다 됐다면 켜져있는 cmd 창을 닫고 다시 띄운 후에 vue 명령어를 쳐본다.

![vue create error](/assets/img/post/vueInstallError5.png)