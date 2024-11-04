/**
 * LeetCode | #104 | Easy
 * 
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 * 
 * Constraints:
 * 1. The number of nodes in the tree is in the range [0, 10^4].
 * 2. -100 <= Node.val <= 100
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 * 
 * @param {TreeNode} root
 * @return {number}
 * 
 * Time complexity: O(n)
 */
const maxDepth = function(root) {
  const calcDepth = (root, n) => {
    if (!root) {
      return n;
    }

    return Math.max(calcDepth(root.left, n + 1), calcDepth(root.right, n + 1));
  }

  return calcDepth(root, 0);
};