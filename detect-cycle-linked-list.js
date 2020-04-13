/**
 * Hackerrank
 *  A linked list is said to contain a cycle if any node is visited more than
 * once while traversing the list. Complete the function provided for you in
 * your editor. It has one parameter: a pointer to a Node object named  that
 * points to the head of a linked list. Your function must return a boolean
 * denoting whether or not there is a cycle in the list. If there is a cycle,
 * return true; otherwise, return false.
 * 
 * Constraints:
 * 1. 0 <= list size <= 1000
 * 
 * This solution got 5 points
 * Problem link: http://hr.gs/ffddcc
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

/**
 * @param {SinglyLinkedListNode} head The root of the linked list
 * @return {boolean} If there's a cycle in the linked list
 */
function hasCycle(head) {
  // Edge case
  if (!head) {
    return false;
  }
  const visited = new Set();
  let node = head;
  while (node) {
    if (visited.has(node)) {
      return true;
    } else {
      visited.add(node);
    }
    node = node.next;
  }
  return false;
}