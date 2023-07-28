import { BookList, getBookListings } from "./BookList.js";
import { TypeList } from "./TypeList.js";
import { SchoolList } from "./SchoolList.js";
import { getBooks, getTypes, getSchools, getTypeById, getSchoolById } from "./database.js";

const mainContainer = document.querySelector("#container");

// Get copy of state for use in this module
const types = getTypes();
const schools = getSchools();
const books = getBooks();


document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;
    const id = clickTarget.dataset.id;

    let booksToShow = [];
    let message = "";
    if (clickTarget.dataset.type === "type") {
        message = getTypeById(id).greeting;
        for (const book of books){
            if (book.types.includes(id)){
                booksToShow.push(book);
            }
        }
    }
    else if (clickTarget.dataset.type === "school") {
        message = getSchoolById(id).disclaimer;
        for (const book of books){
            if (book.schools.includes(id)){
                booksToShow.push(book);
            }
        }
    }
    const listingsHtml = getBookListings(booksToShow);
    
    const booksContainer = document.querySelector("#book-list");
    booksContainer.innerHTML = listingsHtml;
    
    const messageContainer = document.querySelector("#message");
    messageContainer.innerHTML = message;
});


const applicationHTML = `
<header>
    <h1>Goblin Librarian</h1>
</header>
<main>
    ${SchoolList()}
    ${TypeList()}
    <p id="message"></message>
    <div id="book-list">
      ${BookList()}
    </div>
</main>
`;

mainContainer.innerHTML = applicationHTML;
