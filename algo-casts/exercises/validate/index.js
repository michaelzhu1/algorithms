// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// initial attempt solution, may not be optimized
function validate(node, min = null, max = null) {
  if (max && node.data > max) {
    return false;
  } else if (min && node.data < min) {
    return false;
  }
  if (node.left) {
    return validate(node.left, min, node.data);
  } else if (node.right) {
    return validate(node.right, node.data, max);
  } else {
    return true;
  }
}

module.exports = validate;
