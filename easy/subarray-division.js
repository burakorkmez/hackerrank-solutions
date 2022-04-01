function birthday(s, d, m) {
	let match = 0;
	for (let i = 0; i < s.length; i++) {
		const subArray = s.slice(i, i + m);
		const sum = subArray.reduce((prev, current) => prev + current);
		if (sum === d) match++;
	}
	return match;
}
