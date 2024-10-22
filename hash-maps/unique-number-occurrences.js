/**
 * LeetCode | #1207 | Easy
 * 
 * Given an array of integers arr, return true if the number of occurrences of each
 * value in the array is unique or false otherwise.
 * 
 * Constraints:
 * 1. 1 <= arr.length <= 1000
 * 2. -1000 <= arr[i] <= 1000
 * 
 */

/**
 * Time complexity: O(n) - Space complexity: O(n)?
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
 function uniqueOccurrences(arr) {
  if (arr.length === 1) {
    return true;
  }

  const occurrencesMap = new Map();
  for (const num of arr) {
    const occurrences = occurrencesMap.has(num) 
      ? occurrencesMap.get(num) + 1
      : 1;

    occurrencesMap.set(num, occurrences);
  }
  const occurrencesSet = new Set([...occurrencesMap.values()]);

  return occurrencesSet.size === occurrencesMap.size;
};
