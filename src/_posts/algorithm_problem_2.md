---
title: "JS로 백준 풀기) 백준 10998 "
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "js로 백준 10998을 풀어보았다. 난이도는 최하지만 js로 입력받는 걸 연습하기 위해 풀어봄!"
coverImg: "/assets/algorithm/algorithm_problem2.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem2.png)

***

## 내 풀이

1.  readline으로 입력 받는 법.

```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
readline.on('line', function(line) {
  input.push(line.split(" "));
}).on('close', function(){
    console.log(Number(input[0][0]) * Number(input[0][1]));
    process.exit();
});
```

2.  fs로 입력 받는 법

```js
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(input[0] * input[1]);
```

***

## 결과

성공적!

![image](/assets/algorithm/algorithm_problem2_2.png)
