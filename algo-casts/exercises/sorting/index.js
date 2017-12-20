// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let j = 0; j < (arr.length - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
