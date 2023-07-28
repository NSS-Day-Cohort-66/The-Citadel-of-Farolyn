export const BookList = () => {
  const bookListHTML = `<h3>Please select a mage type or school of magic to show book listings.</h3>`;
  return bookListHTML;
};

export const getBookListings = (books) => {
  let bookListHTML = "<ul>";
  for (const book of books) {
    bookListHTML += `<li>${book.name}</li>`;
  }
  bookListHTML += "</ul>";

  return bookListHTML;
};
