function addBook(){
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;
    

    if(title && author && isbn){
        var BookList = document.getElementById("BookList");
        var newBook = document.createElement("li");
        var bookDetails = document.createElement("div");
        bookDetails.className = "book-details";
        bookDetails.innerHTML = " " + title + "  "+"by"+"   " + author + "   "+"ISBN: " + isbn;
        newBook.appendChild(bookDetails);
        BookList.appendChild(newBook);

        document.getElementById("title").value= "";
        document.getElementById("author").value= "";
        document.getElementById("isbn").value= "";
    }
    else{
        alert("All fields are required.");
    }
}

function searchBooks() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var bookList = [
        { title: "Hacking: The Art of Exploitation", author: "Jon Erickson", isbn: "978-1593271442" },
        { title: "Introduction to the Theory of Computation", author: "Micheal Sipser", isbn: "978-1133187790" },
        { title: "Eloquent Javascript: A Modern Introduction to Programming", author: "Marijn Haverbeke", isbn: "978-1593279509" }
    ];

    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";

    for (var i = 0; i < bookList.length; i++) {
        if (bookList[i].title.toLowerCase().includes(searchTerm) ||
            bookList[i].author.toLowerCase().includes(searchTerm) ||
            bookList[i].isbn.includes(searchTerm)) {
            searchResult.innerHTML += "<p> " + bookList[i].title +
                "    " + bookList[i].author +
                "   " + bookList[i].isbn + "</p>";
            return;
        }
    }

    var bookItems = document.getElementById("BookList").getElementsByTagName("li");
    for (var j = 0; j < bookItems.length; j++) {
        var bookDetails = bookItems[j].getElementsByClassName("book-details")[0].innerText.toLowerCase();
        if (bookDetails.includes(searchTerm)) {
            searchResult.innerHTML += "<p>" + bookDetails + "</p>";
            return;
        }
    }

    searchResult.innerHTML = "Book not found.";
}


