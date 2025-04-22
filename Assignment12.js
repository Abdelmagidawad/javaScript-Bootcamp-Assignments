
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 12 ////////////

let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor", "migom"];
let resultt = [];

// Your Code Here
for (let i = 0; i < names.length; i++) {
  if (names[i][0].toLowerCase() === names[i][names[i].length - 1].toLowerCase())
    resultt.push(names[i]);
}
console.log(resultt); // ['Osso', 'Aola', 'Daad', 'Roor']

// Another solution
let newNames = names.filter((word) => {
  return word[0].toLowerCase() === word[word.length - 1].toLowerCase();
});
console.log(newNames); // ['Osso', 'Aola', 'Daad', 'Roor']
