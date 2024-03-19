---
title: "CORS에 대해 설명하자."
mainCategory: "study"
subCategory: "study_cs"
description: "CORS가 뭔지 알아보기"
coverImg: "/assets/study/cs/8_1.png"
---

## 오늘의 기술면접 질문

#### "CORS가 뭔지 설명해주세요."

프론트 개발을 하다보면 항상 cors policy 에러에 막혀 머리를 쥐어뜯곤 한다.

그만큼 프론트 개발자들을 괴롭히는 cors.. 가 과연 뭘까. 개념을 이해해보자.

~~cors를 이해한다고 cors 에러가 해결되는 건 아니겠지만! 하핫ㅠ~~

![image](/assets/study/cs/8_1.png)

맨날 보게 되는 지긋지긋한 cors 에러.

***

## CORS 파헤치기

### 1. CORS가 뭔데?

CORS란, **Cross-Origin Resource Sharing** 의 약자다.

간단히 말하자면 `웹 브라우저에서 특정 도메인 외부에 있는 리소스에 대한 접근을 허용할지 말지 제어할 수 있는 매커니즘이다.`

`cross origin` 이란 `다른 출처`를 의미하는데, 여기서 출처란 프로토콜, 호스트, 포트 번호 등 url의 구성 요소를 의미한다.

예를 들어 `http://hongjw030.com` 과 `https://hongjw030.com` 은 프로토콜이 다르기 때문에 다른 출처이다. 브라우저는 기본적으로 `동일 출처 정책(SOP, Same Origin Policy)`을 따르기 때문에, 다른 출처로부터 리소스 요청을 차단해버린다.

여기서 SOP를 해결하기 위해(= 필요에 따라 다른 출처와 리소스를 공유하기 위해) 등장한 게 바로 CORS이다! cross origin resource sharing이란 다른 출처 간에 자원을 공유하는 것을 허용하는 매커니즘이다! 


### 2. CORS가 왜 존재하는 건데?

요즘 웹은 외부 api를 사용하는 일도 잦고, 다양한 도메인 리소스에 엑세스해야 하는 경우가 많다. 다른 출처 간 리소스 공유를 완전히 차단하면 그럴 수가 없으니 다른 출처간의 리소스 공유도 경우에 따라 허용해야 한다.


### 3. 어떻게 CORS를 설정하는가?

CORS는 HTTP헤더를 사용해 설정할 수 있다.

예를 들어 서버는 `Access-Control-Allow-Origin` 헤더 값을 설정해 다른 도메인으로부터 요청을 받아들일지 설정할 수 있다.

api 서버 도메인이 www.A.com 이고, 프론트엔드 배포 도메인이 www.B.com이라면, 서버측에서는 Access-Control-Allow-Origin 값에 www.B.com을 명시해 프론트단 도메인이 서버 자원에 접근하는 걸 허용할 수 있다!

Access Control Allow Origin 외에도, 

`Access-Control-Allow-Credentials` (접근 가능한 쿠키 설정)
`Access-Control-Allow-Headers` (접근 가능한 헤더 설정)
`Access-Control-Allow-Methods` (접근 가능한 http method 설정)

과 같은 cors 설정 헤더가 있다.

### 4. CORS는 어떻게 동작하는가? (= 어떻게 CORS를 통해 api 요청들을 거르고 허용하는 걸까?)

1. 브라우저가 서버에게 request를 보낼 때 header의 `origin` 속성에 자신의 출처를 담아 request를 보낸다.
2. 서버는 브라우저에게 response를 보내는데, 이 때 이 response의 header의 `Access control allow origin` 속성에 자신이 허용한 출처들을 적어 보낸다.
3. response를 받은 브라우저는 자신의 request에 적혀있는 `origin` 값과, 서버로부터 받은 response의 `Access control allow orign` 값을 비교한다.
4. 둘의 값이 일치하다면 서버의 response가 올바른 response임을 인지하고 처리한다!

그런데 브라우저가 서버에게 요청을 보낼 때, 상황에 따라 조금씩 방법이 다르다.

크게 3가지 case가 있는데, 

1. 브라우저가 서버에게 예비 요청을 보내지 않고 바로 `simple request`를 보내는 case.
2. 브라우저가 서버에게 `preflight request`를 먼저 보낸 후, 서버가 그 예비 요청이 안전한지 확인한 다음에야 예비 요청에 대한 response를 보내주고, 그제서야 브라우저가 본 요청을 보내는 case.
3. `credential request`라고 해서 `credentials` 옵션을 통해 헤더에 쿠키나 인증 관련 헤더를 담아 요청을 보내는 case.

보통은 2번, `preflight request` 방식으로 CORS 체크가 진행된다.

![image](/assets/study/cs/8_2.png)

위의 사진은 1번, simple request 플로우 사진. simple request가 일어날 수 있는 조건이 까다로워서 거의 일어나지 않는 flow이다.

![image](/assets/study/cs/8_3.png)

위의 사진은 2번, preflight request 플로우 사진. 거의 대부분은 이 플로우를 따른다.


***

## 총정리

#### Q. CORS에 대해 설명해주세요.

A. 브라우저는 기본적으로 동일 출처 원칙을 따르기 때문에 다른 출처간 자원 공유가 안되는데, 좀 더 자유롭게 다른 출처들 간 리소스를 공유하기 위해 등장한 매커니즘이 CORS 입니다.

Access control allow origin 등의 헤더 값을 설정해 CORS를 설정할 수 있습니다.

CORS가 동작하는 가장 흔한 방식인 preflight request에 따르면, 브라우저가 먼저 서버에게 예비 요청인 preflight request를 보내면 서버는 이 예비 요청에 대한 응답으로 Access control allow origin 등의 CORS 설정 값을 담아 브라우저에게 보냅니다.
그럼 브라우저는 request의 origin 값과 response의 Access control allow origin 값을 비교해, 응답이 유효하다면 그제야 본 요청을 보내는 방식으로 동작합니다.

근래 웹은 외부 api를 많이 활용하기도 하고, 다양한 서버로부터 통신하는 만큼 CORS 설정이 필요합니다.

