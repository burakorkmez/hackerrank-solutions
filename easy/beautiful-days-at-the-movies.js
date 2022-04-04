function beautifulDays(i, j, k) {
	let beautiful = [];
	for (let start = i; start <= j; start++) {
		let numString = start + '';
		let reverse = numString.split('').reverse().join('');
		if ((start - reverse * 1) % k === 0) {
			beautiful.push(start);
		}
	}
	return beautiful.length;
}
