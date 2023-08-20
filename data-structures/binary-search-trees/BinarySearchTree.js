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
tree.insert(20);
tree.insert(30);
tree.insert(25);
tree.insert(25);
tree.insert(26);
tree.insert(5);

console.log(tree.contains(51));

console.log(tree);
