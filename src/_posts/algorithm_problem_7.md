---
title: "JS로 프로그래머스 풀기) 프로그래머스 추억 점수 문제"
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "어떻게 시간복잡도를 줄일지 고민하느라 시간이 걸렸지만, 푸는 것 자체는 어렵진 않았다."
coverImg: "/assets/algorithm/algorithm_problem7.png"
---

![image](/assets/algorithm/algorithm_problem7.png)

![image](/assets/algorithm/algorithm_problem7_1.png)

<br/>
<br/>

## 내 풀이)
<br/>
좀 더 연산을 효율적으로 하기 위해, name과 yearning을 맵핑한 객체를 만들자.
<br/>

추억 점수는 number 범위를 넘지 않으므로, 일반적인 연산을 해도 좋다.

<br/>
<br/>

## 내 코드)
<br/>

```js
function solution(name, yearning, photo) {
  const score = {};
  name.forEach((el, i) => {
    score[el] = yearning[i];
  });

  const answer = photo.map((els) => {
    let sum = 0;
    els.forEach((el)=>{
      sum += score[el] ?? 0;
    });
    return sum;
  });

  return answer;
}
```
<br/>

여기서, 연습 겸 sum 을 구할 때엔 reduce 메소드를 활용한다면 아래 코드와 같다.
<br/>

```js
function solution(name, yearning, photo) {
  const score = {};
  name.forEach((el, i) => {
    score[el] = yearning[i];
  });

  return photo.map((els) => els.reduce((acc, el)=> (acc + (score[el] ?? 0)), 0));
}
```