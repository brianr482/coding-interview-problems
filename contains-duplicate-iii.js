/**
 * Given an array of integers, find out whether there are two distinct indices
 * i and j in the array such that the absolute difference between nums[i] and
 * nums[j] is at most t and the absolute difference between i and j is at most
 * k.
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (!nums || k < 0 || t < 0) {
    return false;
  }
  
  let i = 0;
  let j = 0;
  while (i < nums.length - 1) {
    j = i + 1;
    while (j < nums.length) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true;
      }
      j++;
    }
    i++;
  }
  return false;
}