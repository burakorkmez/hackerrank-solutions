function kangaroo(x1, v1, x2, v2) {
	const max = 10000;
	let match = false;
	for (let i = 0; i <= max; i++) {
		x1 = x1 + v1;
		x2 = x2 + v2;
		if (x1 == x2) {
			match = true;
			break;
		}
	}
	return match ? 'YES' : 'NO';
}
