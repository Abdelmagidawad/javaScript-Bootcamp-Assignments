


//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 46 ////////////

let arrNums = [10, -20, 300, 50, 100, -50];

// Max number of Way1
let maxNumber1 = Math.max(...arrNums);

console.log(maxNumber1); // 300

// Max number of Way2
let maxNumber2 = arrNums.reduce((acc, cur) => {
  return acc < cur ? (acc = cur) : acc;
});

console.log(maxNumber2); // 300

// Max number of Way3
let maxNumber3 = 0;
arrNums.forEach((element) => {
  if (element > maxNumber3) maxNumber3 = element;
});

console.log(maxNumber3); // 300

// Max number of Way4
let maxNumber4 = arrNums.sort((a, b) => b - a)[0];
console.log(maxNumber4);
