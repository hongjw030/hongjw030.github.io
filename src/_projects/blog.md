---
note: 5
title: "Next js로 직접 구현한 블로그 웹페이지"
description: "기존의 템플릿으론 커스텀 한계를 느껴 직접 Next js와 Mui으로 구현한 정적 웹페이지."
coverImg: "/project/blog/cover.png"
date: "2024.02 ~ 진행 중"
developmentUrl: "https://hongjw030-github-io.vercel.app/"
githubUrl: "https://github.com/hongjw030/hongjw030.github.io"
functions: "자기소개 및 기술스택 소개, 프로젝트 경험이나 트러블슈팅, 공부한 내용에 대해 포스팅한 글들을 정적으로 보여주는 웹페이지"
---


## Next js로 구현한 블로그 웹페이지.

#### 소개

기존의 템플릿 없이 next js와 mui를 활용해 구현한 정적 웹페이지입니다. 

처음부터 끝까지 혼자 개발하는 만큼 개발 일정 관리와 마일스톤 관리에 힘 쓴 프로젝트입니다. 타 사이트 블로그에 뒤지지 않게 ui에 신경써 반응형으로 구현했으며, 사용자 경험을 위해 스크롤 업 버튼이나 캐러셀 같은 다양한 컴포넌트를 사용했습니다.

#### 블로그를 구현한 이유

1. 단순히 웹의 디자인만 신경쓰는 게 아니라 sitemap, robots, feed 등을 통해 SEO를 알아보고자 합니다.

2. 백엔드 없이 프론트로만 개발하면서 SSR 로직을 알아보고자 합니다.

3. 댓글 기능, 팔로우나 구독 기능 등 깃허브 어플을 활용하고자 합니다.

4. 이후 리팩토링으로 firebase나 mongoDB 같은 데이터베이스를 활용하고자 합니다.


*** 

## 기술 스택

#### react, Next.js 14 (Page routing)

다이나믹 라우팅 페이지는 모두 SSR로 구현했기 때문에 정적생성에 강한 next js를 활용했습니다.

#### mui

블로그의 최소 기능을 빠르게 구현하고 디자인에는 공수를 덜 들이기 위해 mui 라이브러리를 활용했습니다.

#### remark, gray-matter

블로그 포스팅 글을 마크다운 형식으로 작성하기 때문에, markdown to html 로직을 위해 remark와 gray matter 라이브러리를 활용했습니다.


***

## 어떻게 만들었는가? 

#### 1. 초기 단계

![image](/project/blog/ssrcode.png)

프로젝트 폴더 내 파일에 접근하기 위해 정적 생성을 사용해야 했습니다. 이에 `getStaticProps` 를 활용해 각 페이지들을 구현했습니다. 

글을 최신순으로 정렬할 때 각 md 파일에 직접 날짜를 입력하는 일을 줄이기 위해 `statSync` 함수를 사용해 자동으로 파일 생성 날짜를 읽어왔습니다. 

타입스크립트의 장점을 최대한 활용하고자 마크다운 파일의 frontmatter 을 타입으로 만들어 활용했습니다.

![image](/project/blog/muicode.png)

디자인 라이브러리 mui를 활용해 디자인 구현에 에너지를 덜 낭비하면서도, 커스텀을 위해 `styledComponent` 를 두었습니다. mui는 처음 써보는 툴이었기에 공식 문서를 정독하며 공부했습니다.

#### 2. 데이터 관리를 위한 1차 리팩토링

점점 블로그 포스팅 파일 수가 늘어나 데이터 관리에 어려움을 겪고, 프로젝트 폴더 내에서가 아닌 `파이어베이스` 와 같은 외부 DB를 활용해 데이터를 관리하기로 결정했습니다.


***

## 무엇을 배웠는가?

처음으로 개발 일정을 짜보니 덜 중요한 일을 먼저 하게 된다든가, 같은 일을 또 하게 된다든가, 중요한 일을 잊어버리는 등 여러 문제가 있었습니다. 이에 해야 할 일들을 최대한 작은 단위로 쪼갠 다음 `develop`,`seo`, `refactor` 이슈들을 세 파트로 나누고 우선순위를 정해 일을 진행했습니다.

`remark`, `mui`, `gray matter` 등 여러 새로운 라이브러리를 직접 써보는 기회가 되었습니다. 특히 mui를 통해 디자인의 명명을 알 수 있었습니다. 예를 들어 현재 웹페이지의 계층적 위치를 나타내는 컴포넌트로는 `Breadcrumbs` 을 활용할 수 있다는 점, 플로팅 버튼을 누를 때 하위 메뉴 버튼이 뜨는 형태의 컴포넌트는 `Speed Dial` 이라 한다는 점 등을 배웠습니다.

md 파일들을 데이터베이스에 보관하기 위해 mysql와 firebase 두 DBMS를 써보고 sql과 nosql 툴을 비교할 수 있었습니다. 특히 mysql에선 데이터베이스 정규화를 지키고자 노력했습니다.


***

## 추후 리팩토링 계획?

1. seo 등 설정하기
    
    1. 메타태그 필요한거 넣기 (+ 타이틀, 데스크립션 태그)

    2. open graph 설정하기

    3. ads.txt 추가
    
    4. feed.xml, rss.xml 추가
    
2. 리팩토링하기

    1. lighthouse 써보기
    
    2. 기본적인 디자인 수정 및 mui 익숙해지기.
    
    3. TOC 기능 추가
    
    4. 테마 기능 추가
    
    5. 검색 기능 추가
    
    6. 팔로우기능이나 구독 기능 추가
    
    7. 데이터를 파이어베이스로 옮기고 CSR 활용해보기

***

## 샘플 이미지?

![image](/project/blog/cover.png)

![image](/project/blog/covercategory.png)

![image](/project/blog/coverpost.png)

![image](/project/blog/covertotal.png)
