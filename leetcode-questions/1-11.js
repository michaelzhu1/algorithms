// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    // let length = 0;
    // for (let i = 0; i < s.length; i++) {
    //     let substring = s[i];
    //     for (let j = i + 1; j < s.length; j++) {
    //         if (!substring.includes(s[j])) {
    //             substring += s[j];
    //         } else {
    //             length = Math.max(length, substring.length);
    //             break;
    //         }
    //     }
    //     length = Math.max(length, substring.length);
    // }
    // return length;
    const set = new Set();
    let i = 0;
    let j = 0;
    let result = 0;
    const length = s.length;
    while (i < length && j < length) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            i++;
            result = Math.max(result, i - j);
        } else {
            set.delete(s[j]);
            j++;
        }
    }
    return result;
};
