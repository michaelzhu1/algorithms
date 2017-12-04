// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// solution 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// solution 2
// function reverse(str) {
//   let reversed = "";
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }


// my own solution
// function reverse(str) {
//   let res = [];
//   str.split("").forEach(char => {
//     res.unshift(char);
//   });
//   return res.join("");
// }
