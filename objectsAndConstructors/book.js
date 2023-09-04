const myLibrary = [];
const colours = ["green", "red", "blue", "purple", "pink"];

class Book {
    constructor(title, author, pages, completed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
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

    let completed = document.getElementById("completed").checked


    let addedBook = new Book(title, author, pages, completed)
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
                    <th>Status</th>
                </tr>
            `
            library.appendChild(heading)
    }
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        let bookDiv = document.createElement("tr");
        bookDiv.setAttribute("id", `book${i}`);
        if(myLibrary[i].completed === true){
            bookDiv.classList.add("bookRead");
        } else{
            bookDiv.classList.add("bookUnread");
        }
        bookDiv.innerHTML = `

                <tr>
                    <td class="title">${book.title}</td>
                    <td class="author">${book.author}</td>
                    <td>${book.pages}</td>
                    <td>${book.completed ? "Read" : "Unread"}</td>
                    <td>
                        <button class="action-btn2" onclick="toggleStatus(${i})">Toggle</button>
                        <button class="action-btn" onclick="deleteBook(${i})">Remove</button>
                    </td>
                </tr>
            
            `
        library.appendChild(bookDiv)
    }
}
displayBooks()


function toggleStatus(id) {
    myLibrary[id].toggleStatus();
    let row = document.getElementById(`book${id}`)
    console.log(row)
    if(myLibrary[id].completed === true){
        row.style.backgroundColor = "black"
    }
    displayBooks();
}

function deleteBook(id){
    myLibrary.splice(id, 1)
    displayBooks();
    
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



/* 
<div class="Heading">
                <h1>${i}</h1>
                <h3 class="title">${book.title}</h3>
                <h4 class="author">${book.author}</h4>
            </div>
            <div class="bookBody">
            <p>${book.pages}</p>
            <p>${book.completion ? "Read" : "Unread"}</p>
            <button onclick="toggleStatus(${i})">Toggle</button>
            <button onclick="deleteBook(${i})">Delete Book</button>
            </div>`
*/