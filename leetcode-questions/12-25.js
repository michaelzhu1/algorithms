var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/ig,"");
    var rev = s.split("").reverse().join("");
    return s.indexOf(rev) == 0;
};

console.log(isPalindrome('abbubba'));

// 283. Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

var moveZeroes = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }
    for (index; index < nums.length; index++) {
        nums[index] = 0;
    }
};


// 242. Valid Anagram
// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

var isAnagram = function(s, t) {
    const letters = {};
    s.split('').forEach(char => {
        letters[char] ? letters[char]++ : letters[char] = 1;
    });
    t.split('').forEach(char => {
        letters[char] === null ? false : letters[char]--;
    });
    return Object.values(letters).every(count => (count === 0));
};
