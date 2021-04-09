//Question 1.

let setZeroes = function (matrix) {
  let row = matrix.length,
    col = matrix[0].length;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (matrix[r][c] === 0) {
        setMatrix(matrix, r, c);
      }
    }
  }

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (matrix[r][c] === true) matrix[r][c] = 0;
    }
  }
  return matrix;
};

const setMatrix = (matrix, r, c) => {
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[r][i] !== 0) matrix[r][i] = true;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][c] !== 0) matrix[i][c] = true;
  }
  matrix[r][c] = 0;
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);

setZeroes([
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