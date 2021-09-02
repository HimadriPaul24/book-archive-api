let result = document.getElementById('result');
let searchResult = document.getElementById('search-result');

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    //clear data
    searchField.value = '';




    searchResult.textContent = '';
    if (searchText === '') {
        result.innerText = 'Please Provide A Name';

    }
    else {
        //load data

        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.books))
            .then(data => displaySearchResult(data));


    }
}


//showing search result 
const displaySearchResult = books => {



    searchResult.textContent = '';

    if (books.numFound === 0) {
        result.innerText = 'No Result Found';
    }
    else {


        result.innerText = `Total Result: ${books.numFound}`;
        // result.innerText = `Showing Output: ${books.length}`;

        const bookList = books.docs;

        bookList.forEach(book => {

            if (book.cover_i !== undefined && book.author_name !== undefined && book.publisher !== undefined) {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="book-image">
                    <div class="card-body">
                    <h3 class="book-title">Book-Title: ${book.title}</h3>
                    <h4 class="writer-name">Author-name: ${book.author_name}</h4>
                    <h5 class="publisher">Publisher: ${book.publisher}</h5>    
                    <h5 class="publish-date">Publish-Date: ${book.first_publish_year}</h5>    
                    </div>
                </div>
            `
                searchResult.appendChild(div);
            }
        });
    }
}

