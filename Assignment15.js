
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 15 ////////////

function concatenateWithoutLast(words) {
  // Your Code Here
  return words.map((word) => word.slice(0, -1)).join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"]));
//output= Elzero Web School
