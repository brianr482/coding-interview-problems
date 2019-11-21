function findMinimumDiff(arr, remaining, accrued, size, maxSize) {
  if (size + 1 <= maxSize) {
    remaining.forEach((n, index) => {
      const cloneArr = remaining.slice();
      cloneArr.splice(index, 1);
                findMinimumDiff([...arr, n], cloneArr, accrued + n, size + 1, maxSize);
    });
  }
    if (arr.length > 0) {
      console.log('A', arr);
      console.log('b', remaining);
      min = Math.min(Math.abs(accrued - remaining.reduce((a, b) => a + b, 0)), min);
    }
  }
  var min = Infinity;
  findMinimumDiff([], A, 0, 1, A.length - 1);
  console.log('r/', min);
  return min;
}
