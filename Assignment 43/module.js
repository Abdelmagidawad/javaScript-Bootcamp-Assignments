export function builtStructure(obj, tableBody) {
  let tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.append(obj.name);

  let tdStars = document.createElement("td");
  tdStars.append(obj.stargazers_count);

  let tdLink = document.createElement("td");

  let link = document.createElement("a");
  link.target = "_blank";
  link.href = obj.html_url;
  link.append("Visit");

  tdLink.append(link);
  tr.append(tdName, tdStars, tdLink);
  tableBody.append(tr);
}
