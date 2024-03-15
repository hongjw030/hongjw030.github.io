---
title: "JS로 백준 풀기) 백준 10869 "
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "js로 백준 10869 풀어보았다. 브론즈 5단계 > 10869번 사칙 연산문제로  난이도는 최하지만 js로 입력받는 걸 연습하기 위해 풀어봄!"
coverImg: "/assets/algorithm/algorithm_problem3.png"
---

## 문제 

![image](/assets/algorithm/algorithm_problem3.png)

브론즈 5단계 > 10869번 사칙 연산

***

## 내 풀이

간단한 문제이지만 js로 입력 받는 것을 연습하기 위해 풀어보았다.

1\. readline으로 입력받을 때

```js
// readline으로 푸는 경우

function solution(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(Math.floor(num1 / num2));
  console.log(num1 % num2);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline
  .on("line", function (line) {
    input.push(line.split(" "));
  })
  .on("close", function () {
    solution(Number(input[0][0]), Number(input[0][1]));
    process.exit();
  });
```

2\. fs로 입력받는 경우

```js
// fs로 입력받는 경우

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);
```

***

## 결과

위는 fs로 푼 결과고, 아래는 readline으로 푼 결과이다. fs로 풀 때 시간이 조금 더 적게 든다.

![image](/assets/algorithm/algorithm_problem3_3.png)
