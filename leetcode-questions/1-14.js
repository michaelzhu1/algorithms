function maxrating(input) {
  const result = [];
  let subNeg;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      result.push(input[i]);
    } else {
      subNeg = [];
      subNeg.push(input[i]);
      if (input[i + 1] < 0) {
        subNeg.push(input[i + 1]);
        i = i + 2;
        while (input[i] < 0) {
          subNeg.push(input[i]);
          i++;
        }
        i--;
        let oddSum = 0;
        let evenSum = 0;
        let index = 0;
        while (index < subNeg.length) {
          if (index % 2 !== 0) {
            oddSum = oddSum + subNeg[index];
          } else {
            evenSum = evenSum + subNeg[index];
          }
          index++;
        }
        result.push(Math.max(oddSum, evenSum));
      }
    }
  }
  const maxSum = result.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return maxSum;
}


test = [-1, -2, -3, -4, -5, 10, 13, -1, 0, 123, 11, -13];
test1 = [9, -1, -3, 4, 5];
test2 = [1,3,51,24,234,-14];
test4 = [-4,-100, -2, -101];
test5 = [1,2,3,4,-1,-5,-4,5,-100,-1,-1,-1];
// maxrating(test);

maxrating(test5);
