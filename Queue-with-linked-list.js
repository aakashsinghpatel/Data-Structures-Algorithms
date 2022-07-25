class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    //  this.front = null;
    // this.last = null;
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  peek() {
    if(this.front == null) 
      return "Queue is empty";

    return this.front.value;
  }
  enqueue(value){
    // Updattion on rear
    const newNode = new Node(value);
    if(this.rear == null) {
      this.rear = this.front = newNode;
      this.length++;
      return;
    }
    this.rear.next= newNode;
    this.rear = newNode;
    this.length++;
    return;
  }
  
  dequeue(){
    // updation on front
    if(this.front == null) 
      return "Queue is empty";

    const deleteNode = this.front;
    if(this.front==this.rear) {
      this.rear=null;
    }
    this.front = deleteNode.next;  
    this.length--;
    return deleteNode.value;
  }
  
  isEmpty() {
    if(this.front == null) 
      return true;

    return false;
  }
}

const myQueue = new Queue();

console.log(myQueue.peek());
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.peek());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
myQueue.enqueue("Samir");
console.log(myQueue);
console.log(myQueue.dequeue());
myQueue.dequeue();
console.log(myQueue.dequeue());
console.log(myQueue);




//Joy
//Matt
//Pavel
//Samir