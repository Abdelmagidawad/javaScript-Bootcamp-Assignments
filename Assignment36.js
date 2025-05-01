
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 36 ////////////


// Write Your Code Here

// Generate a small letters of Way1
let smallLetters1 = "";
for (let i = 97; i <= 122; i++) {
  smallLetters1 += String.fromCharCode(i);
}

console.log(smallLetters1); // abcdefghijklmnopqrstuvwxyz

// Generate a small letters of Way2
let smallLetters2 = [...Array(26).keys()]
  .map((i) => String.fromCharCode(97 + i))
  .join("");

console.log(smallLetters2); // abcdefghijklmnopqrstuvwxyz
