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
  Object.keys(count).forEach((key) => {
    if (count[key] > max) {
      max = count[key];
      maxCharacter = key;
    }
  });
  return maxCharacter;
}

module.exports = maxChar;
