import {elements,limitTitle} from './base';

export const renderDiscoverTvSeries = tvSeries => {

    tvSeries.map(tvSeries => {
        elements.tvSeriesCard.insertAdjacentHTML('beforeend',`
        <li class="card-item" >
            <a class="card-link" id="${tvSeries.id}" href="#hero">
                <div class="card-item__img">
                    <img class="card__img" src="${'https://image.tmdb.org/t/p/original'+ tvSeries.poster_path}" alt="${limitTitle(tvSeries.name)}" >
                    <p class="card__vote-average">${tvSeries.vote_average}</p>
                </div>
                <a class="card__button">
                    <span class="card__button-img">
                        <img class="button-img" src="img/love-and-romance.svg"/>
                    </span>
                </a>
                <div class="card-item__desc">
                    <h3 class="card__title">${limitTitle(tvSeries.name)}</h3>
                    <p class="card__popularity">Popularity : ${tvSeries.popularity}</p>
                </div>
            </a>
        </li>`);
    });
};