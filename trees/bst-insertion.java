/**
 * Hackerrank
 * You are given a pointer to the root of a binary search tree and values to be
 * inserted into the tree. Insert the values into their appropriate position in
 * the binary search tree and return the root of the updated binary tree. You
 * just have to complete the function.
 * Constraints:
 * 1. # Of nodes in the tree <= 500 
 * This solution got 20 points
 * Problem link: http://hr.gs/cacecb
 */

/* Node is defined as :
 class Node 
    int data;
    Node left;
    Node right;
*/

public static Node insert(Node root,int data) {
  if (root != null) {
    if (data >= root.data) {
      if (root.right == null) {
        root.right = new Node(data);
      } else {
        insert(root.right, data);
      }
    } else {
      if (root.left == null) {
        root.left = new Node(data);
      } else {
        insert(root.left, data);
      }
    }
  } else {
    root = new Node(data);
  }
  return root;
}