function drawingBook(n, p) {
	// n = 6 p = 5
	const frontFlip = Math.floor(p / 2);
	const backFlip = Math.floor(n / 2 - frontFlip);
	const result = Math.min(frontFlip, backFlip);

	return result;
}
