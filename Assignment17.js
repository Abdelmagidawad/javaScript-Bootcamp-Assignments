

// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 17 ////////////

function formatName(theName) {
  // Your Code Here
  let result = theName
    .split(" ")
    .map((el, index) =>
      index === 0 ? el[0].toUpperCase() : el[0].toLowerCase()
    );
  return result.join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
console.log(formatName("Elzero Web School Course")); // E.w.s.c
