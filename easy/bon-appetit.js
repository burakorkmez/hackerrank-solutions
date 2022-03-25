function bonAppetit(bill, k, b) {
	// sample => bill [3,10,2,9]
	// k anna doesn't eat bill[k]
	// b amount of money that anna pay

	let sum = bill.reduce((acc, curr) => acc + curr, 0);
	let billActual = 0;
	sum = sum - bill[k];
	billActual = sum / 2;

	if (b === billActual) console.log('Bon Appetit');
	if (b > billActual) console.log(b - billActual);
}
