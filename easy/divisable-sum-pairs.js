function divisibleSumPairs(n, k, arr) {
	let numOfPairs = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if ((arr[i] + arr[j]) % k === 0) numOfPairs++;
		}
	}
	return numOfPairs;
}
