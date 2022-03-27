function minMax(arr) {
	let min = 0;
	let max = 0;
	const sortedArr = arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length - 1; i++) {
		min += sortedArr[i];
	}

	for (let i = 1; i < arr.length; i++) {
		max += sortedArr[i];
	}

	console.log(max, min);
}
