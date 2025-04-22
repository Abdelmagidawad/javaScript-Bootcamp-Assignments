
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 10 ////////////

// Write Your Function Implementation Here
String.prototype.elzeroRepeat = function (count) {
  let result = "";
  while (count--) {
    result += this;
  }
  return result;
};
console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero
