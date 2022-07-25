// add a method prepend() to the linked list that adds a node to the beginning of the list


class Node{
  constructor(value) {
    this.data= value;
    this.next= null;
    this.prev= null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head={
      data: value,
      next: null,
      prev: null
    };
    this.tail=this.head;    
    this.length= 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail= newNode;
    this.length++;
  }   

  prepend(value) {
    const newNode = new Node(value);
    newNode.next= this.head;
    this.head.prev=newNode;
    this.head= newNode;
    this.length++;
  }

  printList() {
    const nodeData =[];
    let tempNode = this.head;
    while(tempNode!=null) {
      nodeData.push(tempNode.data);
      tempNode = tempNode.next;
    }
    return nodeData;
  }
/*  index: 0 to n-1 
    value: any intrger
*/
  insert (index, value) {
    if(index==0) {
      return this.prepend(value);
    }
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    // let tempNode = this.head;
    // for (let i=1; i < index; i++) {
    //   tempNode = tempNode.next;
    // }
    // newNode.next = tempNode.next;
    // tempNode.next = newNode;

    const leaderNode = this.traverseToIndex(index-1);
    const follower = leaderNode.next;
    newNode.prev = leaderNode;
    newNode.next = follower;
    follower.prev = newNode;
    leaderNode.next = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let count=0;
    let currentNode= this.head;
    while (count !=index) {
      currentNode= currentNode.next;
      count++;
    }
    return currentNode;
  }


  remove(index) {
    if(index==0) {
      this.head = this.head.next;
      this.length--;
      return
    }
    if(index >= this.length) {
      index = this.length -1;
    }
    const leaderNode = this.traverseToIndex(index-1);    
    const unwntedNode = leaderNode.next;
    const followerNode = unwntedNode.next;

    leaderNode.next = followerNode;
    if(followerNode?.prev)
      followerNode.prev= leaderNode;
   
    this.length--;
  }
}

let myDLinkedList = new DoublyLinkedList(10);
myDLinkedList.append(5);
myDLinkedList.append(16);
myDLinkedList.prepend(1)
myDLinkedList.insert(1,30)
myDLinkedList.insert(80,80)
myDLinkedList.insert(0,30)


console.log(myDLinkedList.printList());

myDLinkedList.remove(2)
console.log(myDLinkedList.printList());
myDLinkedList.remove(100)
console.log(myDLinkedList.printList());
myDLinkedList.remove(0)
console.log(myDLinkedList.printList());


