---
title: "에러 해결) REST Client로 post 데이터 넘겨줄 때 데이터가 제대로 안 전달되는 이슈 해결 +  First argument to `Model` constructor must be an object 에러 해결"
mainCategory: "troubleshooting"
description: ""
coverImg: "/assets/troubleshooting/3_1.png"
---

## 0\. 발생 오류

VS code 익스텐션인 `REST client` 를 사용해, api를 테스트하던 도중 문제가 생겼다.

`post` 메소드를 통해 json 데이터를 전달해 200 status가 떴는데도 req.body로 받은 데이터가 아무것도 없던 것.

![image](/assets/troubleshooting/3_1.png)

콘솔문으로 `req.body`를 출력하면 잘 나오는데, req.body를 처리하면 에러가 뜨거나 아예 데이터 값이 잘 넣어지지 않는 이슈가 발생했다.

***

## 1\. 문제 상황

우선 나는 몽고디비에 데이터를 넣는 코드를 짜고 있었고,

`post` 메소드를 통해 디비에 데이터를 넣는 api를 테스트하고 있었다.

코드는 다음과 같다.
```js
import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";
import mainCategory from "@/db/models/mainCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      res.status(200).send({
        message: "getter method"
      })
      break;
    case 'POST':
      const reqData = await req.body;
      console.log( reqData)
      const newData = await mainCategory.create(req.body);
      console.log(newData)
      res.status(201).send(newData);
      break;
  }
}
```

`reqData`는 잘 출력되지만, 막상 디비에 데이터를 넣고 난 후의 결과값을 받아보면 아무것도 출력되지 않았다.

디비 연결 문제인가 한참 삽질했지만, 그게 문제가 아니라...

req.body의 type이 string이라서 문제였던 것!!!!!!

***

## 2\. 풀이 과정

객체 형태로 디비에 넣으면 안되는 건가? 하는 생각에 `typeof req.body` 를 찍어봤더니 `string`으로 출력됐다.

충격... 이때껏 나는 `object`라고 착각하고 있었는데.

그래서 json 데이터를 object로 바꿔주는, `JSON.parse()` 메소드를 사용해 req.body를 객체로 바꿔주었다.

```js
// 바뀐 코드.
import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";
import mainCategory from "@/db/models/mainCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      res.status(200).send({
        message: "getter method"
      })
      break;
    case 'POST':
      const reqData = await req.body;
      const jsonData =JSON.parse(reqData);
      console.log(jsonData)
      console.log(typeof jsonData)
      // res.status(201).send(newData);
      break;
  }
}
```

그랬더니 이젠 객체 형태로도 잘 뜨!!,,, 는 줄 알았는데, 또 다른 문제가 발생했다.

![image](/assets/troubleshooting/3_2.png)

갑자기 이런 새로운 에러가 터졌는데, 

```
TypeError: First argument to `Model` constructor must be an object, **not** a string. Make sure you're calling `mongoose.model()`, not `mongoose.Model()`.
    at model.Model  ,,,
``` 

어쩌구... 이게 뭔 소리람?? 분명 나는 `mongoose.model()` 메소드를 썼는데 왜 이런 에러가 나나 한참 고민했다.

문제 원인은 쌩판 딴 곳이었다.

![image](/assets/troubleshooting/3_3.png)

12번째 줄 맨 마지막 json데이터 뒤에 콤마가 붙은 게 보이는가?!? 이게 에러의 원인이었다... 

자바스크립트 객체에서 습관적으로 맨 뒤에도 콤마를 붙여서 json 데이터에도 붙였는데, 이러면 안된단다.

콤마를 제거하면 에러가 사라진다.


***

## 3\. 결론

에러는 여기서 터졌는데 딴 데서 해결하는 봉창 뚜들기는 소리.