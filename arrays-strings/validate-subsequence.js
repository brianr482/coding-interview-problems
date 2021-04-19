/**
 * AlgoExpert
 * 
 * Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a subsequence of the first one.
 * 
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent
 * in the array but that are in the same order as they appear in the array. For
 * instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4],
 * and so do the numbers [2, 4]. Note that a single number in an array and the
 * array itself are both valid subsequences of the array.
 */

/**
 * @param {number[]} array 
 * @param {number[]} sequence 
 * @returns {boolean}
 */
function isValidSubsequence(array, sequence) {
  // Time: O(n), Space: O(1)
	let seqIdx = 0;
	let i = 0;
	
	while(i < array.length && seqIdx < sequence.length) {
		const arrElement = array[i];
		const seqElement = sequence[seqIdx];
		
		if (arrElement === seqElement) {
			seqIdx++;
		}
		
		i++;
	}
	
	return seqIdx === sequence.length;
}
