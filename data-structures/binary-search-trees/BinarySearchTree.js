class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // O(log n) -> Not guaranteed
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currRoot = this.root;
      while (true) {
        if (currRoot.value === val) return undefined;
        if (currRoot.value > val) {
          if (!currRoot.left) {
            currRoot.left = newNode;
            return this;
          }
          currRoot = currRoot.left;
        } else {
          if (!currRoot.right) {
            currRoot.right = newNode;
            return this;
          }
          currRoot = currRoot.right;
        }
      }
    }
  }
  // O(log n) -> Not guaranteed
  contains(val) {
    if (!this.root) return false;
    let currRoot = this.root;
    while (true) {
      if (currRoot.value === val) return true;
      if (currRoot.value > val) {
        if (!currRoot.left) break;
        currRoot = currRoot.left;
      } else {
        if (!currRoot.right) break;
        currRoot = currRoot.right;
      }
    }
    return false;
  }
  // O(n)
  bfs() {
    const queue = [];
    const visited = [];
    let node = this.root;
    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  // O(n)
  dfsPreOrder() {
    const visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
  // O(n)
  dfsPostOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
  // O(n)
  dfsInOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(3);
// tree.root.left.right = new Node(8);
// tree.root.right.left = new Node(12);
// tree.root.right.right = new Node(20);

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(13);

// console.log(tree.contains(51));

console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
console.log(tree);
