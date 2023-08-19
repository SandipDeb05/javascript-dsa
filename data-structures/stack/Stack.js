class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // O(1)
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currFirst = this.first;
      this.first = newNode;
      this.first.next = currFirst;
    }
    return ++this.size;
  }
  // O(1)
  pop() {
    if (!this.first) return null;
    const currFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = currFirst.next;
    currFirst.next = null;
    --this.size;
    return currFirst.value;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
// stack.pop();

console.log(stack);
