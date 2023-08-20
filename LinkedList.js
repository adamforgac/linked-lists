/* eslint-disable no-unreachable-loop */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head; // začíná to od head(začátek)
      while (current.nextNode) { // dokud má aktuální node odkaz na nějaký nextNode, tak loop bude pokračovat
        current = current.nextNode; // aktuální node se přehodí na nextNode
      }
      current.nextNode = newNode; // toto je poslední node a tomu se přiřadí nový node, takže nový node se přidal až na konci
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value, this.head); // udělá new node s danou value a řekne, že další element bude to, co je teď jako první(head)
    this.head = newNode; // zadá nový node jako aktuální head
    this.length++;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.nextNode;
    }
    return result;
  }

  toString() {
    return this.toArray().join(' -> ');
  }

  size() {
    let current = this.head;
    let count = 0;
    if (current) {
      count = 1;

      while (current.nextNode) {
        current = current.nextNode;
        count++;
      }
    }
    return count;
  }

  showHead() {
    const current = this.head;
    if (current) {
      return this.head;
    }
    return 'This list has no items.';
  }

  tail() {
    let current = this.head;

    if (!current) {
      return 'The list is empty.';
    }
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    let count = 0;
    if (index === 0) {
      return current;
    }
    if (current) {
      while (current.nextNode) {
        current = current.nextNode;
        count++;
        if (index === count) {
          return current;
        }
      }
    }
    return 'This index does not exist';
  }

  pop() {
    let current = this.head;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    if (current.value === value) {
      return true;
    }
    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return true;
      }
      return false;
    }
  }

  find(v) {
    let current = this.head;
    let count = 0;
    if (current.value === v) {
      return count;
    }
    while (current.nextNode) {
      current = current.nextNode;
      count++;
      if (current.value === v) {
        return count;
      }
    }
    return null;
  }

  insertAt(position, value) {
    const current = this.at(position);
    const oneBefore = this.at(position - 1);
    const newNode = new Node(value, current);
    oneBefore.nextNode = newNode;
  }

  removeAt(position) {
    const current = this.at(position);
    const oneAfter = this.at(position + 1);
    if (this.head === current) {
      current.nextNode = null;
      this.head = oneAfter;
    } else {
      const oneBefore = this.at(position - 1);
      current.nextNode = null;
      oneBefore.nextNode = oneAfter;
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value || null;
    this.nextNode = next || null;
  }
}

module.exports = LinkedList;
