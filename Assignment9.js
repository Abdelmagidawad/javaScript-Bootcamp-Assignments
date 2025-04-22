
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 9 ////////////

function swapEveryTwoChars(word) {
  return [...word]
    .map((el, i) => {
      return i % 2 === 0
        ? el === el.toLowerCase()
          ? el.toUpperCase()
          : el.toLowerCase()
        : el;
    })
    .join("");
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
