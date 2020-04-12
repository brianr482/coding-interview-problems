
/**
 * Facebook, prep: Question 1 - 2D Spiral array
 * Find the pattern and complete the function: 
 * int[][] spiral(int n);
 * where n is the size of the 2D array.
*/
/**
 * @param {number} n Size of the array
 * @return {number[][]} Array populated in spiral way
 */
const spiral = n => {
  // Check edge case
  if (n <= 0) {
    return [];
  }
  
  // 0 horizontally, 1 vertically
  let axis = 0;
  // 0 right/down, 1 left/up
  let dir = 0
  const area = n * n;
  let i = 0;
  let j = 0;
  let counter = 1;
  const arr = Array(n).fill().map(() => Array(n).fill());
  arr[i][j] = counter;
  counter++;
  bounds = [0, n - 1];
  // O(n^2) because the area is n * n and we loop the entire area
  while (counter <= area) {
    // Move in the current axis according to the current direction
    if (axis === 0) {
      j = dir === 0 ? j + 1 : j - 1;
    } else {
      i = dir === 0 ? i + 1 : i - 1;
    }
    /* 
     * Check if the loop returned to the start.
     * In that case, narrow the boundaries
    */
    if (arr[i][j]) {
     bounds[0]++;
     bounds[1]--;
     i = bounds[0];
     j = bounds[0];
     arr[i][j] = counter;
     axis = 0;
     dir = 0;
    } else {
      arr[i][j] = counter;
      /* 
       * Check if the loop is at the limit of Y axis.
       * In that case, switch the direction and the axis
      */
      if ((i === bounds[1] || i === bounds[0]) && axis === 1) {
        axis = 0;
        dir = i === 0 ? 0 : 1;
       
      /* 
       * Check if the loop is at the limit of X axis.
       * In that case, switch the axis
      */
      } else if ((j === bounds[1] || j === bounds[0]) && axis === 0) {
        axis = 1;
      }
    }
    counter++;
  }
  return arr;
};

const n = 4;
const a = spiral(n);
for (row of a) {
  console.log(
    row.map(el =>
      el <= 9 ? `${'0'.repeat((n * n + '').length - 1)}${el}` : el.toString()
    )
  );
}