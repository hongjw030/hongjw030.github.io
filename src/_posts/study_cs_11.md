---
title: "서버사이드 렌더링, 클라이언트사이드 렌더링 (SSR CSR) 알아보기."
mainCategory: "study"
subCategory: "study_cs"
description: "프론트라면 몰라서는 안되는 그 개념.. SSR CSR 알아보기."
coverImg: "/assets/study/cs/11_1.png"
---

## 오늘의 기술면접 질문

####  SSR과 CSR에 대해 설명해주세요.

서버 사이드 렌더링과 클라이언트 사이드 렌더링은 필수 오브 필수 개념 느낌이라, 면접 때 틀리게 답하면 아웃되는 느낌이다.

부끄럽게도 나는 SSR, SSG, SPA 등... 이런 걸 잘 구분을 못했었는데, 이번 기회에 CSR, SSR 용어에 대해 자세히 알아보고자 한다.

***

## SSR, CSR 파헤치기.

쉽게 말하자면 SSR, 서버사이드 렌더링이란 렌더링이 서버에서 발생하는 것, CSR, 클라이언트사이드 렌더링이란 렌더링이 클라이언트의 브라우저에서 발생하는 것이다.

#### 1. SSR이란?

`서버가 완전히 렌더링된 HTML 페이지를 생성`해 클라이언트의 브라우저로 해당 페이지를 보내는 방식이다. 정적 생성이랑 헷갈릴 수도 있는데, SSR은 정적생성과 달리 `리퀘스트를 받을 때마다 렌더링하는 방식` 이다!! `getServersideProps` 같은 함수를 사용해 SSR을 구현할 수 있다. 

**과정**
1. 사용자가 웹페이지를 요청하면, 서버가 요청을 받는다.
2. 서버는 요청된 데이터와 레이아웃을 기반으로 html 콘텐츠를 동적으로 생성한다.
3. html이 생성되면 서버는 전체 html 페이지를 클라이언트의 브라우저로 보낸다.


#### 2. CSR이란?

`서버가 브라우저에게 원시 데이터(보통 json 타입)을 보내면, 브라우저의 js 프레임워크가 이를 해석`해 html로 렌더링하는 방식이다. 기본적으로 use... 훅은 클라이언트 사이드에서 동작한다!

**과정**

1. 서버가 웹페이지의 원시데이터를 클라이언트의 브라우저로 보낸다.
2. 브라우저가 필요한 js 파일을 다운받는다.
3. 리액트, 앵귤러 같은 js 프레임워크는 브라우저에서 실행되어 api에서 데이터를 가져오고, 최종 html 콘텐츠를 렌더링한다.


#### 3. SSR과 CSR의 차이?

1. 초기 페이지 로딩 시간
- SSR의 경우 이미 렌더링된 페이지를 받아오기 때문에 초기 페이지 로딩이 짧다.
- 반면 CSR의 경우 서버로부터 원시 데이터를 받아 브라우저 내에서 js를 실행하고 페이지를 렌더링하기 떄문에 오래 걸린다!

2. 이후 페이지 로딩 시간
- SSR의 경우 다른 페이지로 넘어갈 때 해당 페이지를 처음부터 다시 서버에서부터 받아와야 한다.
- 반면 CSR은 비동기 로딩, 병렬처리 덕분에 초기 html 페이지가 로드된 후, 브라우저가 렌더링에 필요한 기타 리소스들을 비동기적으로 가져올 수 있다. 따라서 브라우저가 리소스를 다운받는 동안 이미 렌더링된 부분은 표시해줄 수 있어 후속 페이지 로드 시간이 더 빠르다. 

3. SEO
- SSR은 완전히 렌더링된 html 콘텐츠를 클라이언트에게 전송하여 검색엔진 봇이 콘텐츠를 쉽게 크롤링할 수 있게 한다. 
- 반면 CSR은 js를 실행하며 콘텐츠를 렌더링하여 페이지 로드 시 초기 지연이 발생한다. 검색엔진 크롤러는 js가 끝날 때까지 기다리지 않아 콘텐츠 색인이 불안정해지고, 이는 SEO에 안좋은 영향을 미칠 수도 있다. 

#### 4. 언제 CSR을 쓰고, 언제 SSR을 쓸까?

SEO가 필요할 때, 웹 사이트와 유저의 상호작용이 별로 없을 때 등에선 SSR을 쓰면 좋지만, 서버 성능이 좋지 않을 떄, 사용자와의 상호작용이 많을 때 등에는 CSR를 쓰면 좋다.

#### 5. 주의할 점!!! SSR이 사용자와 상호작용 할 수 없다는 게 아니다!!

이 부분을 항상 내가 헷갈려서... 가끔 잘못 대답할 때가 있었는데. (ㅜㅜ)

SSR은 브라우저가 요청을 보낼 때마다, 그 요청을 처리해서 다시 페이지를 렌더링하는 방식이다. 즉, 사용자가 댓글을 단다든가 구독 버튼을 누르는 등 상호작용을 하면 브라우저가 이에 대한 api 요청을 보내고, 서버는 요청을 처리하면서 다시 그 페이지를 재렌더링하여 보여주게 된다. 

그러나 `CSR이 SSR 보단, 사용자와의 상호작용이 많은 경우에 유리한 건 사실` 이다!!

CSR은 SSR과 달리 렌더링이 클라이언트 측에서 일어난다. 즉, 동적 업데이트가 일어나면 페이지 전체를 다시 로드해올 필요가 없다!! 실시간 대화 채팅 어플 같은 데에서는 CSR이 확실히 낫단 말. (참고로 이 개념은 `SPA`, `MPA`, `hydration`와도 관련이 있다... 후속 질문으로 SPA, MPA가 뭔지, 하이드레이션이 뭔지도 들어올 수 있는데 나중에 따로 포스팅을 작성하겠다.)

![image](/assets/study/cs/11_1.png)

#### 6. 참고 사항... CSR의 동작 순서?

CSR과 SSR 관련된 내용은 아니지만, CSR 관련 내용이라 끼워넣어봤다.

CSR은 서버로부터 데이터를 받아 어떻게 렌더링하는 방식인지, 정확히 과정을 정리해보았다.

1. 사용자가 브라우저에 url을 입력하거나 상호작용하여 서버에 요청을 보낸다.
2. 서버는 최소한의 html파일(파일 안에 스크립트 태그 등이 담겨있는) 을 보내준다.
3. 브라우저는 해당 html파일을 받아 파싱하다가, 스크립트 태그 등을 만나면 해당 파일들을 다운받는다.
4. 스크립트가 다운받아지면, 브라우저는 스크립트를 실행한다. 보통 스크립트는 api 데이터를 호출하거나 DOM을 조작하는 코드가 담겨있다. 이렇게 스크립트 코드를 실행하면서 필요한 데이터를 비동기적으로 호출한다
5. 데이터를 받아오면, js 코드는 이를 기반으로 ui 요소들을 동적으로 렌더링한다.
6. 렌더링된 요소들은 html 페이지의 DOM 트리에 삽입되고, 페이지 콘텐츠가 업데이트된다.
7. 완전히 렌더링된 웹 페이지에서 사용자가 다시 상호작용을 한다!

***

## 총정리

#### Q. SSR과 CSR에 대해 설명해주세요.

A. 
SSR과 CSR은 렌더링 방식 차이입니다.

먼저 SSR은 브라우저로부터 요청을 받으면, 요청 받은 페이지를 렌더링하여 완성된 html 콘텐츠를 응답으로 보내주는 방식입니다. 이 방식은 SEO를 최적화하고 초기 렌더링 시간을 줄이는 장점이 있습니다.

반면 CSR은 브라우저에게 요청 받으면 원시 데이터를 넘겨주어, 브라우저가 직접 렌더링하는 방식입니다. 이는 초기 웹페이지 로드 시간이 SSR보다 오래 걸리고 SEO 최적화가 잘 안된다는 단점이 있지만, 후속 웹페이지 로드가 SSR보다 빨라 실시간 대화 서비스 같이 사용자와의 상호작용이 잦은 서비스의 경우 효과적입니다. 

전통적인 방식은 SSR이지만, 이후 등장한 SPA 기법에는 SSR이 성능 문제를 보여 CSR 방식이 생겨났습니다. 

SSR, CSR 두 방식 모두 장단점이 명확하기 때문에, 어느 하나에만 초점을 맞추지 않고 상황에 따라 유연하게 사용하는 게 필요해보입니다.