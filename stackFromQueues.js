class StackFromQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  efficientPush(elem) {
    this.queue1.push(elem);
  }

  inefficientPush(elem) {
    this.queue2.push(elem);
    while(this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }
    const queue2Local = this.queue2;
    this.queue2 = this.queue1;
    this.queue1 = queue2Local;
  }

  inefficientPop() {
    if(this.queue1.length > 1) {
      while(this.queue1.length > 1) {
        this.queue2.push(this.queue2.shift());
      }
    }
    const retVal = this.queue1.shift();
    const queue2Local = this.queue2;
    this.queue2 = this.queue1;
    this.queue1 = queue2Local;
    return retVal;
  }

  efficientPop() {
    return this.queue1.shift();
  }
}

const stack = new StackFromQueues();
stack.efficientPush(1);
stack.efficientPush(2);
stack.efficientPush(3);
console.log(stack.inefficientPop());
stack.efficientPush(4);
stack.efficientPush(5);
stack.efficientPush(6);
console.log(stack.inefficientPop());

stack.inefficientPush(1);
stack.inefficientPush(2);
stack.inefficientPush(3);
console.log(stack.efficientPop());
stack.inefficientPush(4);
stack.inefficientPush(5);
stack.inefficientPush(6);
console.log(stack.efficientPop());