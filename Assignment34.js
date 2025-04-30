
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 34 ////////////

let mainArray = [1, 1, 1, 2, 3, 4, 3];
mainArray.sort((a, b) => a - b);

// uniqueElements Way1
let uniqueElements1 = new Set(mainArray);

console.log([...uniqueElements1]); // [1, 2, 3, 4]
// console.log(Array.from(uniqueElements1)); // the same result = [1, 2, 3, 4]

// uniqueElements Way2
let uniqueElements2 = mainArray.filter((ele, index, arr) => {
  return ele !== arr[index + 1];
});

console.log(uniqueElements2); // [1, 2, 3, 4]

// uniqueElements Way3
let uniqueElements3 = mainArray.reduce((acc, current) => {
  if (!acc.includes(current)) acc.push(current);
  return acc;
}, []);

console.log(uniqueElements3); // [1, 2, 3, 4]

// uniqueElements Way4
let uniqueElements4 = [];
mainArray.forEach((ele, index, arr) => {
  if (ele !== arr[index + 1]) uniqueElements4.push(ele);
});

console.log(uniqueElements4); // [1, 2, 3, 4]

// uniqueElements Way5
let uniqueElements5 = mainArray
  .map((ele, index, arr) => {
    return ele !== arr[index + 1] ? ele : ele.pop;
  })
  .join("")
  .split("")
  .map((ele) => +ele);

console.log(uniqueElements5); // [1, 2, 3, 4]

