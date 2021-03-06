// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}


//
// function bubbleSort(arr) {
//   let sorted = false;
//   while (!sorted) {
//     sorted = true;
//     for (let j = 0; j < (arr.length - 1); j++) {
//       if (arr[j] > arr[j + 1]) {
//         sorted = false;
//         const lesser = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = lesser;
//       }
//     }
//   }
//   return arr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const newMin = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = newMin;
    }
  }
  return arr;
}
// keep subdividing the array until its length is 1
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  result.push(...left);
  result.push(...right);
  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
