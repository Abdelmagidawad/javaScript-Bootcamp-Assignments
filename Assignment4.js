
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 4 ////////////

function checkRange(n1, n2, n3, n4, n5) {
  let arr = [n1, n2, n3].filter((el) => n4 <= el && el <= n5);
  if (arr.length === 3) return "Yes All Numbers In Range";
  else return " Not All Numbers Is In Range";
}
console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range


