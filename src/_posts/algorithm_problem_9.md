---
title: "JS로 프로그래머스 풀기) 직사각형 별찍기"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "어렵진 않았지만 새로 알게 된 메소드가 있어서 풀어보았다."
coverImg: "/assets/algorithm/algorithm_problem9.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem9.png)

***

## 내 풀이

왜 1레벨에 있는지 모를 정도로 쉬운 문제. 코딩 입문에서 하는 별 찍기, 직사각형 찍기 문제이다.

그런데 하나 독특한 점은 `표준 입력`으로 두 개의 정수가 주어진다는 점이었다.

이게 뭔가 싶어서 봤더니...

#### Node js 환경에서의 표준 입출력

Node js 환경에서 표준 입출력은 `process`라는 내장 모듈을 통해 접근할 수 있다. process 내장 모듈의 `stdin`, `stdout` 이라는 stream 객체를 사용해 입출력을 받을 수 있다는 뜻.

```javascript
const process = require('process');

process.stdin.setEncoding('utf8');
// 입력
process.stdin.on('data', data => {
  // 출력
  process.stdout.write('data: ' + data);
})
```

이 문제에선 그냥 답을 `console.log`로 출력해도 되지만, 연습 삼아서 `stdout` 모듈을 통해 출력해보았다. (참고로 `console.log` 랑 시간 차이도 안 난다.)

***

## 내 코드

#### 1. 이중 for문을 쓴 기존 풀이

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let i=0;i<b;i++){
      let str = '';
      for (let j = 0;j<a;j++){
        str += "*";
      }
      process.stdout.write(`${str}\n`);
    }
});
```

#### 2. repeat 메소드를 쓴 풀이

repeat 메소드는 문자열 내장 메소드로, `const repeatedStr = str.repeat(3)` 이렇게 사용할 수 있다. str 문자열을 3번 반복해 새 문자열을 만들자는 뜻.

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const line = "*".repeat(a);
    const answer = `${line}\n`.repeat(b);
    
    process.stdout.write(answer);
});
```

***

## 결과

#### 1. 이중 for문의 경우

```html
테스트 1 〉	통과 (41.75ms, 31.9MB)
테스트 2 〉	통과 (58.08ms, 32MB)
테스트 3 〉	통과 (41.38ms, 31.9MB)
테스트 4 〉	통과 (70.55ms, 32MB)
테스트 5 〉	통과 (40.86ms, 32MB)
테스트 6 〉	통과 (41.52ms, 31.9MB)
테스트 7 〉	통과 (42.90ms, 32MB)
테스트 8 〉	통과 (63.05ms, 32.9MB)
테스트 9 〉	통과 (53.41ms, 37.7MB)
테스트 10 〉	통과 (47.63ms, 32.4MB)
테스트 11 〉	통과 (58.85ms, 37.1MB)
```

#### 2. repeat 메소드를 쓸 경우

```html
테스트 1 〉	통과 (44.40ms, 32MB)
테스트 2 〉	통과 (43.47ms, 32MB)
테스트 3 〉	통과 (44.30ms, 32MB)
테스트 4 〉	통과 (59.75ms, 32MB)
테스트 5 〉	통과 (45.23ms, 31.9MB)
테스트 6 〉	통과 (48.86ms, 32MB)
테스트 7 〉	통과 (44.96ms, 31.9MB)
테스트 8 〉	통과 (63.00ms, 32MB)
테스트 9 〉	통과 (50.81ms, 32.1MB)
테스트 10 〉	통과 (51.95ms, 32.1MB)
테스트 11 〉	통과 (42.68ms, 32MB)
```