/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
	// example data => {data:16,next:{data:16,next:{data:41,next:null}}}
	const newNode = new SinglyLinkedListNode(data, null);
	if (!head) {
		head = newNode;
		return head;
	}
	let current = head;
	while (current.next) {
		current = current.next;
	}

	current.next = newNode;
	return head;
}
