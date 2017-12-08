// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1;
  // const results = Array(n).fill([]);
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  while (startCol <= endCol && startRow <= endRow) {
    // Top row
    for (let col = startCol; col <= endCol; col++) {
      results[startRow][col] = counter;
      counter++;
    }
    startRow++;

    // Right col
    for (let row = startRow; row <= endRow; row++) {
      results[row][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let col = endCol; col >= startCol; col--) {
      results[endRow][col] = counter;
      counter++;
    }
    endRow--;

    // Left col
    for (let row = endRow; row >= startRow; row--) {
      results[row][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
