---
title: "css methodology 알아보기."
mainCategory: "study"
subCategory: "study_cs"
description: "css methodology"
coverImg: "/assets/study/cs/12_1.png"
---

## 오늘의 기술면접 질문

#### CSS methodology에 대해 설명해주세요.

기술면접에서 접해본 적은 없는 질문이지만, 그래도 프론트엔드 개발자인만큼 css 방법론에 대해 어느 정도 지식은 있어야 한다...

css 방법론이 뭔지, 왜 이런 게 있는지 알아보고, 대표적인 방법론 3가지 (BEM, SMACSS, OOCSS)에 대해 가볍게 알아보자.

![image](/assets/study/cs/12_1.png)

***

## CSS methodology 파헤치기.

#### 1. CSS methodology가 뭐지?

말 그대로 `CSS 방법론` 이다!!

css 코드를 짤 때 확장성 있고 유지 관리하기 쉽고 재사용 가능하게끔 코드를 짜도록 하는 체계적인 방식을 말한다.

css 코드를 짤 때 한 번쯤 다들 느꼈겠지만, 몇 번째 줄에 어떤 스타일링 코드가 있던 건지, 이 div 태그를 꾸미는 스타일링 코드는 어디에 있던 건지 헷갈린 적이 있었을 것이다. 이러한 부정적인 경험을 줄이고자 등장한 게 CSS 방법론, CSS methodology이다.

#### 2. CSS methodology의 종류?

1. BEM (블록 요소 수정자, Block Element Modifier)

BEM은 웹페이지를 각각 컴포넌트 조합으로 바라보는 방법론이다. 코드 재사용성과 유지 관리성에 초점을 두어, id와 자손 선택자를 쓰지 않는 대신 네이밍 컨벤션으로 클래스 명을 지어 스타일을 적용하는 방식이다.

자세한 건 여기로... > https://en.bem.info/

2. SMACSS (Scalable and Modular Architecture for CSS)

SMACSS는 css 규칙을 기초, 레이아웃, 모듈, 상태 및 테마 범주로 구성하는 것을 강조하여 확장성에 초점을 두는 방식이다. 이 방식의 핵심은 범주화로, 요소의 스타일을 기초, 레이아웃, 모듈 등등 5가지 유형으로 분류해 각 유형에 맞는 네이밍 컨벤션을 쓰는 방식이다.

3. OOCSS ( Object Oriented CSS, 객체지향 CSS)

OOCSS는 스킨에서 구조를 분리하고 유연한 스타일을 지원해 재사용 가능한 모듈식 css 객체를 생성하는 방식이다. 
구조와 모양의 분리, 컨테이너와 컨텐츠의 분리를 기본 원칙으로 내세워 CSS를 관리한다.

자세한 내용은 이 글을 봐도 좋을듯 하다!! > https://2019.stateofcss.com/technologies/methodologies/

***

## 총정리

#### Q. CSS methodology에 대해 설명해주세요.

A. 
CSS methodology란 CSS 코드를 재사용 가능하게끔, 유지보수하기 쉽게끔 체계적으로 관리하고 구현하는 방법론입니다.

여러 방법론이 있는데 대표적으론 BEM, SMACSS, OOCSS 등이 있습니다.

예를 들어 BEM 같은 경우, id나 자손 선택자를 사용하지 않고 block element modifier 에 따른 클래스 네이밍을 통해 스타일 코드를 작성합니다.