import { builtStructure } from "/module.js";

//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 43 ////////////

// Using Async & Await ,fetch

async function getData() {
  try {
    let response = await fetch(
      "https://api.github.com/users/ElzeroWebSchool/repos"
    );

    if (!response.ok) {
      throw new Error("Not found Data");
    }
    let data = await response.json();

    let tableBody = document.querySelector("tbody");

    data.slice(0, 15).forEach((obj) => {
      builtStructure(obj, tableBody);
    });
  } catch (error) {
    console.log(`Rejected : ${error}`);
  }
}

getData();
