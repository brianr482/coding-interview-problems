/**
 * Leetcode, #669
 * Given a binary search tree and the lowest and highest boundaries as L and R,
 * trim the tree so that all its elements lies in [L, R] (R >= L). You might
 * need to change the root of the tree, so the result should return the new
 * root of the trimmed binary search tree.
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  return trimTree(root, null, L, R)
};

const trimTree = function(node, parent, L, R) {
  if (!node) {
      return;
  }
  let followingP = node;
  if (node.val < L || node.val > R) {
      if (!node.left && !node.right) {
          if (!parent) {
              return null;
          }
          
          updateChild(parent, node, null);
      } else {
          let newN;
          if (node.val < L) {
              node.left = null;
              newN = node.right;
          } else if (node.val > R) {
              node.right = null;
              newN = node.left;
          }
          const ch = !node.left ? node.right : node.left;
          if (!parent) {
              return trimTree(newN, null, L, R);
          } else {
              updateChild(parent, node, ch);
              followingP = parent;
          }
      }
  }
  trimTree(node.right, followingP, L, R);
  trimTree(node.left, followingP, L, R);
  return node;
}

const updateChild = function(parent, oldChild, newChild) {
  if (oldChild.val >= parent.val) {
      parent.right = newChild;
  } else {
      parent.left = newChild;
  }
}
