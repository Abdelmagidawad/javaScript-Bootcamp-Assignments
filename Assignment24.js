
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 24 ////////////

function dashBetweenOdd(num) {
  // Write Your Code Here
  let result = [...num.toString()].map((char) => {
    return +char;
  });
  let newResult = [];

  for (let i = 0; i < result.length; i++) {
    newResult.push(result[i]);

    if (result[i] % 2 !== 0 && result[i + 1] % 2 !== 0) {
      if (!result[i + 1]) break;
      newResult.push("-");
    }
  }

  return newResult.join("");
}

////Or anther solution using RegEx
// function dashBetweenOdd(num) {
//   // Write Your Code Here
//   return num.toString().replace(/([13579])(?=[13579])/g, "$1-");
// }

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

