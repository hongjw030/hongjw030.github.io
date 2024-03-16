---
title: "자료구조 개념) 트리의 응용, 힙 Heap 공부하기 (+ 우선순위 큐)"
mainCategory: "algorithm"
subCategory: "algorithm_study"
description: "js로 힙과 우선순위 큐를 구현해보고 속성을 공부해보는 포스팅!"
coverImg: "/assets/algorithm/study_1_1.png"
---

![image](/assets/algorithm/study_1_1.png)

## 오늘 공부할 것

앞에서 트리에 대해서 간단하게 공부했다!!

트리의 종류로는 대표적으로 이진 트리(이진트리는 또 포화이진트리, 완전이진트리, 정이진트리가 있다.) 가 있다고 했는데, 이진 트리 말고 또 유명한 트리가 하나 더 있다.

**힙** 이다!!! (자료구조에 대해 잘 몰랐을 때엔 힙과 트리는 별개의 구조인줄 알았삼. ㅡㅡ;)

오늘은 힙에 대해 공부해볼 예정이다!!

***

## 힙

### 1. 힙이란?

힙은 두 개의 조건을 만족하는 트리이다.

조건 1. 형태 속성을 만족해야 한다. ( = 힙은 완전 이진트리여야 한다. 완전 이진트리란, 이진트리 중에서도 왼쪽에서 오른쪽으로 노드가 채워진 모습인 트리.)

조건 2. 힙 속성을 만족해야 한다. ( = 모든 노드의 데이터는 자기 자식노드의 데이터보다 크거나 같아야 한다!)

### 3. 힙을 활용한다면...

1. `정렬 문제를 해결`할 수 있다. 정렬 문제를 해결하는 방법으론 `삽입 정렬`, `머지소트 정렬`, `선택정렬`, `퀵정렬` 등이 있는데, 힙을 활용해서도 정렬을 해결할 수 있다. -> 이를 `힙 정렬` 이라고 한다!!
2. `우선순위 큐`라는 추상자료형을 구현해볼 수 있다.

#### 힙 활용) 힙으로 정렬 문제 해결해보기.

힙은 완전 이진트리기 때문에, 저번에 나타낸대로 배열로 구현할 수도 있다. 숫자 데이터를 배열 안에 넣는 건 쉬운데, 이 배열이 힙 속성을 만족할 수 없을 수도 있다.

때문에 배열을 쭉 보면서 각 노드들이 힙 속성을 만족하는지 확인하고, 만족하지 않다면 그 부모노드와 부모보다 더 큰 값의 자식 노드 순서를 바꿔주면서 정렬을 해야 하는데, 이 과정을 `heapify` 라고 한다.

즉, `heapify` 과정은 먼저 부모 노드를 인자로 받고, 그의 자식 노드가 인자로 받은 부모 노드보다 더 값이 큰지 작은지를 확인한다. 만약 자식의 값들이 작다면 넘어가지만, 자식의 값이 부모보다 큰 경우는 그 자식과 부모의 데이터 값을 바꿔준다. 그다음 바뀐 위치에서 아래로 내려간 부모 노드가 새로운 자식 노드와 값을 비교하면서, 재귀적으로 heapify를 진행한다.

따라서!!!! node 한 개의 위치를 찾아주는 heapify 과정을, 노드 n개에 대해 for문으로 반복적으로 실행해주면 힙정렬이 완성된다.


**내림차순 힙 정렬 js코드로 구현**

```javascript
function printArray(array) {
  console.log(array.join(" "));
}

// node 하나를 트리 안에서 정렬하는 함수
function heapify(array, nodeInd){
  // 1. 입력받은 nodeInd에 대하여 left child, right child index 구하기.
  let len = array.length;
  let leftChildInd = nodeInd * 2;
  let rightChildInd = nodeInd * 2 + 1;
  let maxInd = nodeInd;

  // 2. 배열 내 위치 바꾸는 메소드 구현.
  const swap = (ind1, ind2) => {
    let temp = array[ind2];
    array[ind2] = array[ind1];
    array[ind1] = temp;
  }
  
  // 3. 
  if (leftChildInd < len && array[leftChildInd] > array[maxInd]) maxInd = leftChildInd;
  if (rightChildInd < len && array[rightChildInd] > array[maxInd]) maxInd = rightChildInd;

  if (maxInd !== nodeInd){
    swap(nodeInd, maxInd);
    heapify(array, maxInd);
  }else return;
}

function heapSort(array){
  for(let i = 1;i<array.length;i++){
    heapify(array, i);
  }
}

// 정렬되지 않은 이진트리.
const array = [null, 15, 5, 12, 14, 9, 10, 6, 2, 11, 1] 
heapSort(array);
printArray(array);
```


**힙 정렬 시간 복잡도**

힙은 완전 이진트리기 때문에 노드 개수 n에 대해 힙의 깊이는 `O(lg(n))` 이다. 때문에 노드 하나를 정렬할 때엔 힙의 깊이만큼 시간이 걸리고, `노드 n개 모두를 정렬한다면 힙 정렬 시간복잡도는 (n O(lg(n)))` 이다!!

웬만한 정렬 알고리즘이 n^2 ~ nlg(n) 임을 생각하면 힙 정렬은 빠른 알고리즘이다.


#### 힙 활용) 힙으로 우선순위 큐 구현해보기

**우선순위 큐란?**

우선순위 큐는 추상 자료형 중 하나로, 각 데이터에 우선순위가 있어 우선순위 순서대로 정렬된 데이터 집합을 말한다. 

우선순위 큐.add(데이터) 할 때 자동으로 우선순위에 따라 정렬되면서 데이터가 추가되고,
우선순위 큐.pop() 하면 자동으로 우선순위가 높은 데이터가 삭제된다. 

앞에서 배운, 힙의 `힙 속성`을 활용하면 우선순위대로 데이터를 정렬할 수 있게된다.

힙을 통해 우선순위 큐와 add, pop 속성을 구현해보자.


**우선순위 큐 js코드로 구현**

1. 힙에 데이터를 삽입할 경우, (배열 맨 뒤에 data를 삽입할 경우) 해당 데이터가 힙 속성을 만족하도록 힙정렬을 실시해야 한다. 

2. 힙에 데이터를 삭제할 경우, 배열 맨 뒤의 데이터와 root node 데이터 위치로 옮겨준다. root node 데이터는 pop될 데이터므로 리턴 값으로 넣어주기. 그리고 root node에 새로 들어온 이 데이터가 원래 위치를 찾을 수 있도록, heapify를 진행하면 된다.

```javascript
function swap(array, ind1, ind2){
    let temp = array[ind2];
    array[ind2] = array[ind1];
    array[ind1] = temp;
  }

function heapify(array, nodeInd){
  // 1. 입력받은 nodeInd에 대하여 left child, right child index 구하기.
  let len = array.length;
  let leftChildInd = nodeInd * 2;
  let rightChildInd = nodeInd * 2 + 1;
  let maxInd = nodeInd;

  if (leftChildInd < len && array[leftChildInd] > array[maxInd]) maxInd = leftChildInd;
  if (rightChildInd < len && array[rightChildInd] > array[maxInd]) maxInd = rightChildInd;

  if (maxInd !== nodeInd){
    swap(array, nodeInd, maxInd);
    heapify(array, maxInd);
  }else return;
}

// 말단 node 하나를 트리 안에서 정렬하는 함수
function reverse_heapify(array, nodeInd){
  let parentInd = Math.floor(nodeInd / 2);
  if (parentInd <= 0) return;

  if (array[nodeInd] > array[parentInd] ){
    swap(array, nodeInd, parentInd);
    reverse_heapify(array, parentInd);
  }else return;
}

// 우선순위 큐 인스턴스
function priorityQueueInstance (){
  const priorityQueue = [null];

  function insertNode(data){
    priorityQueue.push(data);
    reverse_heapify(priorityQueue, priorityQueue.length -1);
  }

  function deleteNode(){
    if (priorityQueue.length <=1) return;
    
    const popped = priorityQueue[1];
    priorityQueue[1] = priorityQueue[priorityQueue.length -1];
    priorityQueue.pop();

    heapify(priorityQueue, 1);

    return popped;
  }

  function printQueue(){
    console.log(priorityQueue.join(" "));
  }

  return {
    insertNode,deleteNode, printQueue,
  }
}

const instance = priorityQueueInstance();

instance.insertNode(6);
instance.insertNode(9);
instance.insertNode(1);
instance.insertNode(3);
instance.insertNode(10);
instance.insertNode(11);
instance.insertNode(13);

console.log(instance.deleteNode())
console.log(instance.deleteNode())
console.log(instance.deleteNode())
console.log(instance.deleteNode())
console.log(instance.deleteNode())
console.log(instance.deleteNode())
console.log(instance.deleteNode())
```

**우선순위 큐 시간 복잡도**

1. 삽입 연산은 우선 leaf 노드를 heapify 해야 하므로, `o(lg(n))` 이 걸린다.

2. 삭제 연산은 root 노드를 heapify 해야 하므로, `o(lg(n))` 이 걸린다.

**그럼 우선순위 큐는 언제 쓰면 좋을까??**

동적 배열, 링크드 리스트의 데이터 삽입, 추출 시간복잡도는 각각 `o(n), o(1)` 이다.

따라서 데이터를 읽고 추출하는 일이 많다면 동적 배열, 연결 리스트를 쓰는 게 나을 듯 하고, 힙을 사용할 때엔 데이터 삽입이 잦을 경우 쓰는 게 나아보인다!