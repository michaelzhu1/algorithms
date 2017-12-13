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
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      this.head = null;
      return null;
    }
    let prevNode = this.head;
    let currNode = this.head.next;
    while (currNode.next) {
      prevNode = prevNode.next;
      currNode = currNode.next;
    }
    prevNode.next = null;

  }
}

module.exports = { Node, LinkedList };
