
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 14 ////////////

function repeatWithRules(word) {
  // Your Code Here
  let newWord = [...word]
    .map((element, index) => {
      return element.repeat(index + 1);
    })
    .join("");

  return newWord;
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
