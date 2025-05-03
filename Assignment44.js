
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 43 ////////////

let last = 30;
let secondReq = 0;
for (let i = last - 1; i >= 1; i -= 4) {
  secondReq += i;
  console.log(i);
}

console.log(secondReq);

// First Request Output Needed
//29
//25
//21
//17
//13
//9
//5
//1

// Second Request Output Needed
//120

