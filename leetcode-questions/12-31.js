// 189. Rotate Array
// Rotate an array of n elements to the right by k steps.
//
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
var rotate = function(nums, k) {
    const realShift = k % nums.length;
    // let i = 0;
    // while (i < realShift) {
    //     nums.unshift(nums.pop());
    //     i++;
    // }
    nums.unshift(...nums.splice(nums.length - realShift, realShift));
};

// 136. Single Number
// Given an array of integers, every element appears twice except for one. Find that single one.
var singleNumber = function(nums) {
    const sorted = nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i= i+2) {
        if (sorted[i] !== sorted[i + 1]) {
            return sorted[i];
        }
    }
};
