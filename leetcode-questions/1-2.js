// 101. Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
//

var isSymmetric = function(root) {
   return isMirror(root, root);
};

function isMirror(root1, root2) {
   if (root1 === null && root2 === null) {
       return true;
   }
   if (root1 === null || root2 === null) {
       return false;
   }
   return root1.val === root2.val
       && isMirror(root1.right, root2.left)
       && isMirror(root1.left, root2.right);
}


// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    const maxNums = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        maxNums[i] = Math.max(maxNums[i-1], nums[i] + maxNums[i-2]);
    }
    return maxNums.pop();
};

// Dynamic programming at it's finest. Break the problem down to the simpliest form and then build the solution up from those basic forms by using previous results
