// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = steps;


// my initial solution
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     const stair = Array(i).fill('#');
//     const invisible = Array(n - i).fill(' ');
//     console.log(stair.join('') + invisible.join(''));
//   }
// }

//
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(Array(i).fill('#').join('') + Array(n - i).fill(' ').join(''));
//   }
// }
