class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // O(n)
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  // O(1)
  push(val) {
    if (!val) return;
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // O(n)
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.value;
  }
  // O(1)
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // O(1)
  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  // O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // O(n)
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }
  // O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    } else if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }
  // O(n)
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prev = this.get(index - 1);
      let removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
  }
  // O(n)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const ll = new SinglyLinkedList();
ll.push(10);
ll.push(20);
ll.push(30);
ll.unshift(5);

// console.log(ll.get(3));
// console.log(ll.set(2, 1000));
// console.log(ll.insert(2, 5000));

// ll.shift();
// ll.shift();
// ll.shift();
// ll.pop();
// ll.pop();
// ll.pop();
ll.reverse();
console.log(ll);
