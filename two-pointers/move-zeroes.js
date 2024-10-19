/**
 * LeetCode | #283 | Easy
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the
 * relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * Constraints:
 * 1. 1 <= nums.length <= 10^4
 * 2. -2^31 <= nums[i] <= 2^31 - 1
 * 
 */

/**
 * Time complexity: O(n) - Space complexity: O(1)
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  if (nums.length < 2) {
    return;
  }

  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[i] !== 0) {
      i++;

      if (j <= i) {
        j++;
      }
    } else if (nums[j] !== 0) {
      nums[i] = nums[j];
      nums[j] = 0;
    } else {
      j++;
    }
  }
}
