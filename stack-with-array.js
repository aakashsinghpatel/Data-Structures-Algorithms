class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.data=[];
  }
  peek() {
    if(this.data.length <1) {
      return "Stack is empty";
    }
    return this.data[this.data.length-1];
  }
  
  push(value){
    this.data.push(value);
    return;
  }
  
  pop(){
     if(this.data.length <1) {
      return "Stack is empty";
    }
  return this.data.pop()
  }
  
  isEmpty() {
    if(this.data.length <1) {
      return true;
    }
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
