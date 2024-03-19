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

2. 이제 필요한 패키지를 설치한다.

`npm install mongodb`
`npm install mongoose`

3. Next js 권장 방식으로 몽고디비를 연결하자. src폴더 하위에 db 폴더를 만들고, 안에 `dbConnect.ts`  파일을 만들어 해당 소스코드를 붙여넣는다. https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.ts 참고!

4. 그 후 환경변수 설정을 위해 `.env.local` 에 `MONGODB_URI` 값으로, 몽고디비 connect 값을 복사해 붙이면~

![image](/assets/TIL/blog/2_3.png)

연결 구레잇.
(참고로 이 때 database connect 비밀번호를 까먹는다면 웹페이지 사이드바 밑에 보면 `Database Access` 라는 메뉴가 있는데 여기 들어가서 비번 바꾸면 된다.)

5. 이제는 내가 직접 몽고디비 클러스터의 데이터베이스 안에 값들을 다 넣어줄 차례이다. 

```js
// api 코드
import dbConnect from "@/db/dbConnect";
import mainCategory from "@/db/models/mainCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      const categoryData = await mainCategory.find();
      res.status(200).send(categoryData);
      break;
    case 'POST':
      const reqData = await req.body;
      const jsonData =JSON.parse(reqData);
      const newData = await mainCategory.create(jsonData);
      res.status(201).send(newData);
      break;
  }
}
```

결과. 데이터를 잘 넣음!!

![image](/assets/TIL/blog/2_4.png)

참고로 메인 카테고리, 서브 카테고리 데이터는 여러 페이지에서 전역적으로 쓰이며, 메인 카테고리 하위에 서브 카테고리를 조건에 맞게 넣어서 써야 하므로, `app.tsx` 파일 내부에서 해당 api를 불러와 데이터를 맨 처음 패칭하고, 그 데이터를 `조타이`를 활용해서 전역적으로 쓸 예정이다. 지금은 이 모든 걸 구현할 필요는 없으니, 일단 `리액트 쿼리`의 캐싱 타임을 `infinity`로 해서 쓰고, 나중에 조타이를 도입할 것.

6. 메인 카테고리와 서브 카테고리 데이터들을 `category` DB 내부 `maincategories` collection, `subcategories` collection에 다 저장했다. 이제 조건을 걸고 데이터를 조회하는 api를 짜야 한다.

예를 들어 내가 메인 카테고리 `study` 안에 있는 모든 post를 조회하려면, 다음과 같은 코드를 쓰면 된다.

`const studyPosts = await post.find({mainCategory: 'study'})` 

만약 메인카테고리 `algorithm` 하위에 있는 서브 카테고리 목록을 알아내려면, 아래와 같은 코드를 짜면 될 것이다!! 

`const algorithmGroup = await subCategory.find({groupPath: 'algorithm'})`

그 결과, 전체 카테고리 리스트를 조회하는 api는 다음과 같이 구현했다.

```js
// 모든 카테고리 조회 api...

import dbConnect from "@/db/dbConnect";
import mainCategory from "@/db/models/mainCategory";
import subCategory from "@/db/models/subCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  const mainCategoryData = await mainCategory.find();

  const promises =await Promise.all(mainCategoryData.map(async (el: any)=>{
    let subData = await subCategory.find({groupPath: el.path});
    return [el, [...subData]];
  }))
  res.status(200).send(promises);
}
```

data 안에 `[mainCategory 객체, [해당 mainCategory의 하위 Category들...]]` 데이터를 각각 집어넣는 식이다. 예를 들어

![image](/assets/TIL/blog/2_5.png) 

이런 형태의 카테고리라면, response data로

```
[
  [{title: 스터디}, [{title: 기술 면접 스터디}, {title: 모던 리액트 딥다이브 스터디}]],
  [{title: 나의 공부}, [{title: 책 읽기}, {title: 직접 블로그 만들기 프로젝트}]],
]
```

***

## 완성

만족 만족 대만족!!

![image](/assets/TIL/blog/1_6.png)
