/**
 * Hackerrank
 * Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.
 * designerPdfViewer has the following parameter(s):
 * - h: an array of integers representing the heights of each letter
 * - word: a string
 * 
 * Constraints:
 * 1. 1 <= h[?] <= 7 where ? is an Englisher lowercase letter
 * 2. word contains no more thant 10 letters
 * 
 * This solution got 20 points
 * Problem link: http://hr.gs/vnu
 */

/**
 * @param {number[]} h Height of each letter in [a-z]
 * @param {string} word The word to be evaluated to find the area to be highlighted
 * @return {number} Area to be highlighted
 */
function designerPdfViewer(h, word) {
  // Edge case
  if (!word || word.length === 0) {
    return 0;
  }
  const aCharCode = 'a'.charCodeAt(0);
  let maxHeight = -Infinity;
  for (let i = 0; i < word.length; i++) {
    const height = h[word.charCodeAt(i) % aCharCode];
    if (height > maxHeight) {
      maxHeight = height;
    }
  }
  return maxHeight * word.length;
}