/**
 * Given an array of integers, return indices of the two numbers such that
 * they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let i = 0;
  const indices = [-1, -1];
  while (nums[indices[0]] + nums[indices[1]] !== target && i < nums.length) {
      const currentVal = nums[i];
      indices[0] = i;
      let done = false;
      const filteredNums = nums.slice();
      filteredNums.splice(i, 1);
      let j = 0;
      while(!done && j < filteredNums.length) {
          if (currentVal + filteredNums[j] === target) {
              indices[1] = j >= i ? j + 1 : j;
              done = true;
          } else {
              j++;    
          }
      }
      i++;
  }
  return indices;
};