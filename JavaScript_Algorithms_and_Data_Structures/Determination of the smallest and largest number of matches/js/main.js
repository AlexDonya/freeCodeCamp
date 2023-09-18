let ohStr = "Ohhhhhh no";
let ohRegex = /Oh{3,6} no/; // Змініть цей рядок
let result = ohRegex.test(ohStr);

console.log(result);