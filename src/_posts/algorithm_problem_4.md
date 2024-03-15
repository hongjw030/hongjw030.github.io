---
title: "JS로 백준 풀기) 백준 1173번"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "문제 난이도는 낮지만, js 입력을 연습하고자 풀어보았다."
coverImg: "/assets/algorithm/algorithm_problem4.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem4.png)

![image](/assets/algorithm/algorithm_problem4_1.png)

***

## 내 풀이

어려운 문제도 아녔는데 조건 하나를 놓쳐서 30분을 고민했다.

1.  최저 심박수 m, 최대 심박수 M
2.  운동 1분당 오르는 심박수 T
3.  휴식 1분당 내려가는 심박수 R  
    운동 N분을 하기 위해 필요한 운동 + 휴식 총 시간은?

단, 최대 심박수가 M을 초과하면 -1을 리턴한다. 즉, m + T > M 일 경우 return -1

단, 최소 심박수가 m 미만이 되면 최소 심박수를 m으로 간주한다. 즉, M - R < m 일 경우 현재 심박수는 m.

최소 심박수가 m 미만이 될 경우에도 운동을 못 하는걸로 착각해서 한참을 헤맸다. 백준 질문 게시판에서 나 같은 질문글을 보고서야 내가 무슨 조건을 놓쳤는지 깨달았다. (고마워요 스피드웨건!)

***

## 내 코드

```js
// fs로 입력받는 경우

function solution(N, m, M, T, R) {
  // 운동을 못 할 경우.
  if (m + T > M) return -1;

  let answer = 0;
  let i = 0;
  let myHeart = m;
  while (i < N) {
    if (myHeart + T <= M) {
      // 운동을 한다.
      myHeart += T;
      i++;
      answer++;
    } else {
      // 쉰다.
      myHeart = myHeart - R < m ? m : myHeart - R;
      answer++;
    }
  }
  return answer;
}

const fs = require("fs");
const [N, m, M, T, R] = fs
  .readFileSync("./알고리즘 연습/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(N, m, M, T, R));
```

***

## 결과

![image](/assets/algorithm/algorithm_problem4_2.png)
