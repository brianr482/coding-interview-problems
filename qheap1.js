/**
 * Hackerrank
 * This question is designed to help you get a better understanding of basic
 * heap operations. You will be given queries of  types:
 * 1. '1 v' - Add an element v to the heap.
 * 2. '2 v' - Delete the element  from the heap.
 * 3. '3' - Print the minimum of all the elements in the heap.
 * NOTE: It is guaranteed that the element to be deleted will be there in the
 * heap. Also, at any instant, only distinct elements will be in the heap.
 * 
 * Constraints:
 * 1. 1 <= Q <= 10^5 - Q (number of queries)
 * 2. -10^9 <= v <= 10^9
 * 3. All the characters in the sequence: {, }, [, ], (, )
 * 
 * This solution got 25 points
 * Problem link: http://hr.gs/eceaeb
 */

 /**
  * 
  * @param {string} input 
  */
function processData(input) {
  const queries = input.split('\n')
    .slice(1)
    .map(query => query.split(' '));

  if (+queries[0][0] !== 1) {
    return;
  }

  const heap = new Heap(+queries[0][1]);
  queries.slice(1).forEach(query => {
    switch(+query[0]) {
      case 1:
        heap.insert(+query[1]);
        break;
      case 2:
        heap.delete(+query[1]);
        break;
      case 3:
        heap.peek();
        break;
    }
  });
}

class Heap {
  constructor(root) {
    this.priorityQueue = [null];
    if (root != null) {
      this.priorityQueue.push(root);
    }
  }

  /**
   * Order the array in order to turn it into a min heap
   */
  heapify() {
    for (let i = Math.floor((this.priorityQueue.length - 1) / 2); i > 0; i--) {
      this.minHeapify(i);
    }
  }

  /**
   * Check if a node meet the Min Heap criteria and perfom several swaps in case it doesn't
   * @param {number} i - Index of the node to be checked 
   */
  minHeapify(i) {
    const leftChild = i * 2;
    const rightChild = i * 2 + 1;

    if (leftChild < this.priorityQueue.length) {
      let lowestI = i;
      if (this.priorityQueue[leftChild] < this.priorityQueue[lowestI]) {
        lowestI = leftChild;
      }

      if (this.priorityQueue[rightChild] < this.priorityQueue[lowestI]) {
        lowestI = rightChild;
      }

      if (lowestI !== i) {
        swap(this.priorityQueue, i, lowestI);
        this.minHeapify(lowestI);
      }
    }
  }

  /**
   * Insert a new value on the heap and validate that queue meet the Min Heap
   * criteria
   * @param {number} val - Value to be inserted in the heap
   */
  insert(val) {
    this.priorityQueue.push(val);
    this.heapify();
  }

  /**
   * Delete the given value from the heap and validate that queue meet the Min Heap
   * criteria
   * @param {number} val - Value to be removed from the heap
   */
  delete(val) {
    const i = this.priorityQueue.indexOf(val);
    if (i > -1) {
      const size = this.priorityQueue.length;
      const lastLeaf = this.priorityQueue.pop();
      if (i < this.priorityQueue.length) {
        this.priorityQueue[i] = lastLeaf;
        this.minHeapify(i);
      }
    }
  }

  /**
   * Print the root of the Min Heap
   */
  peek() {
    if (this.priorityQueue.length > 1) {
      console.log(this.priorityQueue[1]);
    }
  }
}

/**
 * Swap two elements in an given array
 * @param {number[]} arr - Array where changes will be perfomed
 * @param {number} org  - Original index to be swapped
 * @param {number} next - New index to be swapped
 */
function swap(arr, org, next) {
  const prev = arr[org];
  arr[org] = arr[next];
  arr[next] = prev;
}