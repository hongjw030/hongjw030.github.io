---
title: "에러 해결) vs code에서 node:internal/fs/utils:350    throw err;    ^Error: ENOENT: no such file or directory, open './input.txt' 에러 발생 시"
mainCategory: "troubleshooting"
description: ""
coverImg: "/assets/algorithm/algorithm_problem6.png"
---

## 0\. 발생 오류
<br/>

![image](/assets/troubleshooting/1.png)

<br/>
<br/>

## 1\. 문제 상황
<br/>

백준 문제를 풀기 위해 코드를 작성하고 node.js 환경으로 run 시켰더니 다음과 같은 에러가 발생했다. fs 모듈이 input.txt 의 위치를 찾을 수 없다는 것이다. 그러나 분명 나는 경로도 제대로 썼고, 폴더 위치도 제대로 체크했었다.
<br/>
<br/>

## 2\. 풀이 과정
<br/>

알고보니 fs 모듈은 현재 파일 기준으로 경로를 잡는것이 아닌 실행하는 node 콘솔 기준으로 경로를 바라본다는 특징이 있었다.  
즉, 내가 `Post/알고리즘 연습/Solution_fs.js` 파일을 실행했지만 경로가 `Post/알고리즘 연습/` 에서 출발하는 게 아니라 node 콘솔이 깔려있는 위치에서부터(보통은 최상위 폴더) 실행된다는 것.
<br/>

따라서 어디에 node 콘솔이 실행된 건지 파악하기 위해 `fs.writeFile()` 메소드로 파일을 하나 만들어 어디에 파일이 생성되는지를 체크해보았다.
<br/>

```js
const fs = require("fs");

fs.writeFile("./CheckPath.txt", "어디에 있을까?", (err) => {
  if (err) {
    throw err;
  }
});
```
<br/>

위 코드를 실행해보았더니... 아래 사진처럼 최상위 폴더 `Post` 에 CheckPath.txt 파일이 생성되었다.
<br/>

![image](/assets/troubleshooting/1_1.png)

<br/>

즉, 내 node 콘솔 실행 위치는 `Post` 디렉토리 인 것이다.
<br/>

이제 경로를 알았으니 코드를 수정해보자.
<br/>

![image](/assets/troubleshooting/1_2.png)

<br/>
<br/>

## 3\. 결론
<br/>

콘솔 실행 경로를 잘 파악하자.