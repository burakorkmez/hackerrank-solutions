/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
	const newNode = new SinglyLinkedListNode(data, null);
	if (!head) {
		head = newNode;
		return head;
	}

	newNode.next = head;
	return newNode;
}
