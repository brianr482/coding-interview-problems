/**
 * AlgoExpert
 * Non-Constructible Change
 * 
 * Given an array of positive integers representing the values of coins in your
 * possession, write a function that returns the minimum amount of change (the
 * minimum sum of money) that you cannot create. The given coins can have any
 * positive integer value and aren't necessarily unique (i.e., you can have
 * multiple coins of the same value).
 * 
 * For example, if you're given coins = [1, 2, 5], the minimum amount of change
 * that you can't create is 4. If you're given no coins, the minimum amount of 
 * change that you can't create is 1.
 */

/**
 * @param {number[]} coins 
 * @returns {number}
 */
function nonConstructibleChange(coins) {
	// O(nlogn) Time - Sorting algorithm | O(1) Space
	let currentMaxChanges = 0;
	coins.sort((a, b) => a - b);
	
	for (const coin of coins) {
		const newPossibleChange = currentMaxChanges + 1;
		if (coin > newPossibleChange) {
			return newPossibleChange;
		}
		
		currentMaxChanges += coin;
	}
	
  return currentMaxChanges + 1;
}