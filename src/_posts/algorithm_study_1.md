---
title: "자료구조 개념) Tree 트리의 개념 공부하기 (+ 이진탐색트리)"
mainCategory: "algorithm"
subCategory: "algorithm_study"
description: "자료구조 핵심 개념 트리에 대해 공부한 내용. 트리 순회, 완전 이진트리를 js로 구현해보았다."
coverImg: "/assets/algorithm/study_1_1.png"
---


## 오늘 공부할 것

자료구조 필수 개념 중 하나인 트리에 대해 공부하고, 어떻게 js 코드로 구현하는지도 알아보자.

개념 자체는 아는데 js 코드로 구현하라면 항상 막혀서 문제... 이번 기회에 코드 구현도 연습해보자.

![image](/assets/algorithm/study_1_1.png)

***

## 트리 파헤치기

### 1. 트리란?

트리란, `데이터의 상하 관계(데이터 사이의 높고 낮음)을 나타내는 자료구조` 이다!

예를 들어 폴더 안에 하위 폴더들, 파일들이 있듯, 요소와 요소 사이에 상위, 하위 개념이 있는 걸 트리 구조라 한다. 배열이나 연결 리스트는 선형적 구조인데 반해 트리는 비선형적 구조이다.

예를 들어

```html
    A
  B   C
D  
```
이런 식의 구조가 있다고 하면, 트리를 이루는 각 요소들 A, B, C, D를 노드라고 부른다.

가장 위에 있는 A 노드는 `root node`
A의 `자식 노드`는 B, C. 한 노드의 직속 하위 노드이다.
D의 `부모 노드`는 B. 부모 노드란 한 노드의 직속 상위 노드이다.
B의 `형제 노드`는 C. 형제 노드란 같은 부모를 가지는 노드이다.
자식이 없는 D는 `leaf 노드`이다. 

`깊이`는 특정 노드가 root 노드와 얼마나 떨어져있는지를 나타내는 거리이다. 예를 들어 B 노드의 깊이는 1이다. D 노드의 길이는 2이다.

`부분 트리, sub tree` 란 한 트리 내부에 있는 작은 부분적인 트리이다. (집합과 부분집합의 개념.)

트리를 활용하면 우선순위 큐, 세트, 딕셔너리 같은 여러 추상 자료형을 구현할 수 있다.

***

### 2. 이진트리 알아보기

트리 종류는 많은데, 그 중에서도 쉬운 이진 트리에 대해 얘기해보자. 

이진 트리란 각 노드가 최대 2개의 자식노드를 가질 수 있는 트리이다. 1개도, 0개도 가능하지만 3개의 자식은 안된다!!

이진 트리 내부에서도 또 여러 종류가 있는데,

1. Full Binary Tree 정 이진트리 : 모든 노드의 자식이 2개 혹은 0개여야 함. 1개 자식은 안됨!
2. Complete Binary Tree 완전 이진트리 : 왼쪽에서 오른쪽 방향으로의 노드들이 채워져야 하며 중간에 빈 부분이 있으면 안된다. 
3. Perfect Binary Tree 포화 이진트리 : 모든 계층에 노드가 꽉꽉 다 채워져 있는 트리. 

**참고로 완전 이진 트리에는 완전 겁나 중요한 성질이 있다!!**

**완전 이진트리 내부 노드가 n개라면, 트리의 높이는 항상 `Math.floor(lg(n))` 이란 것이다!!**

#### 이진트리 구조를 js코드로 구현하기.

node 객체 구현하기. 이떄 node는 해당 데이터 값과 자식을 가리키는 `right`, `left` 속성도 있어야 한다.

```javascript
function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const rootNode = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

rootNode.left = node1;
rootNode.right = node2;

node1.left = node3;
node1.right = node4;
```
그러면 이런 구조가 된다.

![image](/assets/algorithm/study_1_2.jpg)


#### 완전 이진 트리 js코드로 구현 (이번엔 배열로 구현해보자.)

완전 이진트리는 왼쪽에서 오른쪽으로 node가 차곡차곡 쌓이는 형태이다. 그래서 앞에서처럼 그냥 인스턴스를 만들고 연결해서 트리를 구현할 수도 있지만 배열을 활용해서 완전 이진트리를 구현할 수도 있다!!

다시 아래 사진을 보자...

![image](/assets/algorithm/study_1_2.jpg)

예를 들어 root node를 배열 index 1번에 넣는다면, root node의 left child는 그다음 index 2번에 넣고, right child는 index 3번에 넣으면 된다. 


node1이 배열 2번 index에 있고, node2가 배열 3번 index에 있다면 그다음 node1의 left child인 node3은 배열 4번에 들어갈테고, node4는 배열 5번 자리에 들어갈 것이다.

즉, `left child는 부모의 index * 2번 자리`, 
`right child는 부모의 index * 2 + 1번 자리` 에 위치하게 된다.

반대로 left child의 배열 위치를 안다면 부모의 index 위치도 안다는 뜻.

이를 활용해서 배열로 완전 이진트리 형태를 구현한다면, 다음과 같다.

```javascript
const completeBinaryTree = [null, 0, 1, 2, 3, 4];
```

겁나 간단해보이지만 위 사진과 같은 구조다.

***

### 3. 트리 순회하기.

트리 문제의 꽃, 트리 순회하기.

순회란 자료구조에 저장된 데이터를 하나씩 모두 접근하는 것을 말한다. 이번에는 트리의 각 node에 차례로 접근하는 걸 js코드로 짜보겠다!!

트리는 배열, 리스트처럼 선형적인 형태가 아니기 때문에 for 문 같은 반복문 말고 재귀함수로 주로 순회한다. 

그리고 어떤 순서로 순회하냐에 따라 데이터 접근 순서가 달라진다. 

크게 3가지 방법의 순회가 있는데, `현재 노드 데이터를 출력하기` 와 `왼쪽 child 노드 접근하기` 와 `오른쪽 child 노드 접근하기` 이 세 가지 단계를 뭐 먼저 하냐에 따라 나뉜다.

1. pre order 순회 : `현재 노드 데이터 출력하기` -> `왼쪽 child node에 접근하기` -> `오른쪽 child node에 접근하기`
2. post order 순회 : `왼쪽 child node에 접근하기` -> `오른쪽 child node에 접근하기` -> `현재 노드 데이터 출력하기`
3. in order 순회 : `왼쪽 child node에 접근하기` -> `현재 노드 데이터 출력하기` -> `오른쪽 child node에 접근하기`

#### pre order 순회

```javascript
function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const rootNode = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

rootNode.left = node1;
rootNode.right = node2;

node1.left = node3;
node1.right = node4;

function printNode (node){
  console.log(node.data);
}

function getPreOrder (rootNode){
  if (!rootNode) return;
  printNode(rootNode);
  getPreOrder(rootNode.left);
  getPreOrder(rootNode.right);
}

getPreOrder(rootNode); // 0 1 3 4 2
```


#### post order 순회

```javascript
function getPostOrder (rootNode){
  if (!rootNode) return;
  getPostOrder(rootNode.left);
  getPostOrder(rootNode.right);
  printNode(rootNode);
}

getPreOrder(rootNode); // 3 4 1 2 0
```

#### in order 순회

```javascript
function getInOrder (rootNode){
  if (!rootNode) return;
  getInOrder(rootNode.left);
  printNode(rootNode);
  getInOrder(rootNode.right);
}

getPreOrder(rootNode); // 3 4 1 2 0
```