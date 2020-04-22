/**
 * Hackerrank
 * A queue is an abstract data type that maintains the order in which elements
 * were added to it, allowing the oldest elements to be removed from the front
 * and new elements to be added to the rear. This is called a First-In-First-Out
 * (FIFO) data structure because the first element added to the queue (i.e., the
 * one that has been waiting the longest) is always the first one to be removed.
 * 
 * In this challenge, you must first implement a queue using two stacks. Then
 * process q queries, where each query is one of the following  types:
 * 
 * 1 x: Enqueue element x into the end of the queue.
 * 2: Dequeue the element at the front of the queue.
 * 3: Print the element at the front of the queue.
 * 
 * Constraints:
 * 1. 1 <= q <= 10^5
 * 2. 1 <= type <= 3
 * 3. 1 <= |x| <= 10^9
 * 
 * This solution got 25 points
 * Problem link: http://hr.gs/acbfeb
 */
class Queue {
  constructor() {
    this.principalStack = [];
    this.auxStack = [];
  }

  /**
   * Fill the auxiliar stack which is contains
   * a reversed list of the main stack elements
   */
  fillAux() {
    if (this.auxStack.length === 0) {
      while(this.principalStack.length > 0) {
        this.auxStack.push(this.principalStack.pop())
      }
    }
  }
  
  /**
   * Insert a new element in the rear of the queue
   */
  enqueue(value) {
    this.principalStack.push(value);
  }

  /**
   * Remove the head element of the queue
   */
  dequeue() {
    this.fillAux();
    this.auxStack.pop();
  }

  /**
   * Print the rear element of the queue
   */
  printRear() {
    this.fillAux();
    const head = this.auxStack.pop();
    console.log(head);
    this.auxStack.push(head)
  }
}
/**
 * 
 * @param {string} input - Queries to bo processed  
 */
function processData(input) {
  const ACTIONS = {
    ENQEUE: '1',
    DEQUEUE: '2',
    PRINT: '3'
  };
  const queue = new Queue();
  input.split('\n').forEach(line => {
    const query = line.split(' ');
    switch (query[0]) {
      case ACTIONS.ENQEUE:
        queue.enqueue(query[1]);
        break;
      case ACTIONS.DEQUEUE:
        queue.dequeue();
        break;
      case ACTIONS.PRINT:
        queue.printRear();
        break;
    }
  })
}