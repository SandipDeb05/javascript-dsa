class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
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
  pop() {
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
  shift() {
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
  unshift(val) {
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
  get(index) {
    if (index < 0 || index >= this.length) return false;
    let mid = Math.floor(this.length / 2);
    if (index <= mid) {
      let currHead = this.head;
      let counter = 0;
      while (counter !== index) {
        currHead = currHead.next;
        counter++;
      }
      return currHead;
    } else {
      let currTail = this.tail;
      let counter = this.length - 1;
      while (counter !== index) {
        currTail = currTail.prev;
        counter--;
      }
      return currTail;
    }
  }
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }
}

const dll = new DoublyLinkedList();

dll.push(10);
dll.push(20);
dll.push(30);
// dll.pop();
// dll.pop();
// dll.shift();
dll.unshift(100);

console.log(dll.set(2, 1000));
console.log(dll);
