---
title: "Document Object Model이 뭔지 알아보자."
mainCategory: "study"
subCategory: "study_cs"
description: "Document Object Model에 대해 설명하자."
coverImg: "/assets/study/cs/7_1.png"
---

## 오늘의 기술면접 질문

####  Document Object Model이 뭔지 설명해주세요.

`document object model` 은, 프론트엔드 공부를 하면서 한 번쯤 들어봤던 개념이긴 한데 확실히 와닿지는 않아서 이번 기회에 정리해보고자 한다.


***

![image](/assets/study/cs/7_1.png)

## Document Object Model 파헤치기.

### 1. Document Object Model이 뭔데?

줄여서 DOM이라고도 말하는 문서 개체 모델, Document Object Model이란 html, xml와 같은 웹 문서들에 대해, 이 문서와 상호작용하기 위해 메소드와 속성을 제공하는 웹문서용 api이다. 

DOM은 웹 페이지 내부에 표시될 요소들을 트리 구조로 구조화해 보여주고, js 언어로 각 요소들을 조작할 수 있게끔 한다.

### 2. 뭔소리야...?

좀 더 쉽게 설명하자면!!

document object model은 js 스크립트가 html 혹은 xml 문서의 콘텐츠와 상호작용할 수 있도록 `브라우저에서 제공하는 프로그래밍 인터페이스`이다.

예를 들어 `document.createElement()` 메소드는 js가 html 문서에 새 요소를 추가하는 조작을 할 수 있도록 해주는 DOM 내 메소드이다. 

이렇게 DOM의 기본 속성과 메소드를 활용해 웹페이지를 동적으로 조작할 수 있다.

***

## 총정리

#### Q. Document Object Model이 뭔지 설명해주세요.

A. 
도큐먼트 오브젝트 모델, DOM이란 js 스크립트가 html 혹은 xml 문서와 상호작용할 수 있도록 브라우저에서 제공하는 웹문서용 api 입니다.

DOM을 통해 js로 웹페이지 동적 조작이 가능하게 됩니다.