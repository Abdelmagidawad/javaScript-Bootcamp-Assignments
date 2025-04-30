
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 31 ////////////

let myArrMain = [100, 200, 300, 400];

// Method Way1
let clonedArray = [...myArrMain];
console.log(clonedArray); // [100, 200, 300, 400]

// Method Way2
let clonedArray2 = myArrMain.slice(0);
console.log(clonedArray2);

// Method Way3
let clonedArray3 = myArrMain;
console.log(clonedArray3);

// Method Way4
let clonedArray4 = myArrMain.copyWithin(0, 0);
console.log(clonedArray4);

// Method Way5
let clonedArray5 = Array.from(myArrMain);
console.log(clonedArray5);

// Method Way6
let clonedArray6 = myArrMain.map((ele) => ele);
console.log(clonedArray6);

// Method Way7
let clonedArray7 = myArrMain.filter((ele) => ele);
console.log(clonedArray7);

// Method Way8
let clonedArray8 = [];
myArrMain.forEach((ele) => clonedArray8.push(ele));
console.log(clonedArray8);

// Method Way9
let emptyArray = [];
let clonedArray9 = emptyArray.concat(myArrMain);
console.log(clonedArray9);
