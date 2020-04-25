/**
 * Leetcode, #34
 * 
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let indices = [-1, -1];
  if (nums.length > 0) {
    indices[0] = binaryFirst(0, nums.length - 1, target, nums);
    indices[1] = binaryLast(0, nums.length - 1, target, nums);
  }
  return indices;
};

function binaryFirst(l,r,value, arr) {
  if (r >= l) {
    const mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === value && (mid === 0 || arr[mid - 1] < value)) {
      return mid;
    } else if (value > arr[mid - 1] || mid === 0) {
      return binaryFirst(mid + 1, r, value, arr);
    } else {
      return binaryFirst(l, mid - 1, value, arr);
    }   
  } else {
    return -1;
  }
}

function binaryLast(l,r,value, arr) {
  if (r >= l) {
    const mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === value && (mid === arr.length - 1 || arr[mid + 1] > value)) {
      return mid;
    }
    else if (value < arr[mid + 1] || mid == arr.length - 1) {
      return binaryLast(l, mid - 1, value, arr);
    } else {
      return binaryLast(mid + 1, r, value, arr);
    }
  } else {
    return -1;
  }
}