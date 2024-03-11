---
title: "JS로 백준 풀기) 백준 1292"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "solved.ac 기준 브론즈 1단계, 정답률 56.736%."
coverImg: "/assets/algorithm/algorithm_problem5.png"
---

![image](/assets/algorithm/algorithm_problem5.png)

<br/>
<br/>


### 문제 해석)
<br/>

1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ... 로 진행되는 수열이 있다.
<br/>

예를 들어 인풋으로 `3 7` 을 받는다면,  
수열의 3행 + 4행 + 5행 + 6행 + 7행 = 2 + 3 + 3 + 3 + 4 = 15 를 리턴하도록 함수를 짜야 한다.
<br/>

이렇게 어느 구간 사이의 합을 구할 때엔, `동적 프로그래밍, DP`를 이용해야 한다.
<br/>

새로운 배열 Arr을 하나 만들고,
<br/>

1.  Arr배열의 1행에는 수열 0행 + 1행
2.  Arr배열의 2행에는 수열 0행 + 1행 + 2행
3.  Arr배열의 1행에는 수열 0행 + 1행 + 2행 + 3행
4.  Arr배열의 2행에는 수열 0행 + 1행 + 2행 + 3행 + 4행  
    ...
<br/>

식으로 진행되게 값을 삽입하자.
<br/>

만약 수열의 3행과 7행 사이의 값의 합을 구하려 한다면, Arr\[7\] - Arr\[3-1\] 을 하면 답이 나올 것이다.

<br/>
<br/>

### 내 풀이)
<br/>

```javascript
// fs로 입력받는 경우

function solution(start, end) {
  const arr = [0];
  let count = 0;
  let num = 1;
  for (let i = 1; i <= end; i++) {
    arr.push(arr[i - 1] + num);
    count++;
    if (count >= num) {
      num++;
      count = 0;
    }
  }
  return arr[end] - arr[start - 1];
}

const fs = require("fs");
const [start, end] = fs
  .readFileSync("./알고리즘 연습/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(start, end));
```
<br/>
<br/>

### 결과
<br/>

![image](/assets/algorithm/algorithm_problem5_1.png)
