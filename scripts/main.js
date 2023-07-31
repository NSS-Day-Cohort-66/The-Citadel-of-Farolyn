import { SchoolList } from "./SchoolList.js";
import { TypeList } from "./TypeList.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
  <h1 id="title">Goblin Librarian</h1>
  <div id="body">
      <div id="lists_container">
      ${SchoolList()}
      ${TypeList()}
      </div>
      <div id="details_container">
        <div id="message">Please select a Magician Type or School of magic to show details.</div>
      </div>
  </div>
`;

mainContainer.innerHTML = applicationHTML;
