
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 45 ////////////

let rangeEnd = 10;

// Range numbers Way1
let myRange1 = [];
for (let i = 1; i <= rangeEnd; i++) {
  myRange1.push(i);
}
// Output Needed
console.log(myRange1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Range numbers Way2
let myRange2 = Array.from({ length: rangeEnd }, (_, i) => i + 1);
// Output Needed
console.log(myRange2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Range numbers Way3
let myRange3 = Array(rangeEnd)
  .fill(0)
  .map((ele, i) => i + 1);
// Output Needed
console.log(myRange3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

