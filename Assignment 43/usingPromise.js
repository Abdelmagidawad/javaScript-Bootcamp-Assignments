import { builtStructure } from "/module.js";

//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 43 ////////////

// Using Promise

let request = new Promise((res, rej) => {
  let myRequest = new XMLHttpRequest();

  myRequest.onload = function () {
    if (this.status === 200) {
      res(JSON.parse(this.responseText));
    } else {
      rej(Error("Not Data Found"));
    }
  };
  myRequest.open("GET", "https://api.github.com/users/ElzeroWebSchool/repos");
  myRequest.send();
});

request
  .then((resolvedData) => {
    let tableBody = document.querySelector("tbody");

    resolvedData.slice(0, 15).forEach((obj) => {
      builtStructure(obj, tableBody);
    });
  })
  .catch((rejectedData) => {
    console.log(`Rejected : ${rejectedData}`);
  });
