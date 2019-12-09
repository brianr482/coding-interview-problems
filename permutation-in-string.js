/**
 * Leetcode, #567
 * Given two strings s1 and s2, write a function to return true if s2 contains
 * the permutation of s1. In other words, one of the first string's
 * permutations is the substring of the second string.
 * 
 * Constraints:
 * 1. The input strings only contain lower case letters.
 * 2. The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const regex = new RegExp(`[${s1}]`);
  if (!s1 || !s2) {
    return false;
  }
  if (s1.length > s2.length) {
    return false;
  }
  if (!s2.match(regex)) {
    return false;
  }
  const map = new Map();
  s1.split('').forEach(ch => {        
    map.set(ch, map.has(ch) ? map.get(ch) + 1 : 1);
  });
  const windowMap = new Map();
  let matched = 0;
  let l = 0;
  let r = 0;
  while (r < s2.length && l <= r) {
    let lastLetter = s2.substr(r, 1);
    windowMap.set(lastLetter, windowMap.has(lastLetter) ? windowMap.get(lastLetter) + 1 : 1);
    if (map.has(lastLetter)) {
      if (map.get(lastLetter) === windowMap.get(lastLetter)) {
        matched++;
        if (matched === map.size) {
          return true;
        }
      } else if (windowMap.get(lastLetter) > map.get(lastLetter)) {
        let letter = s2.substr(l, 1);
        windowMap.set(letter, windowMap.get(letter) - 1);
        if (map.has(letter) && map.get(letter) - windowMap.get(letter) === 1) {
          matched--;
        }
        l++;
      }
      r++;
    } else {
      r++;
      l = r;
      matched = 0;
      windowMap.clear();
    }
  }
  return false;
};