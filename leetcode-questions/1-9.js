// 167. Two Sum II - Input array is sorted
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
//
// You may assume that each input would have exactly one solution and you may not use the same element twice.
//
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

var twoSum = function(numbers, target) {
    const store = [];
    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];
        if (store.includes(numbers[i])) {
            return [store.indexOf(numbers[i])+1, i+1];
        } else {
            store.push(complement);
        }
    }
    return false;
};

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let sum;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }
    return false;
};
// faster implementation of O(n) time instead of O(n^2)
