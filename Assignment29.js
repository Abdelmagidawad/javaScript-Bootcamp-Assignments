
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/
 
 /////////// Solution Assignment 29 ////////////

// Write Your Function Here
function customCalc(...parmeters) {
  let nums = parmeters.filter((ele) => !isNaN(ele)).map((el) => +el);
  let result =
    nums.reduce((acc, ele) => acc + ele) * nums.slice(0, 1) * nums.slice(-1);
  // let result = //to get first element, last element using index
  // nums.reduce((acc, ele) => acc + ele) * nums[0] * nums[nums.length - 1];
  return result;
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10

 