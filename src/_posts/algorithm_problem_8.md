---
title: "JS로 프로그래머스 풀기) 문자열 여러 번 뒤집기"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "0레벨, 정답률 80%"
coverImg: "/assets/algorithm/algorithm_problem8.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem8.png)


***

## 내 풀이

두번째 인자 `queries`를 `map`이나 `forEach` 문을 돌려서 각 query에 따른 `my_string`을 계산하면 된다.

제한 사항으로 `queries`의 길이, `my_string`의 길이가 제한되어있어 예외 처리를 하지 않아도 된다. (그렇지만 보통 어려운 문제들은 제한 사항이 없으니, 예외에 따른 코드를 짜는 연습도 해두자.)

***

## 내 코드

#### 1. reverse 메소드를 쓰지 않은 기존의 풀이

문자열 메소드 중에 reverse 메소드가 있단 걸 까먹어서 쌩으로 reverse 함수를 만들어 푼 코드이다.

```javascript
const reverseWord = (str, first, second) => {
  let chunk = "";
  str.slice(first, second+1).split("").forEach(el=>{
    chunk = el + chunk;
  })
  let ans = str.slice(0, first) + chunk + str.slice(second+1, str.length);
  return ans;
}

function solution(my_string, queries) {
  var answer = my_string;
  queries.forEach(query=>{
    answer = reverseWord(answer, query[0], query[1]);
  })
  return answer;
}
```

#### 2. reverse 메소드를 쓴 풀이

스터디 이후 팀원들 코드를 보며 reverse 메소드의 존재를 알았다. reverse 메소드는 문자열 메소드는 아니고, **배열 메소드** 이다!

그래서 reverse를 통해 문자열을 역순 정렬하려면 문자열을 `split` 메소드로 배열화해준다음, `reverse` 메소드로 정렬하고 다시 `join` 메소드로 문자열화 해야 한다.

```javascript
function solution(my_string, queries) {
  var answer = my_string;
  queries.forEach(query=>{
    answer = answer.slice(0, query[0]) + answer.slice(query[0], query[1]+1).split("").reverse().join("") + answer.slice(query[1]+1, answer.length);
  })
  return answer;
}
```

***

## 결과

#### 1. reverse 메소드를 쓰지 않은 기존 풀이의 경우

```html
테스트 1 〉	통과 (0.19ms, 33.4MB)
테스트 2 〉	통과 (0.26ms, 33.5MB)
테스트 3 〉	통과 (0.32ms, 33.5MB)
테스트 4 〉	통과 (0.71ms, 33.6MB)
테스트 5 〉	통과 (1.41ms, 34.4MB)
테스트 6 〉	통과 (0.22ms, 33.4MB)
테스트 7 〉	통과 (0.29ms, 33.5MB)
테스트 8 〉	통과 (0.77ms, 33.7MB)
테스트 9 〉	통과 (2.37ms, 36.5MB)
테스트 10 〉	통과 (3.31ms, 36.5MB)
테스트 11 〉	통과 (0.30ms, 33.5MB)
테스트 12 〉	통과 (0.46ms, 33.8MB)
테스트 13 〉	통과 (1.02ms, 33.8MB)
테스트 14 〉	통과 (1.87ms, 36.3MB)
테스트 15 〉	통과 (3.82ms, 37MB)
테스트 16 〉	통과 (0.51ms, 33.7MB)
테스트 17 〉	통과 (1.48ms, 34MB)
테스트 18 〉	통과 (0.95ms, 34.1MB)
테스트 19 〉	통과 (5.16ms, 36.8MB)
테스트 20 〉	통과 (4.84ms, 36.8MB)
테스트 21 〉	통과 (0.91ms, 33.9MB)
테스트 22 〉	통과 (0.95ms, 34MB)
테스트 23 〉	통과 (8.23ms, 36.8MB)
테스트 24 〉	통과 (8.54ms, 36.9MB)
테스트 25 〉	통과 (10.38ms, 36.9MB)
```

### 2. 

```html
테스트 1 〉	통과 (0.17ms, 33.5MB)
테스트 2 〉	통과 (0.34ms, 33.5MB)
테스트 3 〉	통과 (0.28ms, 33.5MB)
테스트 4 〉	통과 (0.56ms, 33.7MB)
테스트 5 〉	통과 (2.04ms, 34.1MB)
테스트 6 〉	통과 (0.20ms, 33.4MB)
테스트 7 〉	통과 (0.36ms, 33.4MB)
테스트 8 〉	통과 (0.60ms, 33.6MB)
테스트 9 〉	통과 (1.60ms, 34.3MB)
테스트 10 〉	통과 (1.80ms, 34.5MB)
테스트 11 〉	통과 (0.25ms, 33.5MB)
테스트 12 〉	통과 (0.60ms, 33.6MB)
테스트 13 〉	통과 (0.48ms, 33.8MB)
테스트 14 〉	통과 (1.71ms, 34.1MB)
테스트 15 〉	통과 (4.34ms, 34.7MB)
테스트 16 〉	통과 (0.62ms, 33.6MB)
테스트 17 〉	통과 (0.99ms, 33.6MB)
테스트 18 〉	통과 (0.70ms, 33.7MB)
테스트 19 〉	통과 (3.32ms, 34.9MB)
테스트 20 〉	통과 (3.58ms, 34.9MB)
테스트 21 〉	통과 (0.73ms, 33.7MB)
테스트 22 〉	통과 (1.07ms, 33.8MB)
테스트 23 〉	통과 (5.49ms, 34.7MB)
테스트 24 〉	통과 (8.44ms, 34.9MB)
테스트 25 〉	통과 (8.33ms, 35.1MB)
```

reverse 메소드를 활용한 풀이가 좀 더 시간이 덜 든다.

내장 메소드를 쓰느냐 마느냐의 문제보단, join 메소드를 쓰냐 마냐의 문제인듯 하다. (문자열 계산할 때 단순 덧셈보다 join이 좀 더 시간이 덜 걸리는 걸로 알고 있다. 관련 백준 문제도 있고...)