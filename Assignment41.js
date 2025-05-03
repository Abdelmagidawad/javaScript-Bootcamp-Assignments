
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 41 ////////////

const myMainObj = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Your Code Here

//  cloned object Way1
let clonedObj1 = { ...myMainObj };
console.log(clonedObj1); // {user: 'Elzero', age: 41, country: 'Egypt'}

//  cloned object Way2
let clonedObj2 = Object.assign({}, myMainObj);
console.log(clonedObj2); // {user: 'Elzero', age: 41, country: 'Egypt'}

//  cloned object Way3
let clonedObj3 = myMainObj;
console.log(clonedObj3); // {user: 'Elzero', age: 41, country: 'Egypt'}

//  cloned object Way4
let clonedObj4 = JSON.parse(JSON.stringify(myMainObj));
console.log(clonedObj4); // {user: 'Elzero', age: 41, country: 'Egypt'}

//  cloned object Way5
let clonedObj5 = structuredClone(myMainObj);
console.log(clonedObj5); // {user: 'Elzero', age: 41, country: 'Egypt'}
