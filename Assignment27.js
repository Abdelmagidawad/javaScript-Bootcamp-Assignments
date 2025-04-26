
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/
 
 /////////// Solution Assignment 27 ////////////

let myArrS = ["69", "108", "122", "101", "114", "111"];

// Your Code Here
let myResult = myArrS.map((el) => +el).map((num) => String.fromCharCode(num));
console.log(myResult.join("")); // Elzero


 