
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 16 ////////////

function getCharacters(word, nums) {
  // Your Code Here
  return `${word.slice(0, nums)}${word.slice(-nums)}`;
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool
