function migratoryBirds(arr) {
	let birdsMap = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (birdsMap.has(arr[i])) {
			birdsMap.set(arr[i], birdsMap.get(arr[i]) + 1);
		} else {
			birdsMap.set(arr[i], 1);
		}
	}
	var highestNum = [];
	var highVal = Math.max(...birdsMap.values());
	//this is to check if more than one key have the same occurrence
	birdsMap.forEach((value, key, map) => {
		if (value >= highVal) {
			highVal = value;
			highestNum.push({ key: key, highVal: highVal });
		}
	});
	return highestNum.sort((a, b) => a.key - b.key)[0].key;
}
