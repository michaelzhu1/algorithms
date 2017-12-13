// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.store = [];
  }

  push(record) {
    this.store.unshift(record);
  }

  pop() {
    if (this.store.length <= 0) {
      return "Stack is empty!";
    } else  {
      return this.store.shift();
    }
  }

  peek() {
    if (this.store.length > 0) {
      return this.store[0];
    }
  }
}

module.exports = Stack;
