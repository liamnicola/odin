const myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault()
  });
function addBookToLibrary(){
    let title = document.getElementById("title").value

    let author = document.getElementById("author").value

    let pages = document.getElementById("pages").value

    let status = document.getElementById("status").value


    let addedBook = new Book(title, author, pages, status)
    myLibrary.push(addedBook)
    console.log(myLibrary)
    displayBooks()
}


function displayBooks(){
    let library = document.getElementById("listBooks");
    library.innerHTML="";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        let bookDiv = document.createElement("div");
        bookDiv.innerHTML = `<div class="Heading">
        <h3 class="title">${book.title}</h3>
        <h4 class="author">${book.author}</h4>
    </div>
    <div class="bookBody">
        <p>${book.pages}</p>
        <p>${book.status}</p>
        <button onclick="deleteBook(${i})">Delete Book</button>
    </div>`
        library.appendChild(bookDiv)
    }
}
displayBooks()


function deleteBook(id){
    myLibrary.splice(id, 1)
    displayBooks();
    
}


function hide(){
    var div = document.getElementById("form")
    if(div.style.display === "none"){
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
}

new Book('Harry Potter 1', 'JK Rowling', 300, 'Read')