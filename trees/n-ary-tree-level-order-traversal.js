/**
 * Leetcode, #429
 * 
 * Given an n-ary tree, return the level order traversal of its nodes' values.
 * 
 * Constraints:
 * 1. The height of the n-ary tree is less than or equal to 1000
 * 2. The total number of nodes is between [0, 10^4]
 */

 /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
  levels = [];
  if (root) {
      bfs(root, 0, levels)
  }
  return levels;
};

/**
 * 
 * @param {TreeNode} node 
 * @param {number} level 
 * @param {number[][]} levels 
 */
function bfs(node, level, levels) {
  if (!levels[level]) {
      levels[level] = [node.val];
  } else {
      levels[level].push(node.val);
  }
  node.children.forEach(child => {
      bfs(child, level + 1, levels);
  });
}