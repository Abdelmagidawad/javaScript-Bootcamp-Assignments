
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 8 ////////////

let Nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;
let closest;
// // Your Code Here
let newNums = Nums.map((element) => {
  return Math.abs(goal - element);
});

Nums.forEach((element) => {
  if (element + Math.min(...newNums) === goal) closest = element;
});
console.log(`Closest Number Is ${closest}`);
// Closest Number Is 88