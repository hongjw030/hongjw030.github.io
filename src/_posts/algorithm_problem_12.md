---
title: "JS로 프로그래머스 풀기) JadenCase 문자열 만들기."
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "2레벨에 정답률은 78퍼센트. 어렵진 않은데 마구 풀다가 어라 왜 틀렸지? 할 수 있는 문제였다."
coverImg: "/assets/algorithm/algorithm_problem12.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem12.png)

***

## 내 풀이

공백 단위로 단어의 첫 문자만 대문자로 바꾸고, 나머지는 소문자로 바꿔야 한다.

문제가 쉬웠던 이유는 단어 첫 문자로 숫자가 온다면 그 뒤의 문자를 굳이 대문자로 바꿀 필요 없이 다 소문자처리 해도 되기 때문!! 만약 첫 문자가 알파벳이 아닌 숫자가 올 경우 단어의 가장 처음 알파벳을 대문자 처리해야 했다면 조금 어려웠을지도.

다만 `공백 문자가 연속해서 나올 수 있습니다` 조건을 지나치면 문제를 틀릴 수도 있다.

`"aaa    bbb".split(" ")`할 경우 `["aaa", "", "", "", "bbb"]` 배열이 나온다. 그래서 무작위로 for문을 돌려 단어마다 uppercase하지 말고, 단어의 length가 0보다 큰지 판별해야 한다.


***

## 내 코드

```javascript
function solution(s) {
  const originalArray = s.split(" ");

  const modifiedArray = originalArray.map(word =>{
    if (word.length <= 0) return;
    return (word[0].toUpperCase() + word.slice(1, word.length).toLowerCase())
  })

  return modifiedArray.join(" ");
}
```
***

## 결과

후후 x밥이군

```html
테스트 1 〉	통과 (0.06ms, 33.6MB)
테스트 2 〉	통과 (0.11ms, 33.5MB)
테스트 3 〉	통과 (0.08ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.6MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.6MB)
테스트 7 〉	통과 (0.08ms, 33.5MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
테스트 9 〉	통과 (0.08ms, 33.5MB)
테스트 10 〉	통과 (0.08ms, 33.5MB)
테스트 11 〉	통과 (0.08ms, 33.5MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (0.07ms, 33.6MB)
테스트 15 〉	통과 (0.13ms, 33.6MB)
테스트 16 〉	통과 (0.08ms, 33.5MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.06ms, 33.5MB)
```

