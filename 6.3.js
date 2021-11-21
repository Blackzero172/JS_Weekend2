function organizeStr(s1, s2) {
	let longestStr = "";
	longestStr = s1.toLowerCase() + s2.toLowerCase();
	longestStr = new Set(longestStr);
	longestStr = Array.from(longestStr);
	longestStr.sort();
	longestStr = longestStr.join("");
	return longestStr;
}
console.log(organizeStr("aaasddddsddvd", "Asddfffdasfasdf"));
