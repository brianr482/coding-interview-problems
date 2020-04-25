/**
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 * 
 * Note:
 * 1. If there is no such window in S that covers all characters in T, return
 * the empty string "".
 * 2. If there is such window, you are guaranteed that there will always be
 * only one unique minimum window in S.
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  const regex = new RegExp(`[${t}]`, 'g');
  if (!s || !t) {
    return '';
  }
  
  if (t.length > s.length) {
    return '';
  }
  
  if (s == t) {
    return s;
  }
  
  if (t.length === 1 && s.includes(t)) {
    return t;
  }
  
  if (!s.match(regex)) {
    return '';
  }
  
  const tMap = new Map();
  t.split('').forEach(ch => {
    if (!tMap.has(ch)) {
      tMap.set(ch, 0);
    }
    tMap.set(ch, tMap.get(ch) + 1);
  });
  let window = '';
  let l = 0;
  let r = 0;
  let sub = s.substr(l, r + 1);
  let letter = sub.substr(-1);
  const tmpMap = new Map();
  tmpMap.set(letter, 1);
  let matched = 0;
  if (tMap.has(letter) && tmpMap.get(letter) === tMap.get(letter)) {
    matched++;
  }
  while (l < s.length && r < s.length) {
    if (matched === tMap.size) {
        if (!window || sub.length < window.length) {
          window = sub;    
        }
        letter = sub.substr(0, 1);
        l++;
        sub = s.substr(l, r - l + 1);
        tmpMap.set(letter, tmpMap.get(letter) - 1);
        if (tMap.has(letter) && tmpMap.get(letter) < tMap.get(letter)) {
          matched--;
        }
    } else {
      r++;
      sub = s.substr(l, r - l + 1);
      letter = sub.substr(-1);
      if (!tmpMap.has(letter)) {
        tmpMap.set(letter, 0);
      }
      tmpMap.set(letter, tmpMap.get(letter) + 1);
      if (tMap.has(letter) && tmpMap.get(letter) === tMap.get(letter)) {
        matched++;
      }
    }
  }
  return window;
};