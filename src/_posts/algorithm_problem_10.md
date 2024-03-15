---
title: "JS로 프로그래머스 풀기) 삼각형의 완성조건(2)"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "0레벨에 정답률은 80퍼센트의 무난~한 문제."
coverImg: "/assets/algorithm/algorithm_problem10.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem10.png)

***

## 내 풀이

#### case 1. 입력받은 sides 배열의 가장 큰 값이 삼각형의 제일 큰 변이라고 할 때.

sides 배열의 큰 수를 M, 작은 수를 N 하자.

그럼 나머지 변 temp의 길이는 `M - N < temp <= M` 이다.

#### case 2. 입력받은 sides 배열의 두 수가 삼각형의 작은 변들일 때.

sides 배열의 큰 수를 max, 작은 수를 min이라 하자.

나머지 변 temp의 길이는 `M < temp < M + N` 이다.

그런데?! 위의 조건을 합치면?!?!

`M-N < temp < M+N` 인 temp 갯수를 구하기만 하면 된다!!

(사실 set으로 중복되는 변 없애는 방식을 쓰려 했는데 자세히 보니 겁나 쉬운 거였네 허허)

***

## 내 코드

```javascript
function solution(sides) {
  var answer = 0;

  let M = Math.max(sides[0], sides[1]);
  let N = Math.min(sides[0], sides[1]);

  answer = (M + N) - (M - N) - 1;

  return answer;
}
```
***

## 결과

```html
테스트 1 〉	통과 (0.03ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.4MB)
테스트 10 〉	통과 (0.04ms, 33.4MB)
```

