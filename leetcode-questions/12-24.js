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

// 3Sum
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

var threeSum = function(nums) {
    const sorted = nums.sort((a,b) => a-b);
    const result = [];
    for (let i = 0; i < (sorted.length-2); i++) {
        if ((i === 0) || ((i > 0) && sorted[i] !== sorted[i-1])) {
            let complement = 0 - sorted[i];
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                let twoNumSum = sorted[low] + sorted[high];
                if (twoNumSum < complement) {
                    low++;
                } else if (twoNumSum > complement) {
                    high--;
                } else if (twoNumSum === complement) {
                    result.push([sorted[i], sorted[low], sorted[high]]);
                    while ((low < high) && (sorted[low] === sorted[low+1])) {
                        low++;
                    }
                    while ((low < high) && (sorted[high] === sorted[high-1])) {
                        high--;
                    }
                    low++;
                    high--;
                }
            }
        }
    }
    return result;
};
