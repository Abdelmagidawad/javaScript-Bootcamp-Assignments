
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 32 ////////////

let strNumber = "10";

// Method Way1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution

// Method Way2
console.log(+strNumber);

// Method Way3
console.log(Math.abs(-strNumber));

// Method Way4
console.log(Number(strNumber));

// Method Way5
console.log(parseInt(strNumber));

// Method Way6
console.log(parseFloat(strNumber));

// Method Way7 and same solution
console.log(Math.floor(strNumber));
console.log(Math.ceil(strNumber));
console.log(Math.round(strNumber));
console.log(Math.trunc(strNumber));

// Output Needed
//10

