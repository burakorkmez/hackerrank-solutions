function timeConversion(time) {
	const AMPM = time.slice(-2);
	const timeArr = time.slice(0, -2).split(':');
	if (AMPM === 'AM' && timeArr[0] === '12') {
		timeArr[0] = '00';
	} else if (AMPM === 'PM') {
		timeArr[0] = (timeArr[0] % 12) + 12;
	}

	return timeArr.join(':');
}
