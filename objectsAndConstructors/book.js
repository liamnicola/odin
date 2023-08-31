function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function(){
        console.log(title + " by " + author + pages + status)
    }
}

const book1 = new Book('Harry Potter 1', 'JK Rowling', 300, 'Read')