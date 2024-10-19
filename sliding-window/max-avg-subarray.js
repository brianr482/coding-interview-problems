/**
 * LeetCode | #643 | Easy
 * 
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
 * Any answer with a calculation error less than 10-5 will be accepted.
 * 
 * Constraints:
 * 1. n == nums.length
 * 2. 1 <= k <= n <= 10^5
 * 3. -10^4 <= nums[i] <= 10^4
 * 
 */

/**
 * Time complexity: O(n) - Space complexity: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let maxAvg;
  let subarraySum = 0;
  for (let i = 0; i < k; i++) {
    subarraySum += nums[i];
  }
  maxAvg = subarraySum / k;

  for (let i = 1; i + k <= nums.length; i++) {
    subarraySum += nums[i - 1] * -1 + nums[i + k - 1];
    const subarrayAvg = subarraySum / k;

    if (subarrayAvg > maxAvg) {
      maxAvg = subarrayAvg;
    }
  }

  return maxAvg;
};

