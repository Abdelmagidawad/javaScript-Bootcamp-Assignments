
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/
 
/////////// Solution Assignment 26 ////////////


let myArray = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArray.sort((a, b) => a - b);

// Way 1
let newMyArray1 = new Set(myArray);
console.log(Array.from(newMyArray1));

// Way 2
let newMyArray2 = myArray.filter((el, i, arr) => {
  return el !== arr[i + 1];
});
console.log(newMyArray2);

// Way 3
let newMyArray3 = [];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] !== myArray[i + 1]) newMyArray3.push(myArray[i]);
}
console.log(newMyArray3);
// Way 4
let newMyArray4 = myArray.reduce((acc, current) => {
  if (!acc.includes(current)) acc.push(current);
  return acc;
}, []);
console.log(newMyArray4);

// Output Needed
// [10, 20, 30, 50]


 