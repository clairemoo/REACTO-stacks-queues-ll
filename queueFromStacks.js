class QueueFromStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(elem) {
    this.stack1.push(elem);
  }

  dequeue() {
    if(this.stack2.length === 0) {
      while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const queue = new QueueFromStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
