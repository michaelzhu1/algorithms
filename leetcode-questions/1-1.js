// 70. Climbing Stairs
// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Note: Given n will be a positive integer.
//
//
// Example 1:
//
// Input: 2
// Output:  2
// Explanation:  There are two ways to climb to the top.
//
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output:  3
// Explanation:  There are three ways to climb to the top.
//
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const store = {};
var climbStairs = function(n) {
    if (store[n]) {
        return  store[n];
    }
    if (n === 1) {
        return n;
    }
    if (n === 2) {
        return n;
    }

    const result = climbStairs(n-1) + climbStairs(n - 2);
    store[n] = result;
    return result;
};
// the same as fibinacci problem

// 169. Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.

var majorityElement = function(nums) {
    const threshold = Math.floor(nums.length/2);
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        if (!counter[nums[i]]) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]]++;
        }
    }
    const result = Object.keys(counter).filter(key => {
        return counter[key] > threshold;
    });
    return parseInt(result[0]);
};

// Used hash to store the counts and then filter out the one with count more than n/2

var majorityElement = function(nums) {
    let majority = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count++;
        } else if (majority === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return majority;
  };
  // majority voting algorithm O(1) space and O(n) runtime;
