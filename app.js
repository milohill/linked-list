function LinkedList() {

}

function Node() {
	let data = '';
	let ptr; // another node
	return {
		data,
		ptr
	}
}

const temp = Node();
temp.adr = '123';

console.log(temp);