let myLibrary = [
    {
        title: "asdf",
        author: "234",
        page: 324
    }
];

function book() {

}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('page').value;
    const newBook = new book(title, author, page);

    myLibrary.push(newBook);

    console.log(myLibrary);
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    addBookToLibrary();

    console.log(myLibrary);

    
    
});





