

// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 25 ////////////

let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// Empty myArr Way1
console.log(myArr.slice(-1, -1));

// Empty myArr Way2
myArr.splice(0, myArr.length);
console.log(myArr);

// Empty myArr Way3
while (myArr.length > 0) {
  myArr.pop();
}
console.log(myArr);

// Empty myArr Way4
while (myArr.length > 0) {
  myArr.shift();
}
console.log(myArr);

// Empty myArr Way5
myArr = [];
console.log(myArr);

// Empty myArr Way6
myArr.length = 0;
console.log(myArr);

// Output Needed
// []

