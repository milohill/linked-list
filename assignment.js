function Node() {
  return {
    data: null,
    ptr: null,
  };
}

function LinkedList() {
  // initialize the head dummy node
  const headDummyNode = Node();
  headDummyNode.data = null;
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

    while (num <= index) {
      currentNode = currentNode.ptr;
      num += 1;
    }

    return currentNode;
  };

  const pop = () => {
    if (size() <= 0) return;
    let targetNode = headDummyNode;
    while (targetNode.ptr.ptr !== null) { // find the node that points the last node
      targetNode = targetNode.ptr;
    }
    targetNode.ptr = null;
  };

  const contains = (value) => {
    let targetNode = headDummyNode;
    while (targetNode !== null) {
      if (targetNode.data === value) {
        return true;
      }
      targetNode = targetNode.ptr;
    }
    return false;
  };

  const find = (value) => {
    let len = -1; // starts from the head node
    let targetNode = headDummyNode;
    while (targetNode !== null) {
      if (targetNode.data === value) {
        return len;
      }
      targetNode = targetNode.ptr;
      len++;
    }
    return null;
  };

  const toString = () => {
    let str = '';
    let targetNode = headDummyNode;
    while (targetNode !== null) {
      str += `( ${targetNode.data} ) -> `;
      targetNode = targetNode.ptr;
    }
    str += 'null';
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
    insertAt,
    removeAt,
    toString,
  };
}
