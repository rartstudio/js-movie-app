import {elements,limitTitle} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
    elements.resultsItems.innerHTML = '';
}

export const renderResultsSearch = search => {

    elements.resultsSearch.style.display = 'block';

    search.map((search,index) => {
        elements.resultsItems.insertAdjacentHTML('beforeend',` 
            <li class="results-search__item" id="${search.id}" data-togo="${index}">
                <div class="results-item__img">
                    <img src="${'https://image.tmdb.org/t/p/w300/'+ search.poster_path}" alt ="${search.original_title}" class="item__img">
                </div>
                <div class="result-item__desc">
                    <p class="result_title">${search.media_type === 'movie' ? limitTitle(search.title,30) : limitTitle(search.name,30)}</p>
                    <p class="result_media">${search.media_type}</p>
                    <p class="result_popularity">Popularity : ${search.popularity}</p>
                    <p class="result_date">${search.media_type === 'movie' ? 'Release Date' : 'First Air Date'} : ${search.media_type === 'movie' ? search.release_date : search.first_air_date}</p>
                </div>
            </li>
        `);
    });
}