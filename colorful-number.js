/**
 * InterviewBit
 * For Given Number N find if its COLORFUL number or not
 * 
 * This solution got 60 points
 * Problem link: https://www.interviewbit.com/problems/colorful-number
 */

/**
 * Check if a number is colorful
 * @param {number} A Number to be checked
 */
function colorful(A) {
  const digits = getDigits(A);
  const prods = new Set();
  let chunkSize = 1;
  while (chunkSize <= digits.length) {
      let i = 0;
      while(i + chunkSize <= digits.length) {
          const getProd = digits.slice(i, i + chunkSize)
              .reduce((a, b) => a * b, 1);
          if (prods.has(getProd)) {
              return 0;
          } else {
              prods.add(getProd);
          }
          i++;
      }
      chunkSize++;
  }
  return 1;
}

/**
 * Get digits of a numnber
 * @param {number} n Number to be decomposed 
 */
function getDigits(n) {
  const digits = [];
  while (n > 0) {
      digits.push(n % 10)
      n = parseInt(n / 10);
  }
  return digits;
}