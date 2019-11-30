/**
 * A left rotation operation on an array shifts each of the array's elements
 * unit to the left. For example, if  left rotations are performed on array
 * [1,2,3,4,5], then the array would become [3,4,5,1,2].
 * Given an array a of n integers and a number, d, perform d left rotations on
 * the array. Return the updated array to be printed as a single line of
 * space-separated integers.
 * 
 * Constraints
 * 1. 1 <= n <= 10^5
 * 2. 1 <= d <= n
 * 3. 1 <= a[i] <= 10^6
 */

function rotLeft(a, d) {
  const n = a.length;

  if (n === 1) {
    return a;
  }

  if (n - d === 0) {
    return a;
  }

  if (d > n) {
    d = d % n;
  }

  const res = a.slice();
  for (let i = 0; i < n; i++) {
    let newI = d <= i ? i - d : n - (d - i);
    res[newI] = a[i];
  }

  return res;
}