/**
 * LeetCode | #1768 | Easy
 * 
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating
 * order, starting with word1. If a string is longer than the other, append the additional
 * letters onto the end of the merged string.
 * Return the merged string.
 * 
 * Constraints:
 * 1. 1 <= word1.length, word2.length <= 100
 * 2. word1 and word2 consist of lowercase English letters
 * 
 */

/**
 * Time complexity: O(n) - Space complexity: O(1)
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 function mergeAlternately(word1, word2) {
    let mergedString = '';
    let i = 0;

    while (i < word1.length && i < word2.length) {
      mergedString += `${word1[i]}${word2[i]}`;
      i++;
    }

    if (word1.length > word2.length) {
      mergedString += word1.substring(i);
    } else if (word2.length > word1.length) {
      mergedString += word2.substring(i);
    }

    return mergedString;
 };
