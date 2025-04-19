
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 7 ////////////

let nums = [20, 100, 50, 10, 15, -20, 30];
// let result = nums.sort((a, b) => a - b).slice(-2); //[50,100]
let result = nums.sort((a, b) => b - a).slice(0, 2);
console.log(result);
// Needed Output
//[100, 50]


