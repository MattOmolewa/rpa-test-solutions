//Question 1.

function convertZ(twoD) {
  let row = twoD.length;
  let column = twoD[0].length;

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < column; y++) {
      if (twoD[x][y] === 0) {
        setMatrix(twoD, x, y);
      }
    }
  }

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < column; y++) {
      if (twoD[x][y] === true) twoD[x][y] = 0;
    }
  }
  return twoD;
}

const setMatrix = (arr, r, c) => {
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[r][i] !== 0) arr[r][i] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][c] !== 0) arr[i][c] = true;
  }
  arr[r][c] = 0;
};

convertZ([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);

convertZ([
  [1, 2, 3, 4],
  [5, 6, 0, 8],
  [9, 10, 11, 12],
]);


//Question 3.

function findMaxConsecutiveOnes(val) {
  const arr = Array.isArray(val) ? val : [...val];
  let current = 0;
  let max = 0;

  arr.forEach((value) => {
    if (value == 1) {
      current += 1;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  });
  return max;
}
const a = '1100000111000';
const b = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

findMaxConsecutiveOnes(a);
findMaxConsecutiveOnes(b);