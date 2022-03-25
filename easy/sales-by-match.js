function sockMerchant(ar) {
	// example => ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

	let pairs = 0;
	let search = new Set();
	for (const sock of ar) {
		if (search.has(sock)) {
			pairs++;
			search.delete(sock);
		} else {
			search.add(sock);
		}
	}
	return pairs;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));
