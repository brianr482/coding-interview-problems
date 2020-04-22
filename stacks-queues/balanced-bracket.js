/**
 * Hackerrank
 * A bracket is considered to be any one of the following characters: (, ), {,
 * }, [, or ]. Two brackets are considered to be a matched pair if the an
 * opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket
 * (i.e., ), ], or }) of the exact same type. There are three types of matched
 * pairs of brackets: [], {}, and ().
 * Given  strings of brackets, determine whether each sequence of brackets is
 * balanced. If a string is balanced, return YES. Otherwise, return NO.
 * 
 * Constraints:
 * 1. 0 <= n <= 10000
 * 2. 1 <= |s| <= 10000
 * 3. All the characters in the sequence: {, }, [, ], (, )
 * 
 * This solution got 25 points
 * Problem link: http://hr.gs/babead
 */

/**
 * @param {string} s The string which will be checked
 * @return {string} 'YES' or 'NO'
 */
// Complete the isBalanced function below.
function isBalanced(s) {
  // Edge cases 
  if (s.length === 0 || s.length % 2 === 1) {
    return 'NO';
  }
  const stack = [s.charAt(0)];
  for (const ch of s.slice(1)) {
    if (isClose(ch)) {
      const last = stack.pop();
      if (!isMatched(last, ch)) {
        return 'NO';
      }
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

/**
 * @param {string} ch - Character to be compared with
 * @return {boolean}
 */
function isClose(ch) {
  return /\}|\)|\]/i.test(ch);
}

/**
 * @param {string} bracket - The first operator
 * @param {String} next - The next operator
 * @return {boolean}
 */
function isMatched(bracket, next) {
  switch (bracket) {
    case '(':
      return next === ')';
    case '[':
      return next === ']';
    case '{':
      return next === '}';
    default:
      return false;
  }
}