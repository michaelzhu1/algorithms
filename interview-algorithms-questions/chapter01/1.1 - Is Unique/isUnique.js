function allUniqueChars(string) {
  const seen = {};
  for (let i = 0; i < string.length; i++) {
    if (seen[string[i]]) {
      return false;
    } else {
      seen[string[i]] = true;
    }
  }
  return true;
}

/* TESTS */
// log some tests here

console.log(allUniqueChars('bkjaewf'));
console.log(allUniqueChars('bkjaewfb'));
console.log(allUniqueChars('abcdefg'));
console.log(allUniqueChars('abcdefgac'));
