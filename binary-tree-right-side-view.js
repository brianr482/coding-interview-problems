/**
 * Leetcode, #199
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) {
    return [];
  }
  const view = [root.val];
  if (root.right || root.left) {
    bfs(root.right, view, 1);
    bfs(root.left, view, 1);
  }
  return view;
};

/**
 * @param {TreeNode} node
 * @param {number[]} view
 * @param {number} level
 * @return {Void}
 */
function bfs(node, view, level) {
  if (!node) {
      return;
  }
  if (view[level] == null) {
      view[level] = node.val;
  }
  bfs(node.right, view, level + 1);
  bfs(node.left, view, level + 1);
}
