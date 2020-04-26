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
  const dp = [0, 1];
  if (n < 2) {
    return dp[n + 1];
  }

  if (n === 1) {
    return 1
  }
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
} 