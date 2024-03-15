---
title: "JS로 프로그래머스 풀기) 최대공약수와 최소공배수"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "1레벨에 정답률은 77퍼센트."
coverImg: "/assets/algorithm/algorithm_problem11.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem11.png)

***

## 내 풀이

최대공배수와 최대공약수를 구하는 문제는... 사실 수학적 지식만 알고 있다면 쉽게 풀린다. (대학 시절 그릏게나 욕하며 들었던 이산수학이었나? 거기서 배우는 내용이었는데...)

두 수 n, m이 있다고 할 때,

최대공약수 gcd(m, n) = gcd(n, (m%n)) = gcd((n% (m%n)), (m%n)) ... -> 유클리드 호제법으로 구하기.

최소공배수 lcm(m, n) = n x m / gcd(m, n)

이 문제는 m, n이 최대 1000000 이하의 자연수기 때문에 for문을 돌리기보단 유클리드 호제법을 쓰는 게 좀 더 시간 효율이 좋을법 하다.

(+ 유클리드 호제법을 쓰는 게 훨씬 효율이 좋을줄 알았는데 for문 돌려도 시간은 거의 비슷하게 나온다. ㅡ.ㅡ;; 그치만 입력 범위가 커지면 유클리드 호제법을 쓰긴 써야 하니 그냥 만족함...)

***

## 내 코드

```javascript
function solution(n, m) {
  if (n === m ) return [m, m];

  let max = Math.max(m, n);
  let min = Math.min(m, n);

  // 유클리드 호제법으로 gcd먼저 구함.
  while(max % min != 0){
    let temp = max % min;
    max = min;
    min = temp;
  }
  let gcd = min;

  // gcd를 구하면 lcm을 구함.
  let lcm = Math.floor(n * m / gcd);

  return [gcd, lcm];
}
```
***

## 결과

```html
테스트 1 〉	통과 (0.05ms, 33.6MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.6MB)
테스트 4 〉	통과 (0.05ms, 33.6MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.6MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.5MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.04ms, 33.5MB)
테스트 13 〉	통과 (0.04ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.6MB)
테스트 15 〉	통과 (0.05ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.5MB)
```

