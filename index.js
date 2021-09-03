const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';
    if (searchText === '') {
        console.log('nothing to search')
    }
    else {
        //load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`
        try {
            fetch(url)
                .then(res => res.json())
                .then(data => displayBook(data.docs))
        }
        catch (error) {
            console.log(error);
        }
    }
}
const displayBook = books => {
    const showBooks = document.getElementById('book-display')
    if (books.length === 0) {
        //nothing found
    }
    books.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card"
        <img src="${book.cover_i}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.author_name[0]}.</p>
            <p class="card-text">${book.publish_year[0]}.</p>
        </div>
        </div>`;
        showBooks.appendChild(div);

        const foundedBooks = book;
        console.log(foundedBooks)
    })
}