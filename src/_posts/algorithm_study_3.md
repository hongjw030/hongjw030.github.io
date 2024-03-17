---
title: "자료구조 개념) 트리의 응용, 자바스크립트로 이진 탐색 트리 구현하기"
mainCategory: "algorithm"
subCategory: "algorithm_study"
description: "완전탐색트리 구현하기 for javascript!"
coverImg: "/assets/algorithm/study_1_1.png"
---

![image](/assets/algorithm/study_1_1.png)

## 오늘 공부할 것

앞에선 트리 (이진트리, 그 안에서도 완전 이진트리, 포화이진트리, 정이진트리, 그 안에서 힙, 힙으로 우선순위 큐 구현) 을 배웠다.

이번에 배울 것은 `이진 탐색 트리, Binary Search Tree` 라는 것으로, 이 트리를 활용하면 `set` 과 `dictionary` 추상 자료형도 구현할 수 있다.

이진탐색 트리도 이진 트리 안에 들어있는, 힙의 형제 같은 녀석이다. 이번 시간에는 이진트리에 대해 알아보고 힙과 어떤 차이인지 공부해보겠다.

***

## 이진 탐색 트리

### 1. 이진 탐색 트리란?

앞에서 배운 힙은 `완전이진트리이면서` `힙 속성(부모노드의 데이터가 자식보다 커야 함)` 속성을 가진 트리이다.

이진 탐색트리는 `이진트리이면서` `이진탐색트리 속성(left child 데이터는 부모보다 작아야 하고, right child 데이터는 부모보다 커야 함)` 속성을 가진 트리이다. 참고로 힙은 완전 이진트리이지만 **이진탐색트리는 완전 이진트리**라는 보장이 없다!!!

그래서 `힙을 구현할 때엔 동적 배열로 주로 구현`하지만,

`이진탐색 트리는 보통 더블리 링크드 리스트처럼 node 안에 parent, left child, right child 속성을 두어 노드끼리 연결하는 방식`으로 구현한다.

이진탐색트리에서 내가 원하는 데이터를 찾는 연산을 `탐색` 이라 한다. 

#### 까먹었을까봐 복습하기.

1. 이진 트리란? 한 부모노드의 자식노드가 0~2개 까지만 있는 트리.
2. 정이진 트리란? 한 노드의 자식이 0개 혹은 2개만 있는 트리. (1개가 있는 경우는 정이진 트리가 아니다.)
3. 완전이진 트리란? 무조건 왼쪽에서 오른쪽으로 자식이 채워지는 형태의 트리. (왼쪽 자식만 있을 수는 있지만 오른쪽 자식만 있을 수는 없다!)
4. 포화이진 트리란? 모든 계층 노드들이 모두 2개씩 자식을 가지고 있는 균일한 모습의 트리.

### 2. 이진 탐색 트리와 트리 출력 구현하기

1. 먼저 node 생성자 함수와 BST 생성자 함수 구현하기.
```javascript
function Node(data){
  this.data = data;
  this.parent = null;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree(){
  this.root = null;
}

const BST = new BinarySearchTree();
```

2. 이진 탐색트리는 왼쪽 < 부모 < 오른쪽 순으로 data 크기가 크다. 따라서 왼쪽 순회 -> 현재 데이터 출력 -> 오른쪽 순회 를 하는 `in-order` 순회를 쓰면 데이터를 오름차순 정렬할 수 있단 소리이다. in order 순회를 복습할 겸 이진 탐색 트리 출력 함수도 구현하자.

```javascript
function Node(data){
  this.data = data;
  this.parent = null;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree(){
  this.root = null;

  // in order 순회로 트리 출력
  const printNode = (node) => {
    if (node){
      printNode(node.leftChild);
      console.log(node.data);
      printNode(node.rightChild)
    }
  }
  const printTree = () => {
    printNode(this.root);
  }

  return {printTree}
}

const BST = new BinarySearchTree();

BST.insertNode(7)
BST.insertNode(11)
BST.insertNode(9)
BST.insertNode(17)
BST.insertNode(8)
BST.insertNode(5)
BST.insertNode(19)
BST.insertNode(3)
BST.insertNode(2)
BST.insertNode(4)
BST.insertNode(14)

BST.printTree();
```



### 3. 이진 탐색 트리 삽입 구현하기.

1. 만약 root가 없다면 새 노드를 root 자리에 넣는다.
2. 만약 root가 있다면 새 노드의 데이터가 root 보다 작은지, 큰지 비교해서 left tree로 들어갈지, right tree로 들어갈지 비교한다.
3. 만약 left child, right child가 비어있다면 거기다 새 노드를 넣고, 아니라면 그 노드의 자식을 검사한다.

```javascript
function Node(data){
  this.data = data;
  this.parent = null;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree(){
  this.root = null;

  // in order 순회로 트리 출력
  const printNode = (node) => {
    if (node){
      printNode(node.leftChild);
      console.log(node.data);
      printNode(node.rightChild)
    }
  }
  const printTree = () => {
    printNode(this.root);
  }

  // 노드 삽입 연산
  const insertNode = (data) => {
    const NewNode = new Node(data);

    if (!this.root){
      this.root = NewNode;
      return;
    }

    let ParentNode = this.root;
    while(ParentNode){
      if (data > ParentNode.data) {
        if (!ParentNode.rightChild) {
          NewNode.parent = ParentNode;
          ParentNode.rightChild = NewNode;
          return;
        }else{
          ParentNode = ParentNode.rightChild;
        }
      }else{
        if (!ParentNode.leftChild){
          NewNode.parent = ParentNode;
          ParentNode.leftChild = NewNode;
          return;
        }else{
          ParentNode = ParentNode.leftChild;
        }
      }
    }
  }

  return {printTree, insertNode}
}

const BST = new BinarySearchTree();

BST.insertNode(7)
BST.insertNode(11)
BST.insertNode(9)
BST.insertNode(17)
BST.insertNode(8)
BST.insertNode(5)
BST.insertNode(19)
BST.insertNode(3)
BST.insertNode(2)
BST.insertNode(4)
BST.insertNode(14)

BST.printTree();
```

### 4. 이진 탐색 트리 탐색 구현하기.

```javascript
function Node(data){
  this.data = data;
  this.parent = null;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree(){
  this.root = null;

  // in order 순회로 트리 출력
  const printNode = (node) => {
    if (node){
      printNode(node.leftChild);
      console.log(node.data);
      printNode(node.rightChild)
    }
  }
  const printTree = () => {
    printNode(this.root);
  }

  // 노드 삽입 연산
  const insertNode = (data) => {
    const NewNode = new Node(data);

    if (!this.root){
      this.root = NewNode;
      return;
    }

    let ParentNode = this.root;
    while(ParentNode){
      if (data > ParentNode.data) {
        if (!ParentNode.rightChild) {
          NewNode.parent = ParentNode;
          ParentNode.rightChild = NewNode;
          return;
        }else{
          ParentNode = ParentNode.rightChild;
        }
      }else{
        if (!ParentNode.leftChild){
          NewNode.parent = ParentNode;
          ParentNode.leftChild = NewNode;
          return;
        }else{
          ParentNode = ParentNode.leftChild;
        }
      }
    }
  }

  // 노드의 탐색 연산
  const searchNode = (data)=>{
    let CurrentNode = this.root
    while(CurrentNode){
      if (data > CurrentNode.data){
        CurrentNode = CurrentNode.rightChild
      }else if (data<CurrentNode.data){
        CurrentNode = CurrentNode.leftChild
      }else{
        return CurrentNode;
      }
    }
    return null;
  }

  // 트리에서 가장 작은 노드 탐색 연산
  const searchMin = (node) =>{
    let temp = node;
    while (temp.leftChild){
      temp = temp.leftChild;
    }
    return temp;
  }

  const deleteNode = (data) =>{
    const tempNode = searchNode(data);
    if (!tempNode) return;
    let parentNode = tempNode.parent;

    // 왼쪽 자식만 있는 경우 (자식 1)
    if (tempNode.leftChild && !tempNode.rightChild){
      if (this.root == tempNode){
        this.root = tempNode.leftChild;
        this.root.parent = null;
      }else if (tempNode == parentNode.leftChild) {
        parentNode.leftChild = tempNode.leftChild;
        tempNode.leftChild.parent = parentNode;
      }else{
        parentNode.rightChild = tempNode.leftChild;
        tempNode.leftChild.parent = parentNode;
      }
    } 
    // 오른쪽 자식만 있는 경우 (자식 1)
    if (!tempNode.leftChild && tempNode.rightChild){
      if (tempNode == this.root){
        this.root = tempNode.rightChild;
        this.root.parent = null;
      }else if (tempNode == parentNode.leftChild){
        parentNode.leftChild = tempNode.rightChild;
        tempNode.rightChild.parent = parentNode;
      }else{
        parentNode.rightChild = tempNode.rightChild;
        tempNode.rightChild.parent = parentNode;
      }
    }
    // 자식이 없는 경우 (자식 0)    
    if (!tempNode.leftChild && !tempNode.rightChild){
      if (this.root == tempNode){
        this.root = null;
      }else if (tempNode == parentNode.leftChild){
        parentNode.leftChild = null;
      }else{
        parentNode.rightChild = null;
      }
    }
    // 자식이 2명 있는 경우 (자식 2)
    if (tempNode.leftChild && tempNode.rightChild){
      let successor = searchMin(tempNode.rightChild);
      tempNode.data = successor.data;
      parentNode = successor.parent;
      parentNode.leftChild = null;
    }
  }

  return {printTree, insertNode, searchNode, deleteNode}
}
```

### 5. 이진 탐색 트리 삭제 구현하기.

1. 먼저 삭제하려는 데이터가 있는지 찾아야 한다. -> 탐색 연산
2. 만약 데이터가 있다면,
  (1) `삭제하려는 데이터에게 0개의 자식이 있을 경우, leaf Node일 경우` -> 그냥 그 leaf node의 parent의 child 속성에 null값을 준다. 
  (2) `삭제하려는 데이터에게 1개의 자식만 있을 경우` -> 그냥 그 부모의 child에 지 자식을 연결해주고, 자식에겐 자기 부모를 연결해줘서 자긴 빠진다!
  (3) `삭제하려는 데이터에게 2개의 자식이 있을 경우` -> 

### 6. 이진 탐색 트리 시간 복잡도 평가하기

1. 삽입연산: 트리의 깊이에 따라 시간이 걸리므로, 삽입 연산은 `O(lg(n))` 이 걸린다.
2. 탐색연산: 마찬가지로 트리의 깊이에 따라 시간이 걸리므로 탐색 연산도 `O(lg(n))` 이 걸린다.
3. 삭제연산: 마찬가지로 트리의 깊이에 따라 시간이 걸리므로 탐색 연산도 `O(lg(n))` 이 걸린다.


### 7. 이진 탐색 트리로 딕셔너리 구현?

참고로 딕셔너리는 키-값 쌍을 저장하는 추상 자료형이다.

해시테이블로도 딕셔너리를 구현할 수 있지만, 해시테이블은 데이터간 순서를 저장할 순 없다. 반면 이진탐색트리는 데이터 사이 순서 관계를 저장해야 할 때 사용할 수 있다!

물론 일반적인 경우엔 해시테이블로 구현하는 게 연산 효율성이 낫긴 하지만, 정렬된 키가 필요할 경우엔 이진탐색트리도 활용할 수 있단 뜻.