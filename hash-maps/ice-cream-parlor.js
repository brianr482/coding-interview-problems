/**
 * Hackerrank
 * Sunny and Johnny like to pool their money and go to the ice cream parlor.
 * Johnny never buys the same flavor that Sunny does. The only other rule they
 * have is that they spend all of their money.
 * Given a list of prices for the flavors of ice cream, select the two that
 * will cost all of the money they have.
 * 
 * Constraints:
 * 1. 2 <= m <= 10^4 (The integer m, the amount of money they have pooled)
 * 2. 2 <= n <= 10^4 (The integer n, the number of flavors offered at the time)
 * 3. 1 <= cost[i] <= 10^4, i ∈ [1, n]
 * 
 * This solution got 30 points
 * Problem link: http://hr.gs/eez
 */

 // Complete the icecreamParlor function below.
 /**
  * 
  * @param {number} m The total amount of money pooled
  * @param {number[]} arr The list of ice creams with their price
  */
function icecreamParlor(m, arr) {
  const icecreamIdx = new Map();
  // Store the original indices
  arr.forEach((n, i) => {
    if (icecreamIdx.has(n)) {
      icecreamIdx.get(n).push(i + 1);
    } else {
      icecreamIdx.set(n, [i + 1]);
    }
  });
  // Sort array in order to use binary search
  arr.sort((a, b) => a - b);
  let i = 0;
  let price = arr[0];
  while (i < arr.length && price < m) {
    const slicedArray = arr.slice(i);
    // Use binary search to look for a value that meet the criteria
    const complementIndex = binarySearch(
      m - price, 0, slicedArray.length - 1, slicedArray
    );
    if (complementIndex != null) {
      // Sort and return the response
      return [
        icecreamIdx.get(price).pop(),
        icecreamIdx.get(slicedArray[complementIndex]).pop()
      ].sort((a, b) => a - b);
    }
    i++;
    price = arr[i];
  }
  return [];
}

/**
 * Look for an element in array by binary search
 * @param {numner} val The value to look for
 * @param {number} l Left limit
 * @param {number} r Right limit
 * @param {number[]} arr The array where the search will be executed 
 */
function binarySearch(val, l, r, arr) {
  if (l > r) {
    return null;
  }
  const mid = l + Math.floor((r - l) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if(arr[mid] > val) {
    return binarySearch(val, l, mid - 1, arr);
  } else {
    return binarySearch(val, mid + 1, r, arr);
  }
}