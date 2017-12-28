// 202. Happy Number
// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 19 is a happy number
//
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function(n) {
    const seen = {};
    while (!seen[n] && n !== 1) {
        seen[n] = true;
        const arr = n.toString().split('');
        const newArr = arr.map(el => {
            return Math.pow(Number(el), 2);
        });
        const newNum = newArr.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        n = newNum;
    }
    return n === 1;
};

// used an object to store all the numbers that appeared to check if it's going in an infinite loop


// 258. Add Digits
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

var addDigits = function(num) {
    if (num.toString().length === 1) {
        return num;
    } else {
        const newNum = num.toString().split('').reduce((prev, curr) => {
            return Number(prev) + Number(curr);
        }, 0)
        return addDigits(newNum);
    }
};

//
// 209. Minimum Size Subarray Sum
// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function(s, nums) {
    let left = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= s) {
            ans = Math.min(ans, (i + 1 - left));
            sum -= nums[left];
            left++;
        }
    }
    return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};

//  Used a left pointer to keep track the left most index while keep shrinking the length to see if the sum is still more than s. Used a ans variable to keep track the minimum length, and preset it to Number.MAX_SAFE_INTEGER
//
// 104. Maximum Depth of Binary Tree
// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

var minDepth = function(root) {
    // Edge case in case root is null, should never reach this on normal cases
    if (root === null) {
        return 0;
    }
    // if the node the leaf node and has no children, then should just return 1 for itself
    if (root.left === null && root.right === null) {
        return 1;
    // if the node has only right child, then recursively call the right child while adding 1
    } else if (root.left === null) {
        return minDepth(root.right) + 1;
    // if the node has only left child, then recursively call the left child while adding 1
    } else if (root.right === null) {
        return minDepth(root.left) + 1;
    // if the node has both children, then call both childs and return the minimum of both and then add 1 onto it
    } else {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};

// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    const diff = Math.abs(left - right);
    // then make sure to only call isBalanced recursively if the current difference between left and right routes is less than 1;
    return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
// Used maxDepth/Depth helper to get the height of both left and right
function maxDepth(node) {
    if (node === null) {
        return 0;
    }
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
// This problem used two recursion call: One to get the depth of each child and two to check the current child is self-balanced too
