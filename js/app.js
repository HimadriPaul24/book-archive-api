// console.log(9);
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';


    // const url = `https://openlibrary.org/search.json?q=${searchText}`;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    // console.log(url);

    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.docs))
        .then(data => displaySearchResult(data.docs))

}

//showing search result 
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
             <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
               <h4 class="card-title">${title}</h4>
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    })
}

