/**
 * Leetcode, #594
 * 
 * We define a harmounious array as an array where the difference between its
 * maximum value and its minimum value is exactly 1.
 * 
 * Now, given an integer array, you need to find the length of its longest
 * harmonious subsequence among all its possible subsequences.
 * 
 * Constraints:
 * 1. The length of the input array will not exceed 20,000.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
  let longest = 0;
  if (nums.length > 1) {
    const map = new Map();
    nums.forEach(number => {
      const cValue = map.has(number) ? map.get(number) + 1 : 1;
      map.set(number, cValue);
      if (map.has(number + 1)) {
        longest = Math.max(longest, cValue + map.get(number + 1));    
      }
      if (map.has(number - 1)) {
        longest = Math.max(longest, cValue + map.get(number - 1));    
      }
    });
  }
  return longest;
};