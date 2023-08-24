function Node() {
  return {
    data: null,
    ptr: null,
  };
}

function LinkedList() {
  // initialize the head dummy node
  const headDummyNode = Node();
  headDummyNode.data = 'head dummy node';
  headDummyNode.ptr = null;
  // ( head dummy node ) -> null

  const append = (value) => {
    const tailNode = tail(); // the last node
    const newNode = Node();
    tailNode.ptr = newNode;

    newNode.ptr = null;
    newNode.data = value;
  };
  // (old tail node) -> (new tail node) -> null

  const prepend = (value) => {
    const newNode = Node();
    newNode.ptr = headDummyNode.ptr;
    newNode.data = value;

    headDummyNode.ptr = newNode;
  };
  // (head dummy node) -> (new node) -> (a node pointed by the head dummy node previously) -> ...

  const size = () => {
    let count = 0;
    let currentNode = headDummyNode;
    while (currentNode.ptr !== null) {
      currentNode = currentNode.ptr;
      count += 1;
    }
    return count;
  };

  const head = () => headDummyNode.ptr;
  // get the first node

  const tail = () => {
    let currentNode = headDummyNode;
    while (currentNode.ptr !== null) { // algorithm to find the last node
      currentNode = currentNode.ptr;
    }
    return currentNode;
  };

  const at = (index) => {
    if (index >= size()) return;
    // if the index required exceeds the maximum index possible, then return.

    let num = -1; // starts from the head node
    let currentNode = headDummyNode;

    while (num < index) {
      currentNode = currentNode.ptr;
      num += 1;
    }

    return currentNode;
  };

  const pop = () => {
    if (size() <= 0) return;
    // if the list is empty then no node to pop.
    let currentNode = headDummyNode;
    while (currentNode.ptr.ptr !== null) { // find the node that points the last node
      currentNode = currentNode.ptr;
    }
    currentNode.ptr = null;
    // since JS is garbage collected no need to worry about deleting the last node.
  };

  const contains = (value) => {
    let currentNode = headDummyNode;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.ptr;
    }
    return false;
  };

  const find = (value) => {
    let count = -1; // starts from the head dummy node
    let currentNode = headDummyNode;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return count;
      }
      currentNode = currentNode.ptr;
      count += 1;
    }
    return null;
  };

  const toString = () => {
    let str = '';
    let currentNode = headDummyNode;
    while (currentNode.ptr !== null) {
      str += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.ptr;
    }
    str += `( ${currentNode.data} ) -> null`;
    return str;
  };

  const insertAt = (value, index) => {
    const nodeOne = at(index - 1);
    const nodeTwo = at(index);
    const newNode = Node();
    nodeOne.ptr = newNode;
    newNode.ptr = nodeTwo;
    newNode.data = value;
  };

  const removeAt = (index) => {
    const nodeOne = at(index - 1);
    const nodeTwo = at(index);
    nodeOne.ptr = nodeTwo.ptr;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
