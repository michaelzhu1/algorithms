// The count-and-say sequence is the sequence of integers with the first five terms as following:
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.
//
// Note: Each term of the sequence of integers will be represented as a string.
//
// Example 1:
//
// Input: 1
// Output: "1"
// Example 2:
//
// Input: 4
// Output: "1211"

var countAndSay = function(n) {
    let countsay = '1';
    while (n > 1) { // while loop keeps track of the level of countsay
        let count = 0;
        let num = countsay[0];
        let nextCountsay = '';
        for (let i = 0; i < countsay.length; i++) { // for loop iterate through each number in each level
            if (countsay[i] === num) {
                count++;
            } else {
                nextCountsay += count; // automatically convert number to a string by adding them together
                nextCountsay += num;
                num = countsay[i];
                count = 1;
            }
        }
        nextCountsay += count;
        nextCountsay += num;
        countsay = nextCountsay;
        n--;
    }
    return countsay;
};

// O(n^2) run time
