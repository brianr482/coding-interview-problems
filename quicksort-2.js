/**
 * Hackerrank
 * In this challenge, print your array every time your partitioning method
 * finishes, i.e. whenever two subarrays, along with the pivot, are merged
 * together. The first element in a sub-array should be used as a pivot.
 * Partition the left side before partitioning the right side.
 * The pivot should be placed between sub-arrays while merging them.
 * Array of length  or less will be considered sorted, and there is no need to
 * sort or to print them.
 * 
 * Constraints:
 * 1. 1 <= n <= 1000
 * 2. -1000 <= x <= 1000, x ∈ arr
 * 3. All the characters in the sequence: {, }, [, ], (, )
 * 
 * This solution got 30 points
 * Problem link: http://hr.gs/fffdff
 */

 /**
  * 
  * @param {string} input Custom input of Hackerrank 
  */
function processData(input) {
  const arr = input.split('\n')[1]
    .split(' ')
    .map(el => +el);
  if (arr.length < 2) {
    return;
  }
  quickSort(arr);
}

/**
 * 
 * @param {number[]} arr The array/subarray to be sorted
 */
function quickSort(arr) {
  if (arr.length > 1) {
    let left = [];
    let right = [];
    const pivot = arr[0];
    partition(arr.slice(1), left, right, pivot);
    left = quickSort(left);
    right = quickSort(right);
    const merged = [...left, pivot, ...right]
    console.log(merged.join(' '));
    return merged;
  } else {
    return arr;
  }
}

/**
 * 
 * @param {number[]} arr Original array
 * @param {number[]} left All numbers lower than pivot will be placed here
 * @param {number[]} right All numbers greater or queal than pivot will be placed here
 * @param {number} pivot 
 */
function partition(arr, left, right, pivot) {
  arr.forEach(el => {
    if (el >= pivot) {
      right.push(el);
    } else {
      left.push(el);
    }
  });
}

/* In place
function quickSort(arr, low, high) {
  if (low < high) {
    const sortedIdx = partition(arr, low, high);
    quickSort(arr, low, sortedIdx - 1);
    quickSort(arr, sortedIdx + 1, high);
  }
}
*/
/* in place
function partition(arr, low, high) {
  let i = low;
  let j = high;
  const pivot = low;
  while (i < j) {
    while(arr[i] <= arr[pivot]) {
      i++;
    }
    while(arr[j] > arr[pivot]) {
      j--;
    }
    if (i < j) {
      const iVal = arr[i];
      arr[i] = arr[j];
      arr[j] = iVal;
    }
  }
  const copy = arr[pivot];
  arr[pivot] = arr[j];
  arr[j] = copy;
  return j;
}
*/