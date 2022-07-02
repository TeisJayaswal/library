let myLibrary = []; 

function Book(title, author, pageCount, readStatus) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.readStatus = readStatus
}

const book1 = new Book('Zero to One', "Peter Thiel", "224 pages", "read" )
const book2 = new Book('You are a Badass at Making Money', "Jen Sincero", "211 pages", "reading")

myLibrary.push(book1)
myLibrary.push(book2)
console.log(myLibrary);

function addBooktoLibrary() {

}
