
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/
 
 /////////// Solution Assignment 28 ////////////

// Write Your Function Here
function customMerge(...arrays) {
  let merged = [];
  merged += [...arguments];
  let result = merged
    .split(",") //convert to array
    .map((el) => +el) //convert to number
    .sort((a, b) => a - b);
  return result;
}

console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
);
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

 