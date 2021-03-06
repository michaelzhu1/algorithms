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

// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) {
    if (!s) {
        return true;
    }

    const stack = [];
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];
    const match = {'(' : ')', '{' : '}', '[' : ']'};

    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            stack.push(s[i]);
        }
        if (right.includes(s[i])) {
            const stackStr = stack.pop();
            if (match[stackStr] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// 58. Length of Last Word
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.

var lengthOfLastWord = function(s) {
    const arr = s.split(' ');
    let length = arr.length - 1;
    // wasted so much time because wrote '=>' instead of '>='. Watch out for syntax!
    while (length >= 0) {
        if (arr[length] === '') {
            length--;
        } else {
            return arr[length].length;
        }
    }
    return 0;
};

// 53. Maximum Subarray
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let tempMax;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            tempMax = nums[i];
        } else {
            tempMax = nums[i] + tempMax;
        }
        if (tempMax > maxSum) {
            maxSum = tempMax;
        }
        if (tempMax <= 0) {
            tempMax = 0;
        }
    }
    return maxSum;
};
//
// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
//
// Input: [1,3,5,6], 7
// Output: 4
// Example 1:
//
// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

// 19. Remove Nth Node From End of List
// Given a linked list, remove the nth node from the end of list and return its head.
//
// For example,
//
//    Given linked list: 1->2->3->4->5, and n = 2.
//
//    After removing the second node from the end, the linked list becomes 1->2->3->5.


var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let fast = dummyHead;
    if (!head.next) {
        return [];
    }
    while (n > 0 && fast.next) {
        fast = fast.next;
        n--;
    }
    let slow = dummyHead;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    if (slow.next.next) {
        slow.next = slow.next.next;
    } else {
        slow.next = null;
    }
    return dummyHead.next;
};
