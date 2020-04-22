/**
 * Hackerrank
 * You’re given the pointer to the head node of a linked list, an integer to
 * add to the list and the position at which the integer must be inserted.
 * Create a new node with the given integer, insert this node at the desired
 * position and return the head node.
 * 
 * Constraints:
 * 1. 1 <= n <= 1000
 * 2. 1 <= SingleLinkedListNode[i].data <= 1000
 * 3. 0 <= position <= n
 * 
 * This solution got 5 points
 * Problem link: http://hr.gs/vnu
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
 * @param {number} data The new data to be added to the linked list
 * @param {number} position The index position in which the new data will be placed on
 * @return {SinglyLinkedListNode} The root of the linked list
 */
function insertNodeAtPosition(head, data, position) {
  // Edge case
  if (!head) {
    return { data };
  }
  let node = head;
  let found = false;
  let i = 0;
  while (node.next && !found) {
    if (i + 1 === position && node.next) {
      const prev = node.next;
      node.next = { data, next: prev };
      found = true;
    }
    node = node.next;
    i++;
  }
  return head;
}