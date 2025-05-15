import { builtStructure } from "/module.js";

//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 43 ////////////

// Using Ajax Call

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/ElzeroWebSchool/repos");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let tableBody = document.querySelector("tbody");
    let data = JSON.parse(this.responseText);

    data.slice(0, 15).forEach((obj) => {
      builtStructure(obj, tableBody);
    });
  }
};
