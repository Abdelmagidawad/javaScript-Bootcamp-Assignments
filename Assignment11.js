
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 11 ////////////

let myMoney = 5301503206;
let format = Array.from(myMoney.toString());
let newArray = [],
  count = 1;

for (let i = format.length - 1; i >= 0; i--) {
  newArray.unshift(format[i]);
  if (count % 3 === 0) newArray.unshift(",");
  count++;
}
console.log(newArray.join(""));

// Needed Output   5, 301, 503, 206;
