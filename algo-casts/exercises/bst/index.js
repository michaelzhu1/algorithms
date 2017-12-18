// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data) {
      if (this.left) {
        return this.left.insert(data); //called insert with this instead of this.left
      } else {
        this.left = new Node(data); // forgot to initialize a new node
      }
    } else if (data > this.data) {
      if (this.right) {
        return this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  // return the Node witht he same value in the tree
  contains(data) {
    if (data === this.data) {
      return this;
    } else if (data < this.data){
      if (this.left === null) {
        return null;
      }
      return this.left.contains(data);
    } else {
      if (this.right === null) {
        return null;
      }
      return this.right.contains(data);
    }
  }


}

module.exports = Node;
