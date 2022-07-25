// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList1 {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    console.log(newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //Code here
  }
}



class Node{
  constructor(value) {
    this.data= value;
    this.next= null;
  }
}
class LinkedList {
  constructor(value) {
    this.head={
      data: value,
      next: null
    };
    this.tail=this.head;
    this.length= 1;
  }

  append(value) {
    // const newNode= {
    //   data: value,
    //   next: null
    // }

    const newNode = new Node(value);
    // let node = this.head;
    // while(node.next !=null) {
    //   node= node.next;
    // }
    // node.next= newNode;
    // this.tail = newNode;
    // this.length++;
    // node=null;
     this.tail.next = newNode;
    this.tail= newNode;
    this.length++;
  }   

  prepend(value) {
    // const newNode= {
    //   data: value,
    //   next: null
    // }
    const newNode = new Node(value);
    
    newNode.next= this.head;
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
    newNode.next= leaderNode.next;
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
    leaderNode.next = leaderNode.next.next;
    /* 
      const unwntedNode = leaderNode.next;
      leaderNode.next = unwntedNode.next
    */
    this.length--;
  }


  reverse() {
    if(!this.head.next) {
      return this.printList();
    }
    let first = this.head;
    let second = this.head.next;

    while(second) {
      const tempNode = second.next;
      second.next = first;
      first= second;
      second = tempNode;
    }
    this.head.next=null;
    this.tail = this.head;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.insert(2,30)
myLinkedList.insert(80,30)
myLinkedList.insert(0,30)


// console.log(JSON.stringify(myLinkedList));
console.log(myLinkedList.printList());


// myLinkedList.remove(2)
// console.log(myLinkedList.printList());
// myLinkedList.remove(100)
// console.log(myLinkedList.printList());
// myLinkedList.remove(0)
// console.log(myLinkedList.printList());

console.log(myLinkedList.reverse());


