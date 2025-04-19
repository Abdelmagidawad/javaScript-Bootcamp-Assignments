
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 6 ////////////



function checkBiggestNum(word) {
  // return Math.max(...word.split("").map((el) => +el));
  return Math.max(...word);
}
console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9
