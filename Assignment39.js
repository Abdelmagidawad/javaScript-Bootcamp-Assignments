
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 39 ////////////

let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Freeze the array to prevent modifications
Object.freeze(myData);

// Try to push (will fail silently)
try {
  myData.push("Name");
} catch (e) {
  // Error is caught and ignored
}

console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']

