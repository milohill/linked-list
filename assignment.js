function LinkedList() {
	let list = [];

	// initialize the root node
	const rootNode = Node();
	rootNode.data = 'ROOT';
	list.push(rootNode);

	const append = (value) => {
		const newNode = Node();
		newNode.data = value;
		list.at(-1).ptr = newNode; // the last node in the list
		list.push(newNode);
	}

	const prepend = (value) => {
		const newNode = Node();
		newNode.data = value;
		newNode.ptr = list.at(0); // the first node in the list
		list.unshift(newNode);
	}

	const size = () => {
		return list.length;
	}

	const head = () => {
		return list.at(0);
	}

	const tail = () => {
		return list.at(-1);
	}

	const at = (index) => {
		return list.at(index);
	}

	const pop = () => {
		list.pop();
	}

	const contains = (value) => {
		return list.some(el => el.data === value);
	}

	const find = (value) => {
		for (idx in list) {
			if (list[idx].data === value) {
				return idx;
			}
		}
		return null;
	}

	const toString = () => {
		let str = '';
		list.forEach(el => {
			const temp = `( ${el.data} ) -> `;
			str += temp;
		})
		str += 'null';
		return str;
	}

	const insertAt = (value, index) => {
		if (index > list.length) return;
		const newNode = Node();
		newNode.data = value;
		newNode.ptr = list[index];
		list[index - 1].ptr = newNode;
		const result = list.slice(0, index).concat(newNode).concat(list.slice(index));
		list = result;
	}

	const removeAt = (index) => {
		if (index > list.length - 1) return;
		list[index - 1].ptr = list[index].ptr;
		const result = list.slice(0, index).concat(list.slice(index + 1));
		list = result;
	}

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
		removeAt
	}
}

function Node() {
	let data = null;
	let ptr = null; // another node
	return {
		data,
		ptr
	}
}