// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/* ONE IMPORTANT THING: in JavaScript, only string comparison is available.
  'haha' === 'haha' returns true, however, [1,2] === [1,2] return false as well
  as {1:'hi'} === {1:'hi'} return false. In Ruby however, all of above
  would return true.
*/
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
// my second attempt working solution
// function anagrams(stringA, stringB) {
//   const hashA = {};
//   stringA.replace(/[^\w]/g, "").toLowerCase().split("").forEach(char => {
//     if (!hashA[char]) {
//       hashA[char] = 1;
//     } else {
//       hashA[char] += 1;
//     }
//   });
//   stringB.replace(/[^\w]/g, "").toLowerCase().split("").forEach(char => {
//     if (!hashA[char]) {
//       hashA[char] = 123123;
//     } else {
//       hashA[char] -= 1;
//     }
//   });
//   const sum = Object.values(hashA).reduce((total, currentValue) => {
//     return total + currentValue;
//   });
//   return sum === 0;
// }
// initial unsuccessful attempt because of regexp
// function anagrams(stringA, stringB) {
//   const hashA = {};
//   stringA.split("").forEach(char => {
//     if (!hashA[char.toLowerCase()] && char !== " ") {
//       hashA[char.toLowerCase()] = 1;
//     } else if (char !== " ") {
//       hashA[char.toLowerCase()] += 1;
//     }
//   });
//   stringB.split("").forEach(char => {
//     if (hashA[char.toLowerCase()] === undefined && char !== " ") {
//       return false;
//     } else if (char !== " ") {
//       hashA[char.toLowerCase()] -= 1;
//     }
//   });
//   const sum = Object.values(hashA).reduce((total, currentValue) => {
//     return total + currentValue;
//   });
//   return sum === 0;
// }


module.exports = anagrams;
