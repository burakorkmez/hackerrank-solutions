function printLinkedList(head) {
	// {data:16,next:{data:16,next:null}}
	while (head) {
		console.log(head.data);
		head = head.next;
	}
}
