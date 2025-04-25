

// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 23 ////////////

function reversing(str) {
  // Write Your Code Here
  return str
    .split(" ")
    .map((word) => {
      return word.replace(/[a-z]+/gi, (match) => {
        return match.split("").reverse().join("");
      });
    })
    .join(" ");
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

