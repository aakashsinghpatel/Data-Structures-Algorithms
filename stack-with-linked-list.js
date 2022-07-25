class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(this.top==null) {
      return "Stack is empty";
    }
    return this.top.value;
  }
  push(value){
    const newNode = new Node(value);
    if(this.top== null) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return;
  }
  
  pop(){
     if(this.top== null) {
      return "No Data in stack";
    }

    if(this.top== this.bottom) {
      this.bottom=null;
    }
    const deletedNode = this.top;
    this.top = deletedNode.next;
    this.length--;
    return deletedNode.value;
  }
  
  isEmpty() {
    if(this.top== null) 
      return true;

    return false;
  }
}

const myStack = new Stack();

console.log(myStack.peek());
myStack.push("Discord")
myStack.push("Udemy")
myStack.push("google")
console.log(myStack)
console.log(myStack.pop())
console.log(myStack)

myStack.push("Amazon")
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
  console.log(myStack.pop())
console.log(myStack)


//Discord
//Udemy
//google
