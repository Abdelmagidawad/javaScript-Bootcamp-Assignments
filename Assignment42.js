
//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 42 ////////////

// Message Needed In Output
// "You Pressed Ctrl + Alt + Shift"

function checkKeys(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey) {
    console.log("You Pressed Ctrl + Alt + Shift");
    document.removeEventListener("keydown", checkKeys);
  }
}
document.addEventListener("keydown", checkKeys);

