
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 2 ////////////

function addEl(str) {
  if (!str) return str;
  else if (str.startsWith("El")) return str;
  else return `El${str}`;
}
console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
