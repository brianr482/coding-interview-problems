/**
 * Hackerrank
 * You are given an unordered array consisting of consecutive integers 
 * [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two
 * elements. You need to find the minimum number of swaps required to sort the
 * array in ascending order.
 * 
 * Constraints:
 * 1. 1 <= n <= 10^5
 * 2. 1 <= arr[i] <= n
 * 
 * This solution got 40 points
 * Problem link: http://hr.gs/3apgt
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
function minimumSwaps(arr) {
  let swaps = 0;
  if (arr.length === 1) {
    return swaps;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    if (element !== i + 1) {
      arr[i] = arr[element - 1];
      arr[element - 1] = element;
      i--;
      swaps++;
    }
  }
  return swaps;
}