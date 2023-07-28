import { getTypes } from "./database.js";

const types = getTypes();

export const TypeList = () => {
  let headerHtml = `<div>`;
  headerHtml += `<h3>Magician Types:</h3>`;
  headerHtml += `<ul>`;
  for (const type of types) {
    headerHtml += `<li class="option" data-type="type" data-id="${type.id}">${type.name}</li>`;
  }
  headerHtml += `</ul>`;
  headerHtml += `</div>`;
  
  return headerHtml;
};
