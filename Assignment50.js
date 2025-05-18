

//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 50 ////////////

function createStarsss(num) {
  // Your Code Here

  let result = "";

  for (let i = 1; i <= num * 2; i++) {
    let level = i <= num ? i : 2 * num - i + 1;
    let spaces = level - 1;
    let stars = 2 * (num - spaces) - 1;

    result += `${" ".repeat(spaces)}${"*".repeat(stars)} \n`;
  }

  return result;
}

console.log(createStarsss(6));

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
