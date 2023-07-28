import { getSchools } from "./database.js";

const schools = getSchools();

export const SchoolList = () => {
  let headerHtml = `<div>`;
  headerHtml += `<h3>Magic Schools:</h3>`;
  headerHtml += `<ul>`;
  for (const school of schools) {
    headerHtml += `<li class="option" data-type="school" data-id="${school.id}">${school.name}</li>`;
  }
  headerHtml += `</ul>`;
  headerHtml += `</div>`;
  
  return headerHtml;
};
