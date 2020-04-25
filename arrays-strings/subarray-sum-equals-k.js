/**
 * Given an array of integers and an integer k, you need to find the total
 * number of continuous subarrays whose sum equals to k.
 * 
 * Constraints:
 * 1. The length of the array is in range [1, 20,000].
 * 2. The range of numbers in the array is [-1000, 1000] and the range of the
 * integer k is [-1e7, 1e7].
 */


 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
  let result = 0;
  const n = nums.length;
  nums.forEach((num, index) => {
      if (num === k) {
          result++;
      }
      let j = index + 1;
      let accrued = num;
      while (j < n) {
          accrued += nums[j];
          if (accrued === k) {
              result++;
          }
          j++;
      }
  });
  return result;
};