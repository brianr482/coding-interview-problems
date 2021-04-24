/**
 * AlgoExpert
 * 
 * Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. The function should find all triplets in
 * the array that sum up to the target sum and return a two-dimensional array of
 * all these triplets. The numbers in each triplet should be ordered in ascending
 * order, and the triplets themselves should be ordered in ascending order with
 * respect to the numbers they hold.
 * 
 * If no three numbers sum up to the target sum, the function should return an
 * empty array.
 */

/**
 * @param {number[]} array 
 * @param {number} targetSum 
 * @returns {array[][]}
 */
function threeNumberSum(array, targetSum) {
  // O(n^2) time | O(n) space

  // Edge case
  if (array.length < 3) {
		return [];
	}
	
	const triplets = [];
	array.sort((a, b) => a - b);
	
	const arrayLength = array.length;
	let i = 0;
	let l, r;
	while (i < arrayLength - 2) {
		const currentElement = array[i];
		l = i + 1;
		r = arrayLength - 1;
		
		while (l < r) {
			const leftElement = array[l];
			const rightElement = array[r];
			const total = currentElement + leftElement + rightElement;
			if (total === targetSum) {
				triplets.push([currentElement, leftElement, rightElement]);
				l++;
				r--;
			} else if (total > targetSum) {
				r--;
			} else {
				l++;
			}
		}

		i++;
	}
	
	return triplets;
}