let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrFilter = arr.filter((filter) => filter % 2 === 1);
console.log(arrFilter);
let arrPow = [];
arr.forEach((num) => arrPow.push(num * num));
console.log(arrPow);
let arrDouble = arr.map((num) => num * 2);
console.log(arrDouble);
