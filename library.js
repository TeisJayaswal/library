class Book {

    constructor({title, author, pageCount, readStatus, numberBook}) {
        this.title = title
        this.author = author
        this.pageCount = pageCount
        this.readStatus = readStatus
        this.numberBook = numberBook  
    }
}

const library = (function(){

    let myLibrary = []; 

    const openForm = () => {
        var form = document.getElementById("myForm");
        form.style.display = "block"; 
    }

    const addBooktoLibrary  = () => {
        var form = document.getElementById("myForm");
        let newBook = new Book({});

        newBook.title = document.getElementById("title").value;
        newBook.author = document.getElementById("author").value || 'asldjfalsdjf';
        newBook.pageCount = document.getElementById("page-count").value || 8;
        newBook.readStatus = document.querySelector('input[name="readstatus"]:checked')?.value || "yes";  
        newBook.numberBook = myLibrary.length + 1;

        myLibrary.push(newBook);
        console.log(myLibrary);
        
        const inputs = document.querySelectorAll('#title, #author, #page-count');

        inputs.forEach(input => {
            input.value = '';
        });

        closeForm();
        displayCard();
    }

    const closeForm = () => {
        document.getElementById("myForm").style.display = "none";
    }

    const displayCard = () => {
        const booksToReset = document.querySelectorAll('.bookClass');

        booksToReset.forEach(book => {
            book.remove(); 
        });

        var bookContainer = document.getElementById("book-container"); 

        myLibrary.forEach (book => {
            const card = document.createElement('div');
            card.classList.add('bookClass') 
            const title = document.createElement('h3'); 
            title.textContent = `Title: ${book.title}`
            const author = document.createElement('h3');
            author.textContent = `Author: ${book.author}`
            const pageCount = document.createElement('h3');
            pageCount.textContent = `Number of Pages: ${book.pageCount}`;
            const readStatus = document.createElement('h3');
            readStatus.textContent = `Read Status: ${book.readStatus}`;
            const removeButton = document.createElement('button');
            removeButton.classList.add('removeCard');
            removeButton.setAttribute('id', `${myLibrary.indexOf(book)}`);
            removeButton.textContent = "Remove Book"; 
            const readButton = document.createElement('button');
            readButton.classList.add('readStatusChange');
            readButton.textContent = "Change Read Status";
            readButton.setAttribute('id', `${myLibrary.indexOf(book)}`);

            card.appendChild(title);
            card.appendChild(author); 
            card.appendChild(pageCount);
            card.appendChild(readStatus); 
            card.appendChild(removeButton); 
            card.appendChild(readButton);
            bookContainer.appendChild(card);
        })
            console.log(`About to set up the remove button handlers`)
            setupRemoveButtonCallbacks();
            console.log(`Just set up the remove button handlers`)
            console.log(`About to set up edit read status button handlers`)
            setupEditReadStatus(); 
            console.log(`Just set up edit read status button handlers`)
    }

    const setupEditReadStatus = () => {

        const editReadStatusButtons = document.querySelectorAll('.readStatusChange');

        Array.from(editReadStatusButtons).forEach((editReadStatusButton) => {
            console.log(`Setting up listner for readStatusButton with id ${editReadStatusButton.id}`);
            editReadStatusButton.addEventListener('click', function(event) {
                if (myLibrary[editReadStatusButton.id].readStatus === "yes") {
                    myLibrary[editReadStatusButton.id].readStatus = "no";
                } else if (myLibrary[editReadStatusButton.id].readStatus === "no") {
                    myLibrary[editReadStatusButton.id].readStatus = "yes"; 
                }; 
                console.log(myLibrary[editReadStatusButton.id].readStatus)
                displayCard();
            });
        });
    }

    const setupRemoveButtonCallbacks = () => {
        const removeButtons = document.querySelectorAll('.removeCard');

        Array.from(removeButtons).forEach((removeButton) => {
            console.log(`Setting up listener for removeButton with id ${removeButton.id}`);
            removeButton.addEventListener('click', function(event) {
                console.log(removeButton.parentNode);
                console.log(`Inside event listener callback for id ${removeButton.id}`)
                console.log(removeButton.id);
                myLibrary.splice(removeButton.id, 1);
                console.log(myLibrary); 
                displayCard();
                
            });
        });
    }

    return {openForm, addBooktoLibrary, closeForm, displayCard, setupEditReadStatus, setupRemoveButtonCallbacks}

})();