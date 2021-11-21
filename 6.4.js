function isIsogram(string) {
	string = Array.from(string);
	let letterCounter = {};
	for (let char of string) {
		char = char.toLowerCase();
		if (letterCounter[char]) {
			return false;
		} else {
			letterCounter[char] = 1;
		}
	}
	return true;
}
console.log(isIsogram(""));
console.log(isIsogram("abc"));
console.log(isIsogram("aba"));
console.log(isIsogram("Dbc"));
