
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 21 ////////////


function getLastDigit(num) {
  // Your Code Here
  return +num.toString().slice(-1);
}

//Or anther solution
// function getLastDigit(num) {
//   // Your Code Here
//   return num % 10;
// }

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number
