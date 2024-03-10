---
title: "JS로 백준 풀기) 백준 1531"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "어떻게 풀지 조금 생각하느라 시간이 걸렸던 문제. 배열을 활용하면 어렵진 않다."
coverImg: "/assets/algorithm/algorithm_problem6.png"
---

![image](/assets/algorithm/algorithm_problem6.png)

![image](/assets/algorithm/algorithm_problem6_1.png)

<br/>
<br/>

## 내 풀이)
<br/>

단순히 생각하자면, 그냥 xy 좌표에 따라 for문을 돌려서 가려진 횟수를 카운트하고, M보다 더 많이 가려진 배열 위치를 세어 리턴하면 된다.
<br/>

그런데 이 때 그림 100x100 배열을 1차원 배열로 만들지, 2차원 배열로 만들지에 따라 코드가 달라진다. (크게는 안달라짐 ㅎㅎ)

<br/>
<br/>

## 내 코드)
<br/>

1.  평범하게 2차원 배열로 그림 배열을 선언하는 경우. 3중 for문까지 돌게 된다.

<br/>

```js
// fs로 입력받는 경우

function solution(N, M, location) {
  // 하나도 가려지지 않은 그림 배열.
  const ARR = [];
  let answer = 0;
  for (let i = 0; i < 100; i++) {
    const line = [];
    for (let j = 0; j < 100; j++) {
      line.push(0);
    }
    ARR.push(line);
  }

  for (let i = 0; i < N; i++) {
    for (let x = location[i][0]; x <= location[i][2]; x++) {
      for (let y = location[i][1]; y <= location[i][3]; y++) {
        ARR[x - 1][y - 1]++;
      }
    }
  }

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (ARR[i][j] > M) {
        answer++;
      }
    }
  }
  return answer;
}

const fs = require("fs");
const [NM, ...XY] = fs
  .readFileSync("./알고리즘 연습/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const location = XY.map((el) => {
  return el.split(" ").map(Number);
});

console.log(solution(N, M, location));
```
<br/>


2.  1차원 배열로 100x100 그림을 선언한 경우. 그냥 10000개 칸의 1차원 배열을 만들고,
<br/>

`arr[0][0] = myArr[0], arr[0][1] = myArr[1] ... arr[1][0] = myArr[1*100 + 0]`
<br/>

으로 계산하면 된다. 즉,
<br/>

`arr[x][y] = myArr[x*100 + y]` 이런 식으로 1차원 배열을 선언해보자. 어차피 메모리 차지하는 공간 크기는 똑같고 연산 횟수도 똑같아서 2차원 배열과는 복잡도가 똑같지만, 3중 for문까진 중첩되지 않아 그나마 보기 좀 편하다.
<br/>

```js
// fs로 입력받는 경우

function solution(N, M, location) {
  // 하나도 가려지지 않은 그림 배열.
  const ARR = [];
  let answer = 0;
  for (let i = 0; i < 10000; i++) {
    ARR.push(0);
  }

  for (let i = 0; i < N; i++) {
    for (let x = location[i][0]; x <= location[i][2]; x++) {
      for (let y = location[i][1]; y <= location[i][3]; y++) {
        ARR[(x - 1) * 100 + (y - 1)]++;
      }
    }
  }

  for (let i = 0; i < 10000; i++) {
    if (ARR[i] > M) {
      answer++;
    }
  }
  return answer;
}

const fs = require("fs");
const [NM, ...XY] = fs
  .readFileSync("./알고리즘 연습/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const location = XY.map((el) => {
  return el.split(" ").map(Number);
});

console.log(solution(N, M, location));
```
<br/>
<br/>

## 결과)
<br/>

2차원 배열로 받든 1차원 배열로 받든 (188ms)
<br/>

참고로 for 문 말고 forEach를 통해 돌리면 조금 더 시간이 많이 걸린다. (192ms)
<br/>

![image](/assets/algorithm/algorithm_problem6_2.png)
