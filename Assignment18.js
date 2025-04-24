
// Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 18 ////////////

let st = "elzero";

console.log(st[0].toUpperCase() + st.slice(1));
console.log(st.charAt(0).toUpperCase() + st.slice(1));
console.log(st.replace(st[0], st[0].toUpperCase()));
console.log(st.slice(0, 1).toUpperCase() + st.slice(1));
console.log(st.split("")[0].toUpperCase() + st.substring(1));
console.log(st.substring(0, 1).toUpperCase() + st.substring(1));
console.log(
  st
    .split("")
    .map((el, i) => (i === 0 ? el[0].toUpperCase() : el))
    .join("")
);

// Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
