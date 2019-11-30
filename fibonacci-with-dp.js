/**
 * This is the solution of Fibonnaci using DP
*/

/**
 * 
 * @param {number} n 
 * @param {number[]} dp 
 * @return {number}
 */
function fibonacciDp(n) {
  if (n === 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  dp = [0, 1];
  let total = 0;
  for (let i = 2; i < n; i++) {
    total += dp[i - 1] + dp[i - 2];
    dp.push(total);
  }
  return total;
} 