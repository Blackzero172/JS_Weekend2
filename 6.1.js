function accum(string) {
	let strArray = Array.from(string);
	let accumStr = [];
	accumStr = strArray.map(function (char, index) {
		return char.toUpperCase() + char.repeat(index);
	});
	accumStr = accumStr.join("-");
	return accumStr;
}
console.log(accum("abcd"));
console.log(accum("edft"));
