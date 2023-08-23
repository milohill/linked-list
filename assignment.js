function Node() {
  return {
    data: null,
    ptr: null,
  };
}

function LinkedList() {
  // initialize the head node
  const headNode = Node();
  headNode.data = 'HEAD';
  headNode.ptr = null;
  // ( HEAD ) -> null

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
    headNode.ptr = newNode;

    newNode.ptr = headNode.ptr;
    newNode.data = value;
  };
  // (HEAD) -> (new node) -> (a node pointed by HEAD previously) -> ...

  const size = () => {
    let count = 0;
    let currentNode = headNode;
    while (currentNode.ptr !== null) {
      currentNode = currentNode.ptr;
      count += 1;
    }
    return count;
  };

  const head = () => headNode.ptr;

  const tail = () => {
    let currentNode = headNode;
    while (currentNode.ptr !== null) { // algorithm to find the last node
      currentNode = currentNode.ptr;
    }
    return currentNode;
  };

  const at = (index) => {
    if (index >= size()) return;
    let num = -1; // starts from the head node
    let targetNode = headNode;

    while (!(num >= index)) {
      targetNode = targetNode.ptr;
      num++;
    }
    return targetNode;
  };

  const pop = () => {
    if (size() <= 0) return;
    let targetNode = headNode;
    while (targetNode.ptr.ptr !== null) { // find the node that points the last node
      targetNode = targetNode.ptr;
    }
    targetNode.ptr = null;
  };

  const contains = (value) => {
    let targetNode = headNode;
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
    let targetNode = headNode;
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
    let targetNode = headNode;
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
