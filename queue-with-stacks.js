class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}


class QueueWithStack{
  constructor() {
    this.stack=[]
  }

  enqueue(value) {
    this.stack.push(value)
  }

  dequeue() {
    if(this.stack.length == 0)
      return "Queue is Empty";
    const tempStack= [];
    let length =this.stack.length;
    for (let i=0; i< length; i++) {
      tempStack.push(this.stack.pop());
    }
    const deleteData = tempStack.pop();
    length =tempStack.length;
    for (let i=0; i< length; i++) {
      this.stack.push(tempStack.pop());
    }
    return deleteData;
  }

  peek() {
    if(this.stack.length == 0)
      return "Queue is Empty";
    
    const tempStack= [];
    let length =this.stack.length;
    for (let i=0; i < length; i++) {
      tempStack.push(this.stack.pop());
    }
    length = tempStack.length
    const peekData = tempStack.pop()
    tempStack.push(peekData);
    for (let i=0; i< length; i++) {
      this.stack.push(tempStack.pop());
    }
    return peekData;
  }
}
// const myQueue = new CrazyQueue();

const myQueue = new QueueWithStack()
console.log(myQueue.peek());
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
console.log(myQueue);
myQueue.enqueue('Pavel');
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.dequeue());
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.peek());