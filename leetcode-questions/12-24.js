// 350. Intersection of Two Arrays II
// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a,b) => a-b);
    nums2 = nums2.sort((a,b) => a-b);
    let i = 0;
    let j = 0;
    const result = [];
    // make sure check the value is undefined instead of just putting nums1[i]
    // to check if there is a value because nums[i] return false if the value is 0
    while (nums1[i] !== undefined && nums2[j] !== undefined) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        }
    }
    return result;
};

const nums1 = [4, 7, 9, 7, 6, 7];
const nums2 = [5, 0, 0, 6, 1, 6, 2, 2, 4];
intersect(nums1, nums2);
