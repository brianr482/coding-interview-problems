/**
 * Hackerrank
 * In this challenge, print the array after each iteration of the insertion
 * sort, i.e., whenever the next element has been inserted at its correct
 * position. Since the array composed of just the first element is already
 * sorted, begin printing after placing the second element.
 * 
 * Constraints:
 * 1. 1 <= n <= 1000
 * 2. -10000 <= arr[i] <= 10000.0 <= i < n
 * 3. All the characters in the sequence: {, }, [, ], (, )
 * 
 * This solution got 30 points
 * Problem link: http://hr.gs/e4v
 */

 // Complete the insertionSort2 function below.
 /**
  * 
  * @param {number} n 
  * @param {number[]} arr 
  */
function insertionSort2(n, arr) {
  // Edge case
  if (n === 1) {
    return arr;
  }

  let i = 1;
  while (i < arr.length) {
    const element = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = element;
    i++;
    console.log(arr.join(' '));
  }

  return arr;
}