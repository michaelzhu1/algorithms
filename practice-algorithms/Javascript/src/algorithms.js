(function () {
if(typeof Algorithms === "undefined") {
  window.Algorithms = {};
}

// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.
Algorithms.digitalRoot = function (number) {
  if (number > 10){
    let sum = 0;
    while (number !== 0) {
      sum += number % 10;
      number = number / 10;
    }
    Algorithms.digital_root(sum);
  }
  return number
};

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.
Algorithms.caesarCipher = function (string, shift) {
  // const stringArray = string.split("");
  //
  // stringArray.map(char => {
  //
  // })
};

// Write a function that takes two strings and returns the lenght of the longest common substring.
Algorithms.commonSubstrings = function (stringOne, stringTwo) {

};

// Write a function that takes an array of integers and returns their sum.
// Use recursion.
Algorithms.sumRec = function (numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  return numbers[numbers.length - 1] + Algorithms.sumRec(numbers.slice(0,numbers.length -1))
};

console.log(Algorithms.sumRec([1,2,3]));

// Write a function which returns the first n elements from the fibonnacci sequence, given n.
Algorithms.fibs = function (number) {

  if (number <= 1) {return [0];}
  if (number === 2) {return [0, 1];}
  let prev  = Algorithms.fibs(number - 1);
  let prev_prev = Algorithms.fibs(number - 2);
  prev.push(prev[prev.length - 1] + prev_prev[prev_prev.length - 1]);
  return prev; // Always remember to explicitly return the result
};

// console.log(Algorithms.fibs(1));
// console.log(Algorithms.fibs(2));
// console.log(Algorithms.fibs(3));

// Write a function that takes a string and returns true if it's a palindrome, false if it's not.
// Your solution should take less time and memory than rebuilding the string backward and comparing the two.
Algorithms.isPalindrome = function (string) {
  const length = string.length;
  for (let i = 0; i < length/2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Implement the Folding Cipher.
// It folds the alphabet in half and uses the adjacent letter.
// a <=> z, b <=> y, c <=> x, m <=> n.
Algorithms.foldingCipher = function (string) {

};

// Write a method that finds all the unique substrings for a word.
Algorithms.uniqSubs = function (string) {
  // const result = [];
  // for (let i = 0; i < string.length; i++) {
  //   for (let j = i; j < string.length; i++) {
  //     result.push(string.substring(i,j));
  //   }
  // }

};


// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// You can solve this trivially in O(n**2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.
Algorithms.lcs = function (array) {

};

// Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition:
// the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {
  const result = [];
  while (result.length < 10) {
    number ++;
    let firstTwoDigits = Math.floor(number / 100);
    let lastTwoDigits = number % 100;
    let middleTwoDigits = Math.floor(number / 10) % 100;
    if (firstTwoDigits + lastTwoDigits === middleTwoDigits) {
      result.push(number);
    }
  }
  return result;

};

// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.
// Time complexity: O(n).
// Return an array.
Algorithms.pairSum = function (array, k) {

};

// Given a matrix of integers and coordinates of a rectangular region within the matrix.
// Find the sum of numbers falling inside the rectangle.
// Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {

};

})();
