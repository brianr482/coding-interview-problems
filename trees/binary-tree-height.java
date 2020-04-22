/**
 * Hackerrank
 * The height of a binary tree is the number of edges between the tree's root
 * and its furthest leaf. Complete the getHeight or height function in the
 * editor. It must return the height of a binary tree as an integer.
 * Constraints:
 * 1. 1 <= node.data[i] <= 20
 * 2. 1 <= n <= 20
 * This solution got 10 points
 * Problem link: http://hr.gs/aeacfd
 */

/*
  class Node 
    int data;
    Node left;
    Node right;
*/
public static int height(Node root) {
  return dfs(root, 0);
}

public static int dfs(Node node, int height) {
  if (node.left == null && node.right == null) {
    return height;
  }
  int leftHeight = height;
  int rightHeight = height;
  if (node.left != null) {
    leftHeight = dfs(node.left, height + 1);
  }
  if (node.right != null) {
    rightHeight = dfs(node.right, height + 1);
  }
  return Math.max(leftHeight, rightHeight);
}