/**
 * Given an n-ary tree, return the postorder traversal of its nodes' values.
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
function postOrder(root) {
  const postOrder = [];
  if (root) {
    let node = root;
    const stack = [node];
    while (stack.length > 0) {
      node = stack.pop();
      postOrder.push(node.val);
      if (node.children.length > 0) {
        stack.push(...node.children);
      }
    }
    postOrder.reverse();
  } 
  return postOrder;
};