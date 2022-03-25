function breakingRecords(scores) {
	// sample input [10,5,20,20,4,5,2,25,1]
	let max = scores[0];
	let min = scores[0];
	let minBreakCount = 0;
	let maxBreakCount = 0;
	for (let i = 1; i < scores.length; i++) {
		if (scores[i] < min) {
			min = scores[i];
			minBreakCount++;
		}
		if (scores[i] > max) {
			max = scores[i];
			maxBreakCount++;
		}
	}

	// return (times that she break  the record) [max,min];
	return [maxBreakCount, minBreakCount];
}
