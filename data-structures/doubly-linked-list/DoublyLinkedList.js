class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // O(1)
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // O(1)
  pop() {
    if (!this.head) return undefined;
    const currTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currTail.prev;
      this.tail.next = null;
      currTail.prev = null;
    }
    this.length--;
    return currTail;
  }
  // O(1)
  shift() {
    if (this.length === 0) return null;
    const currHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currHead.next;
      this.head.prev = null;
      currHead.next = null;
    }
    this.length--;
    return currHead;
  }
  // O(1)
  unshift(val) {
    if (!val) return;
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const mid = Math.floor(this.length / 2);
    let node;
    if (index <= mid) {
      let counter = 0;
      node = this.head;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      node = this.tail;
      while (counter !== index) {
        console.log(counter);
        node = node.prev;
        counter--;
      }
    }
    return node;
  }
  // O(n)
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }
  // O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  // O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
dll.push(50);
dll.push(60);
dll.push(70);

// dll.pop();
// dll.pop();

// dll.shift();
// dll.shift();
// dll.shift();

// dll.unshift(5);

// console.log(dll.get(5));
// dll.set(5, 100);

// dll.insert(0, 200);

dll.remove(2);

console.log(dll);

// const first = new Node(10);
// first.next = new Node(20);
// first.next.prev = first;

// console.log(first);
