


//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 48 ////////////

function createStars(num) {
  // Your Code Here
  let count = 1,
    result = "";
  for (let i = 1; i <= num; i++) {
    result += `${"*".repeat(count)} \n`;
    count += 2;
  }
  return result;
}

console.log(createStars(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************
