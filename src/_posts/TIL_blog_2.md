---
title: "내 프로젝트에 파이어베이스 활용해보기."
mainCategory: "TIL"
subCategory: "TIL_blog"
description: "데이터들을 파이어베이스에 저장해 api로 호출하는 식으로 바꿔보자."
coverImg: "/assets/TIL/blog/cover.png"
---

## 오늘의 할 일

#### 파이어베이스를 왜 활용하려 하는가?

현재 내가 만든 블로그 사이트의 폴더 내부 모습은 다음과 같다...

![image](/assets/TIL/blog/2_1.png)

서버 없이 프론트만으로 블로그를 만들기 위해, src 폴더 내부에 post 글을 저장해두는 폴더를 따로 만들고 `getStaticProps`, `getStaticPath` 를 통해 정적생성해서 모든 포스팅 글에 따른 html 파일을 만들어두는 식이다.

지금에야 블로그 글이 많지 않아 괜찮지만, 블로그 글이 많아질수록, 카테고리를 더 추가할 수록 폴더 내부 데이터들을 관리하기 힘들어진다. 그리고 md 파일 위의 `frontmatter` 에 필요한 데이터를 저장하는 식인데, 데이터 철자를 틀린다든가 카멜체로 써야 하는 데이터를 하이픈체로 쓴다든가의 실수를 하면 그대로 렌더링되지 못하는 잠재적인 문제도 있다.

때문에 table 형식으로 관리해주면서 데이터를 가시적으로 보기 편한(view) DB의 중요성이 부각된다.

(이렇게 리팩토링하면 SEO나 sitemap 생성이 좀 맘에 걸리긴 하지만 나중에 SSR의 hydration을 쓰는 리팩토링도 진행할 것이기 때문에 일단은 SEO같은 건 다 건너뛰고 파이어베이스 활용만 신경쓰자.)

***

## 환경

Next js pages routing 사용.
몽고디비, 몽구스 사용.

***

## 과정

#### 우선 카테고리 데이터를 정리해보자.

목표: 카테고리 데이터들(ex. 스터디 카테고리, TIL 카테고리 등등..) 을 파이어베이스 DB에 넣고, next js api 라우트를 통해 DB로부터 데이터를 불러오도록 구현하기.

1. Next js 프로젝트이기 때문에 pages 폴더 안에 api 폴더를 만들고, 이 안에 category.js 파일을 만들 것이다. `GET localhost/api/category` 을 하면 카테고리 데이터를 가져오도록 할 것.

http를 테스트해봤더니 다음과 같이 잘 된다.

![image](/assets/TIL/blog/2_2.png)

2. 그다음 할 일은 몽구스 사용하기다.

`npm install mongoose`를 한다.


***

## 완성

만족 만족 대만족!!

![image](/assets/TIL/blog/1_6.png)
