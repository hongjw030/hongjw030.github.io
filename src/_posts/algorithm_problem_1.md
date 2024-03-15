---
title: "JS로 프로그래머스 풀기) 숫자 문자열과 영단어."
mainCategory: "algorithm"
subCategory: "algorithm_problem"
description: "js로 프로그래머스 1레벨 2021 카카오 채용 연계형 인턴십 문제를 풀어보았다."
coverImg: "/assets/algorithm/algorithm_problem1.png"
---

## 문제

![image](/assets/algorithm/algorithm_problem1.png)

프로그래머스 1레벨 2021 카카오 채용 연계형 인턴십 문제.

***

## 내 풀이

replace 메소드를 사용하면 간단하게 풀 수 있다.

문자열 길이가 최대 50이기 때문에, while이나 for 문으로 영단어를 찾는다 해도 시간 초과가 나지 않는다.

#### 주의할 점

-   replace나 replaceAll 메소드를 쓸 때엔 `s = s.replace(..,)` 처럼 재할당 해주는 식으로 써야 한다.
-   replaceAll 메소드를 생각지 못해 replace 메소드를 활용해 코드를 짰었는데, replaceAll을 기억해두자.
-   문자열 숫자가 아닌 글자가 있는지 판별하려면 isNaN 함수를 쓰자.  
    `if (isNaN(str)) {...}`


## 내 코드

```js
const enToNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function solution(s) {
  for (let i = 0; i < 10; i++) {
    s = s.replaceAll(enToNum[i], String(i));
  }
  return Number(s);
}
}
```


#### 다른 풀이

다른 사람의 풀이를 보니, split 메소드와 join 메소드를 활용해서 풀었더라. test하면 시간 자체는 내 풀이와 별로 차이 나진 않지만, 코드가 깔끔하고 좋아서 공부할 겸 가져왔다.

```js
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
```

split 메소드는 인자를 기준으로 문자열을 잘라 배열로 만드는 메소드이다.

입력받은 문자열 s를 예를 들어 "one234fivesix" 라고 하자.

0.  `i = 0` 일 때 `arr = ["one234fivesix"]` 이 되고, 원소가 1개 뿐이므로 `answer = "one234fivesix"` 이다.
1.  `i = 1`일 때 one으로 split 되므로 `arr = ["", "234fivesix"]` 이 되고, `answer = "1234fivesix"` 이다.
2.  `i = 2`일 때 `arr = ["234fivesix"]` 이 되고, 원소가 1개 뿐이므로 `answer = "1234fivesix"` 이다.  
    ...

이렇게 진행된다.

split 메소드는 인자로 받은 값을 없애버리고 그걸 기준으로 문자열을 조각조각 자른다!!  
예를 들어 아래 코드를 실행하면 `[123, 456]` 이 아니라 `["", 123,456]` 으로 나뉜다.  
만약 인자가 없으면 아예 나뉘지 않고 그 문자열 그대로 배열에 통째로 들어간다.

```js
let str = ",123,456";
let arr1 = str.split();
let arr2 = str.split(",");
console.log(arr1); //[ ',123,456' ], arr1.length는 1
console.log(arr2); //[ '', '123', '456' ], arr2.length는 2
```