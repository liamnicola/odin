const myLibrary = ["hi"];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        //this.status = status;
    }
}

function addBookToLibrary(){
    let book = new Book(title, author, pages)
    myLibrary.push(book)
}

function displayBooks(arr){
    let books = "";
    for(let i = 0; i < arr.length; i++){
        books += `<li>${arr[i]}</li>`
    }
    return books;
}

document.getElementById("listBooks").innerHTML = `<ol>${displayBooks(myLibrary)}</ol>`

function hide(){
    var div = document.getElementById("form")
    if(div.style.display === "none"){
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
}

new Book('Harry Potter 1', 'JK Rowling', 300, 'Read')