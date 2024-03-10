---
title: "에러 해결) 타입스크립트에서 배열 구조분해하는 법. (type is not assignable to type)"
mainCategory: "troubleshooting"
description: "배열을 구조분해할 때 왜 ts에선 타입 에러가 터지는지 고찰해보았다."
coverImg: "/assets/troubleshooting/2.png"
---

## 문제 상황
<br/>

팝업창을 열고 닫을 수 있는 커스텀 훅을 만들고, boolean형 isOpen과 함수 handleOpen, 함수 handleClose 를 배열에 담아 리턴하게끔 했다.
<br/>

그리고 배열 리턴값을 받아서 쓰려 했더니... 아래와 같은 에러가 났다!
<br/>

![image](/assets/troubleshooting/2.png)
<br/>


예를 들어 설명하자면,
<br/>

```js
// 이 코드를 실행하면, myString 에는 string형만 들어가야 하는데 string | number | null 형이 들어간다고 에러가 뜬다..ㅠㅠ
const arr = ["a", 1, null];
const [myString, myNum, myNull] = arr;
```

<br/>
<br/>

## 문제 원인
<br/>

위의 문제는 **타입스크립트는 객체나 배열은 내부 값들이 변할 수 있다고 가정하여 타입을 추론하기 때문에 발생한다.**
<br/>

즉, 배열 구조분해를 할 땐 배열 속의 원소들 타입들을 각각 따로 고정해야 한다는 것이다.
<br/>

```js
// 여기서 arr 타입은 (string | number | null)[] 로 추론됨.
// 그래서 arr의 모든 원소들은 string | number | null 타입으로 추론된다!!!!
const arr = ["a", 1, null];
const [myString, myNum, myNull] = arr;
```
<br/>
<br/>

## 해결 방법
<br/>

1.  배열 내 원소 각각의 타입을 고정하면 된다.
<br/>

```js
// 타입을 고정!
const arr: [string, number, null] = ["a", 1, null];
const [myString, myNum, myNull] = arr;
```

<br/>
2.  만약 원소들의 값이 바뀌지 않는다면, 배열을 아예 상수로 고정해버릴 수도 있다.
<br/>

```js
const arr = ["a", 1, null] as const;
const [myString, myNum, myNull] = arr;
```
<br/>
<br/>

## 결론
<br/>

타입을 고정해서 코드를 고쳤더니 에러가 사라졌다!!!

![image](/assets/troubleshooting/2_2.png)
