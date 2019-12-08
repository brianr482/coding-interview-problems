/**
 * Leetcode, 589
 * Given an n-ary tree, return the preorder traversal of its nodes' values.
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value (See examples).
 * 
 * Follow up:
 * Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
function preorder(root) {
  const preOrder = [];
  if (root) {
    const stack = [root];
    let node;
    while (stack.length > 0) {
      node = stack.pop();
      preOrder.push(node.val);
      stack.push(...node.children.reverse());
    }
  }
  return preOrder;
};