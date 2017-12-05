// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const count = {};
  let max = 0;
  let maxCharacter = '';
  str.split("").forEach((char) => {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  });

  // remember Object.keys(ob) get the keys of the obejct in an array
  // format and Object.values(obj) return the values in an array format
  Object.keys(count).forEach((key) => {
    if (count[key] > max) {
      max = count[key];
      maxCharacter = key;
    }
  });
  return maxCharacter;
}

// this problem O(2n) time which is O(n) time essentially 
module.exports = maxChar;
