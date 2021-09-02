const result = document.getElementById('result');
const searchResult = document.getElementById('search-result');



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
            // .then(data => console.log(data.docs))
            .then(data => displaySearchResult(data.docs));


    }
}


//showing search result 
const displaySearchResult = docs => {
    docs = docs.filter(element => element.author_name !== undefined || element.publisher !== undefined || element.first_publish_year !== undefined || element.cover_i !== undefined);
    searchResult.textContent = '';


    if (docs.length === 0) {
        result.innerText = 'No Result Found';
    }
    else {
        result.innerText = `Total Result: ${docs.length}`;

        docs.forEach(docs => {
            console.log(docs);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-100">
             <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="book-image">
            <div class="card-body">
               <h3 class="book-title">Book-Title: ${docs.title}</h3>
               <h4 class="writer-name">Author-name: ${docs.author_name}</h4>
               <h5 class="publisher">Publisher: ${docs.publisher}</h5>    
               <h5 class="publish-date">Publish-Date: ${docs.first_publish_year}</h5>    
            </div>
        </div>
        `


            searchResult.appendChild(div);
        })
    }
}

