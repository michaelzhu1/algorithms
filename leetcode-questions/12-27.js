// 202. Happy Number
// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 19 is a happy number
//
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function(n) {
    const seen = {};
    while (!seen[n] && n !== 1) {
        seen[n] = true;
        const arr = n.toString().split('');
        const newArr = arr.map(el => {
            return Math.pow(Number(el), 2);
        });
        const newNum = newArr.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        n = newNum;
    }
    return n === 1;
};

// used an object to store all the numbers that appeared to check if it's going in an infinite loop 
