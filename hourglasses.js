/*
* Given a  2D Array, :
* 1 1 1 0 0 0
* 0 1 0 0 0 0
* 1 1 1 0 0 0
* 0 0 0 0 0 0
* 0 0 0 0 0 0
* 0 0 0 0 0 0
*
* We define an hourglass in  to be a subset of values with indices falling in
* this pattern in 's graphical representation:
* a b c
*   d
* e f g
* There are  hourglasses in , and an hourglass sum is the sum of an hourglass'
* values. Calculate the hourglass sum for every hourglass in , then print the
* maximum hourglass sum.
*
* Constraints
* - -9 <= arr[i][j] <= 9
* - 0 <= i, j <= 5
*/

function hourglassSum(arr) {
  let max = -63;
  let i = 0;
  let j = 0;
  let sum;
  while (i + 2 < arr.length && j + 2 < arr[i].length) {
      sum = calcHourglassSum(arr, i , j);
      max = Math.max(max, sum);
      j++;
      if (j + 2 >= arr[i].length) {
          j = 0;
          i++;
      }
  }
  return max;
}

function calcHourglassSum(arr, i, j) {
  return arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
         + arr[i + 1][j + 1]
         + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
}