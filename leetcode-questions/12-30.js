// 67. Add Binary
//
// Given two binary strings, return their sum (also a binary string).
//
// For example,
// a = "11"
// b = "1"
// Return "100".

var addBinary = function(a, b) {
    const arr1 = a.split('').reverse();
    const arr2 = b.split('').reverse();
    let i = 0;
    const length = Math.max(a.length, b.length);
    const result = [];
    let rollover = 0;
    while (i < length) {
        const num1 = parseInt(arr1[i]);
        const num2 = parseInt(arr2[i]);
        if (arr1[i] !== undefined && arr2[i] !== undefined) {
            if (num1 + num2 + rollover === 2) {
                result.push("0");
                rollover = 1;
            } else if (num1 + num2 + rollover === 1){
                result.push("1");
                rollover = 0;
            } else if (num1 + num2 + rollover === 0) {
                result.push("0");
            } else if (num1 + num2 + rollover === 3) {
                result.push("1");
                rollover = 1;
            }
        } else if (arr2[i] === undefined) {
            if (num1 + rollover === 2) {
                result.push("0");
                rollover = 1;
            } else if (num1 + rollover === 1) {
                result.push("1");
                rollover = 0;
            } else {
                result.push("0");
            }
        } else {
            if (num2 + rollover === 2) {
                result.push("0");
                rollover = 1;
            } else if (num2 + rollover === 1) {
                result.push("1");
                rollover = 0;
            } else {
                result.push("0");
            }
        }
        i++;
    }
    if (rollover === 1) {
        result.push("1");
    }
    return result.reverse().join('');
};
