
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 3 ////////////


let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// Output Needed
("Hello Elzero Web School @ We Love Programming");
//1 solution
console.log(myString.split(" ").slice(0, 8).join(" ").slice(0, -1));
//2 solution
console.log(myString.slice(0, myString.indexOf("@", 26)));
//3 solution
console.log(myString.split("@").slice(0, 2).join("@"));