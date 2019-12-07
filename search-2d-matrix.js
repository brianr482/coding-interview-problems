/**
 * Leetcode, #240
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 1. Integers in each row are sorted in ascending from left to right.
 * 2. Integers in each column are sorted in ascending from top to bottom.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 function searchMatrix(matrix, target) {
  if (matrix.length > 0 && matrix[0].length > 0) {
    let n = matrix[0].length - 1;
    let m = 0;
    while (n > -1 && m < matrix.length) {
      if (matrix[m][n] === target) {
        return true;
      }
      if (matrix[m][n] < target) {
        m++;
      } else {
        n--;
      }
    }
  }
  return false;
};