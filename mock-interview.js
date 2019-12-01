function findMissing(arr, arr2) {
  const set = new Set(arr);
  const missingValue = null;
  let i = 0;
  while (i < arr2.length && !missingValue) {
    if (!set.has(arr2[i])) {
      missingValue = arr2[i];
    }
  }
  return missingValue;
}

console.log('findMissing', findMissing([1,3,5], [8,1,5,3]));