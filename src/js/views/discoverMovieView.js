import {elements,limitTitle} from './base';

export const renderDiscoverMovie = movie => {

    movie.map(movie => {
        elements.movieCard.insertAdjacentHTML('beforeend',`
        <li class="card-item" >
        <a class="card__button">
                    <span class="card__button-img">
                        <img class="button-img" src="img/love-and-romance.svg"/>
                    </span>
                </a>
            <a class="card-link" id="${movie.id}" >
                <div class="card-item__img">
                    <img class="card__img" src="${'https://image.tmdb.org/t/p/original'+ movie.poster_path}" alt="${limitTitle(movie.title)}" >
                    <p class="card__vote-average">${movie.vote_average}</p>
                </div>
                
                <div class="card-item__desc">
                    <h3 class="card__title">${limitTitle(movie.title)}</h3>
                    <p class="card__popularity">Popularity : ${movie.popularity}</p>
                </div>
            </a>
            
        </li>`);
    });
};