function hurdleRace(k, height) {
	// Write your code here
	let heightSort = height.sort(function (a, b) {
		return a - b;
	});

	if (heightSort[heightSort.length - 1] > k) {
		return heightSort[heightSort.length - 1] - k;
	} else {
		return 0;
	}
}
