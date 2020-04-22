/**
 * Hackerrank
 * Consider an undirected graph where each edge is the same weight. Each of the
 * nodes is labeled consecutively. You will be given a number of queries. For
 * each query, you will be given a list of edges describing an undirected graph.
 * After you create a representation of the graph, you must determine and report
 * the shortest distance to each of the other nodes from a given starting
 * position using the breadth-first search algorithm (BFS). Distances are to be
 * reported in node number order, ascending. If a node is unreachable, print -1
 * for that node. Each of the edges weighs 6 units of distance.
 * 
 * Constraints:
 * 1. 1 <= Q <= 10
 * 2. 2 <= n <= 1000
 * 3. 1 <= m <= (n*(n-1)) / 2
 * 4. 1 <= u,v,s <= n
 * 
 * This solution got 55 points
 * Problem link: http://hr.gs/fdaaad
 */

// Complete the bfs function below.
function bfs(n, m, edges, s) {
  const EDGE_WEIGHT = 6;
  const graph = buildGraph(edges);
  const start = graph.get(s);
  const distances = Array(n).fill(-1);

  /* Edge case - Start node is not connected to any other node.
   * In that case, not perfom the BFS
   */
  if (start) {
    const queue = new LinkedList(new LinkedListNode(start));
    distances[start.id - 1] = 0;
    while (queue.size > 0) {
      const node = queue.poll().data;
      node.neighbors.forEach(neighbor => {
        if (distances[neighbor.id - 1] === -1) {
          distances[neighbor.id - 1] = distances[node.id - 1] + EDGE_WEIGHT;
          queue.insert(new LinkedListNode(neighbor));
        }
      });
    }
  }

  distances.splice(s - 1, 1);
  return distances;
}

/**
 * Build the graph based on the edges array representation
 * @param {number[][]} edges - Array of graph edges
 */
function buildGraph(edges) {
  const graph = new Map();
  edges.forEach(edge => {
    const firstNodeId = edge[0];
    const secondNodeId = edge[1];

    let firstNode;
    if (!graph.has(firstNodeId)) {
      firstNode = new Node(firstNodeId);
      graph.set(firstNodeId, firstNode);
    } else {
      firstNode = graph.get(firstNodeId);
    }

    let secondNode;
    if (!graph.has(secondNodeId)) {
      secondNode = new Node(secondNodeId);
      graph.set(secondNodeId, secondNode);
    } else {
      secondNode = graph.get(secondNodeId);
    }

    firstNode.neighbors.add(secondNode);
    secondNode.neighbors.add(firstNode);
  }); 
  return graph;
}

class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = new Set();
  }
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