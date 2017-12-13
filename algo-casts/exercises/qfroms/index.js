// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(record) {
    this.stack1.push(record);
  }

  remove() {
    while (this.stack1.peek() !== undefined) {
      this.stack2.push(this.stack1.pop());
    }
    const popped = this.stack2.pop();
    while (this.stack2.peek(0 !== undefined)) {
      this.stack1.push(this.stack2.pop());
    }
    return popped;
  }

  peek() {
    while (this.stack1.peek() !== undefined) {
      this.stack2.push(this.stack1.pop());
    }
    const peeked = this.stack2.peek();
    while (this.stack2.peek() !== undefined) {
      this.stack1.push(this.stack2.pop());
    }
    return peeked;
  }


}

module.exports = Queue;
