function countDupes(string) {
	let letterSum = {};
	let letterCounter = {};
	string = Array.from(string);
	string.forEach((char) => {
		char = char.toLowerCase();
		if (letterCounter[char]) {
			letterCounter[char]++;
		} else {
			letterCounter[char] = 1;
		}
	});
	let keys = Object.keys(letterCounter);
	keys.forEach((key) => {
		if (letterCounter[key] > 2) {
			letterSum[key] = letterCounter[key];
		}
	});
	return letterSum;
}
console.log(countDupes("asdasdasdasd"));
