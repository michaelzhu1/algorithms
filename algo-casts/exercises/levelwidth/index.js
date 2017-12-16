// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const array = [root, 'stop'];
  while (array.length > 1) {
    const node = array.shift();
    if (node === "stop") {
      array.push(node);
      counters.push(0);
    } else {
      counters[counters.length - 1]++;
      array.push(...node.children);
    }
  }
  return counters;
}

module.exports = levelWidth;
