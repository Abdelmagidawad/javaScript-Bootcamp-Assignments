
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 5 ////////////



function replaceFirstWithLast(word) {
  return `${word[word.length - 1]}${word.slice(1, -1)}${word[0]} `;
}
console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH
