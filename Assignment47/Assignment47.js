//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 45 ////////////

let textArea = document.querySelector("textarea");
let btnSave = document.querySelector("button");

btnSave.addEventListener("click", () => {
  let textValue = textArea.value;

  // Blob=> Used to convert text to a downloadable file.

  let blob = new Blob([textValue], { type: "text/plain" });

  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `my-text.txt`;
  a.click();

  URL.revokeObjectURL(a.href);
});
