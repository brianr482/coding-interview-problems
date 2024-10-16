/**
 * LeetCode | #300 | Medium
 * 
 * Given an integer array nums, return the length of the longest strictly increasing 
 * subsequence.
 * 
 * Constraints:
 * 1. 1 <= nums.length <= 2500
 * 2. -104 <= nums[i] <= 104
 * 
 */

/**
 * Time complexity: O(n^2) - Space complexity: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  const memo = [];

  for (let i = 0; i < nums.length; i++) {
    let longestSubSeq = 1;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && memo[j] + 1 > longestSubSeq) {
        longestSubSeq = memo[j] + 1;
      }
    }

    memo[i] = longestSubSeq;
  }

  return Math.max(...memo);
}
