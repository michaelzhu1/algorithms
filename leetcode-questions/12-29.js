// 48. Rotate Image
// You are given an n x n 2D matrix representing an image.
//
// Rotate the image by 90 degrees (clockwise).
//
// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
//
// Example 1:
//
// Given input matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
//
// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:
//
// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],
//
// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

var rotate = function(matrix) {
    matrix.reverse();
    for (let i = 0; i< matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            const temp1 = matrix[i][j];
            const temp2 = matrix[j][i];
            matrix[i][j] = temp2;
            matrix[j][i] = temp1;
        }
    }
};

// 485. Max Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxOnes = 0;
    let counting = false;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] === 1) && (!counting)) {
            counting = true;
            count++;
        } else if ((nums[i] === 1) && (counting)) {
            count++;
        } else if ((nums[i] === 0) && (counting)) {
            maxOnes = Math.max(maxOnes, count);
            count = 0;
            counting = false;
        }
    }
    return Math.max(maxOnes, count);
};
