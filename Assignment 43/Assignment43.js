//Link of Assignments : https://elzero.org/javascript-bootcamp-assignments-lesson-from-1-to-188/

/////////// Solution Assignment 43 ////////////

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/ElzeroWebSchool/repos");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let tableBody = document.querySelector("tbody");
    let data = JSON.parse(this.responseText);
    for (let i = 0; i < 15; i++) {
      let tr = document.createElement("tr");

      let tdName = document.createElement("td");
      tdName.append(data[i].name);

      let tdStars = document.createElement("td");
      tdStars.append(data[i].stargazers_count);

      let tdLink = document.createElement("td");

      let link = document.createElement("a");
      link.target = "_blank";
      link.href = data[i].html_url;
      link.append("Visit");

      tdLink.append(link);
      tr.append(tdName, tdStars, tdLink);
      tableBody.append(tr);
    }
  }
};
