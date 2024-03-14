---
title: "자바스크립트의 Event Loop에 대해서. (feat. 싱글 스레드란?)"
mainCategory: "study"
subCategory: "study_cs"
description: "기술면접 단골 질문, js의 싱글스레드와 event loop에 대해 알아보자."
coverImg: "/assets/study/cs/1_1.png"
---

## 오늘의 기술면접 질문

####  자바스크립트의 Event Loop에 대해 말해주세요.

완전완전 cs 단골질문. 기술 면접을 한 3번인가 봤는데 2번 정도 질문 받았다.

js의 이벤트 루프가 무엇인가?

이를 알기 위해선 js가 어떻게 동작하는지, js 언어가 싱글 스레드 기반이라는 게 무슨 뜻인지 알 필요가 있다.

이번 포스팅에선 js의 전체적인 동작 원리와, 그 안에서 event loop가 무슨 일을 하는 것인지 알아보자.


***

## js의 event loop 파헤치기.

### 1. 이벤트 루프가 뭔데?

이벤트 루프는 js 런타임 환경에서 js의 비동기 작업을 관리하는 핵심 매커니즘으로, call stack과 task queue를 지속적으로 체크하며 queue의 비동기 작업을 stack으로 넘겨주는 일을 합니다.

![image](/nit/이게뭔개소리야.png)

이게 뭔 소리야!

이벤트 루프를 이해하려면 일단 js의 동작 원리부터 이해를 해야 한다.

### 2. js는 어떻게 동작하는가? (= js는 어떻게 코드를 읽어 동기, 비동기적으로 코드를 수행하는가?)


![image](/assets/study/cs/1_1.png)

위의 사진은 Javascript 런타임 환경을 나타낸다.

런타임 환경 내부에는 (1) js 코드를 해석하는 js 엔진, (2) Web apis, (3) task queue 혹은 callback queue, (4) event loop 가 있다.

그리고 js 엔진 안에는 (1-1) memory heap, (1-2) call stack 이 있다.

1-1) memory heap: 동적으로 생성된 객체가 할당되는 공간이다.
1-2) call stack: task 요청이 들어오면 call stack 안에 push되고, 요청을 순차적으로 push하면서 실행한다. js에는 딱 call stack을 하나만 사용하기 때문에 한 함수가 실행되면 그동안은 어떤 task도 수행될 수 없다. 이 특성 때문에 JS를 `싱글 스레드` 라고 표현한다!

그런데 동기적인 코드는 그냥 call stack에다 push, pop 하면서 코드를 실행할 수 있지만 비동기 코드는 플로우가 약간 다르다.

1. js에서 비동기로 호출되는 콜백 함수는 call stack에 push되지 않고, task queue에 enqueue된다. (콜백을 감싸고 있던 외부 함수는 그대로 call stack에서 pop되면서 사라짐. 예를 들어 `setTimeout(()=>{...})` 코드가 call stack 안에 push되고 `setTimeout` 코드를 실행할 순서가 되면 비동기 함수문을 모아두는 web api에게 요청을 보내면서 그대로 pop되어 제거되고, 콜백함수는 web api로 이동.)

2. 이후 web api가 비동기 함수 작업을 끝내면, 전달받은 콜백 함수를 task queue에 등록해준다. 

3. 그 동안 call stack 안에 있던 동기문들이 모두 끝나 stack이 비어있다면, call stack을 주시하고 있던 event loop가 그제서야 queue에 등록돼있던 콜백함수들을 stack으로 하나씩 이동시킨다.

4. callback 함수가 실행되면 stack으로부터 pop 시켜서 제거하고, 그 다음 queue의 요소를 등록해 실행한다 ... 


### 3. 다시 돌아가서... 그럼 event loop는 무슨 일을 하는 녀석인가?

정리하자면 이벤트 루프란, js의 런타임 환경에 존재하며 콜스택과 queue를 주시하며 스택이 비어있을 때 queue의 콜백함수를 스택에 등록시켜주는 역할을 한다. 이벤트 루프 자체는 js 엔진의 일부는 아니고, 브라우저의 런타임 환경에 소속되어 js의 비동기 작업 처리를 보장하는 요소이다.

***

## 총정리

#### Q. 자바스크립트의 Event Loop에 대해 말해주세요.

A. 
이벤트 루프란, 브라우저의 런타임 환경에서 js엔진의 콜스택과 queue를 주시하며, 동기문 작업이 끝난 후 스택이 비어있을 때 queue의 콜백함수를 스택에 등록시켜주는 역할을 합니다.

이벤트 루프를 통해 js의 비동기 작업을 보장하고 코드를 원활하게 실행할 수 있게 됩니다.