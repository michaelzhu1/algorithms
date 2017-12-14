// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // my own long solution :(
    // const newHead = new Node(data);
    // if (this.head !== null) {
    //   const oldHead = this.head;
    //   this.head = newHead;
    //   this.head.next = oldHead;
    // } else {
    //   this.head = newHead;
    // }
    this.head = new Node(data, this.head);
  }

  size() {
    let length = 0;
    let currNode = this.head;
    while (currNode !== null) {
      length++;
      currNode = currNode.next;
    }
    return length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let currNode = this.head;
    // while (currNode.next) {
    //   currNode = currNode.next;
    // }
    // return currNode;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) {
    //   return null;
    // }
    // this.head = this.head.next;
    return this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return null;
    // } else if (!this.head.next) {
    //   this.head = null;
    //   return null;
    // }
    // let prevNode = this.head;
    // let currNode = this.head.next;
    // while (currNode.next) {
    //   prevNode = prevNode.next;
    //   currNode = currNode.next;
    // }
    // prevNode.next = null;
    return this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // if (!this.head) {
    //   this.head = new Node(data);
    //   return this.head;
    // }
    // this.getLast().next = new Node(data);
    return this.insertAt(data, this.size());
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    if (index >= this.size()) {
      return null;
    }
    let node = this.head;
    while (index > 0) {
      node = node.next;
      index--;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    } else if (index >= this.size()) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head.next;
    let prevNode = this.head;
    while (index > 1) {
      currNode = currNode.next;
      prevNode = prevNode.next;
      index--;
    }
    prevNode.next = currNode.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      const nextNode = this.head;
      this.head = new Node(data, nextNode);
      return;
    }
    if (index >= this.size()) {
      this.getLast().next = new Node(data);
      return;
    }
    const prevNode = this.getAt(index - 1);
    const afterNode = this.getAt(index);
    prevNode.next = new Node(data, afterNode);
  }

}

module.exports = { Node, LinkedList };
