

//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 49 ////////////

function createStars1(num) {
  // Your Code Here
  let count = 1,
    result = "";

  for (let i = 1; i <= num; i++) {
    result += `${"*".repeat(count)} \n`;
    count += 2;
  }

  count -= 4;

  for (let i = 1; i < num; i++) {
    result += `${"*".repeat(count)} \n`;
    count -= 2;
  }

  return result;
}


console.log(createStars1(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars1(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *



// Another Solution

function createStars2(num) {
  // Your Code Here
  let result = "";

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : 2 * num - i;

    let stars = 2 * level - 1;

    result += `${"*".repeat(stars)} \n`;
  }

  return result;
}

console.log(createStars2(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars2(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *
