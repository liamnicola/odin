const myLibrary = [];
const colours = ["green", "red", "blue", "purple", "pink"];

class Book {
    constructor(title, author, pages, pagesRead, completed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.pagesRead = pagesRead
        this.completed = completed;
    }
}

Book.prototype.toggleStatus = function(){
    this.completed = !this.completed;
}


document.getElementById("book-submit").addEventListener("click", function(event){
    event.preventDefault()
  });

function addBookToLibrary(){
    let title = document.getElementById("title").value

    let author = document.getElementById("author").value

    let pages = document.getElementById("pages").value

    let pagesRead = document.getElementById("pagesRead").value


    let addedBook = new Book(title, author, pages, pagesRead)
    myLibrary.push(addedBook)
    console.log(myLibrary)
    displayBooks()
}


function displayBooks(){
    let library = document.getElementById("listBooks");
    library.innerHTML="";
    if(myLibrary.length === 0){
        library.innerHTML="";
    } else {
    let heading = document.createElement("tr");
    heading.innerHTML = `
                <tr>
                    <th class="title">Title</th>
                    <th class="author">Author</th>
                    <th>Pages</th>
                    <th>Pages Read</th>
                    <th>Action</th>
                </tr>
            `
            library.appendChild(heading)
    }
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        let bookRow = document.createElement("tr");

        bookRow.setAttribute("id", `book${i}`);

        if(100 * (myLibrary[i].pagesRead / myLibrary[i].pages) >= 75){
            bookRow.style.backgroundColor = "#84c987";
            bookRow.style.width = myLibrary[i].pagesRead;
        } else if(100 * (myLibrary[i].pagesRead / myLibrary[i].pages) <= 25){
            bookRow.style.backgroundColor = "#c9a584";
        } else if(myLibrary[i].pagesRead === myLibrary[i].pages){
            bookRow.style.backgroundColor = "#32be2e";
        } else{
            bookRow.style.backgroundColor = "#bcc984";
        }

        bookRow.innerHTML = `

                <tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.pages}</td>
                        <td>${book.pagesRead}</td>
                        <td>
                            <button class="action-btn2" onclick="edit(${i})">Edit</button>
                            <button class="action-btn" onclick="deleteBook(${i})">Remove</button>
                        </td>
                </tr>
            
            `
        library.appendChild(bookRow)
    }
}
displayBooks()


/*function toggleStatus(id) {
    myLibrary[id].toggleStatus();
    displayBooks();
}
*/



function deleteBook(id){
    myLibrary.splice(id, 1)
    displayBooks();
    
}

function edit(id){
    let form = document.getElementById(`book${id}`);
    form.style.backgroundColor = "grey"
    form.innerHTML = `
    <tr>
        <td><input class="form-input" id="edit-title" value="${myLibrary[id].title}"></td>
        <td><input class="form-input" id="edit-author" value="${myLibrary[id].author}"></td>
        <td><input class="form-input" id="edit-pages" value="${myLibrary[id].pages}"></td>
        <td><input class="form-input" id="edit-read" value="${myLibrary[id].pagesRead}"></td>
        <td><button class="action-btn2" onclick="update(${id})">Confirm</button></td>
    </tr>`
}

function update(id){
    let title = document.getElementById("edit-title").value

    let author = document.getElementById("edit-author").value

    let pages = document.getElementById("edit-pages").value

    let pagesRead = document.getElementById("edit-read").value


    myLibrary[id].title = title
    myLibrary[id].author = author
    myLibrary[id].pages = pages
    myLibrary[id].pagesRead = pagesRead
    console.log(myLibrary[id])
    displayBooks()
}

function hide(){
    var div = document.getElementById("form")
    var button = document.getElementById("book-form-button")
    if(div.style.display === "none"){
        div.style.display = "block"
        button.innerHTML = "Close"
        button.style.backgroundColor = "red"
    } else {
        div.style.display = "none"
        button.innerHTML = "Add a Book!"
        button.style.backgroundColor = "#4CAF50"
    }
}