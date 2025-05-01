
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 40 ////////////

const myDataa = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Write Your Code Here
Object.freeze(myDataa);
try {
  myData.skill = "Programming";
} catch (error) {
  // Error is caught and ignored
}

console.log(myDataa.user); // Elzero
console.log(myDataa.age); // 41
console.log(myDataa.country); // Egypt
console.log(myDataa.skill); // Undefined

