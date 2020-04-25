/**
 * Hackerrank
 * Markov takes out his Snakes and Ladders game, stares at the board and
 * wonders: "If I can always roll the die to whatever number I want, what would
 * be the least number of rolls to reach the destination?"
 * Rules The game is played with a cubic die of 6 faces numbered 1 to 6.
 * 
 * Constraints:
 * 1. 1 <= t <= 10
 * 2. 2 <= n,m <= 15
 * 3. The board is always 10x10 with squares numbered 1 to 100. 
 * 4. Neither square 1 nor square 100 will be the starting point of a ladder or snake. 
 * 5. A square will have at most one endpoint from either a snake or a ladder.
 * 
 * This solution got 50 points
 * Problem link: http://hr.gs/bbddc
 */

// Complete the quickestWayUp function below.
function quickestWayUp(ladders, snakes) {
  const BOARD_SIZE = 100;
  const MAX_DIE = 6;

  // Build the first state of the graph
  const adjList = new Map();
  for (let i = 1; i <= BOARD_SIZE; i++) {
    let neighbors = BOARD_SIZE - i >= 6 ? 6 : BOARD_SIZE - i;
    adjList.set(
      i,
      new Set(new Array(neighbors).fill(i + 1).map((val, idx) =>  val + idx))
    );
  }

  // Replace ladders vertexes
  ladders.forEach(ladder => {
    adjList.delete(ladder[0]);
    let i = ladder[0] - 1;
    let count = 0;
    while (i > 0 && count < MAX_DIE) {
      const neighbors = adjList.get(i);
      if (neighbors) {
        neighbors.delete(ladder[0]);
        neighbors.add(ladder[1]);
      }
      count++;
      i--;
    }
  });

  // Replace snakes vertexes
  snakes.forEach(snake => {
    adjList.delete(snake[0]);
    let i = snake[0] - 1;
    let count = 0;
    while (i > 0 && count < MAX_DIE) {
      const neighbors = adjList.get(i);
      if (neighbors) {
        neighbors.delete(snake[0]);
        neighbors.add(snake[1]);
      }
      i--;
      count++;
    }
  });

  // BFS
  const queue = new LinkedList(new LinkedListNode(1));
  const distances = new Array(BOARD_SIZE + 1).fill(-1);
  distances[1] = 0;
  while (queue.size > 0) {
    const node = queue.poll().data;
    const neighbors = adjList.get(node);
    neighbors.forEach(neighbor => {
      if (distances[neighbor] === -1) {
        distances[neighbor] = distances[node] + 1;
        queue.insert(new LinkedListNode(neighbor));
      }
    })
  }

  return distances[100];
}

class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(root = null) {
    this.root = root;
    this.rear = root;
    this.size = root ? 1 : 0;
  }

  /**
   * Remove the head/first node of the linked list
   */
  poll() {
    if (this.root) {
      const node = this.root;
      this.root = this.root.next;
      if (this.rear === node) {
        this.rear = null;
      }
      this.size--;
      return node;
    }
  }

  /**
   * Insert a new node into the linked list
   * @param {LinkedListNode} node - Node to be inserted 
   */
  insert(node) {
    if (this.root) {
      this.rear.next = node;
    } else {
      this.root = node;
    }
    this.rear = node;
    this.size++;
  }
}