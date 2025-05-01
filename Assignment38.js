
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 38 ////////////

let str = "i lovE elzeRO weB schOOL";

let arrayStr = str.split(" ").join().toLowerCase().split(",");
//['i', 'love', 'elzero', 'web', 'school']

let newStr = arrayStr.map((element) => {
  return element[0].toUpperCase().concat(element.slice(1));
}); //['I', 'Love', 'Elzero', 'Web', 'School']

console.log(newStr.join(" ")); // "I Love Elzero Web School"

// Output Needed
// "I Love Elzero Web School"


