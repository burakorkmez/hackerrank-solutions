function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let applesForSam = 0;
	let orangesForSam = 0;

	for (let i = 0; i < apples.length; i++) {
		if (apples[i] + a >= s && apples[i] + a <= t) {
			applesForSam += 1;
		}
	}
	for (let i = 0; i < oranges.length; i++) {
		if (b + oranges[i] <= t && b + oranges[i] >= s) {
			orangesForSam += 1;
		}
	}
	console.log(applesForSam, orangesForSam);
}
