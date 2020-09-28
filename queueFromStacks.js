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