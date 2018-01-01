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
