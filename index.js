// get error line 
const errorDiv = document.getElementById('error')


//search book function
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';
    if (searchText === '') {
        errorDiv.innerHTML = `<h2>Search Text Can not be Empty</h2>`;
        return;
    }
    else {
        //load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayBook(data.docs))
    }
}

// display books function
const displayBook = books => {
    //clear error line
    if (books === "Not Found") {
        errorDiv.innerText = `<h2> NO Result found</h2>`
    }
    else {
        errorDiv.innerText = "";
    }
    const showBooks = document.getElementById('book-display');
    books.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card"
        <div class="card-body">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
            <h4 class="card-title">${book.title}</h4>
            <p class="card-text">${book.author_name}</p>
            <p class="card-text">First Published:${book.publish_year}</p>
        </div>
        </div>`;
        showBooks.appendChild(div);
    })
    const numbers = document.getElementById('books-number')
    const div = document.createElement('div')
    div.innerHTML = `<h2>The book number found${books.length}</h2>`;
    numbers.appendChild(div)

}
