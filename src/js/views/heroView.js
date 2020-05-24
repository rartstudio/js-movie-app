import {elements} from './base';

export const clearResults = () => {
    elements.heroSection.innerHTML = '';
}

export const renderHero = (hero,type) => {
    const markup = `
    <h2 class="section-title">Your ${type} Detail</h2>
    <div class="hero-container">
        <div class="hero-img-container">
            <img src="${'https://image.tmdb.org/t/p/w300/'+ hero.poster_path}" alt ="${type === 'movie' ? hero.original_title : hero.original_name}" class="section-hero-img">
            </div>
            <div class="hero-description">
            <h2>${type === 'movie' ? hero.original_title : hero.original_name}</h2>
            <p class="vote-average"> Vote Average : ${hero.vote_average}</p>
            <p class="popularity">Popularity : ${hero.popularity}</p>
            <p class="release-date">Release Date: ${type === 'movie' ? hero.release_date : hero.first_air_date}</p>
            <p class="genre">Genre : ${
                hero.genres.map(el => el.name)
            }</p>
            <p class="language">Language : ${hero.original_language}</p>
            <p class="overview">${hero.overview}</p>
        </div>
    </div>
    `;

    elements.heroSection.insertAdjacentHTML('beforeend',markup);
}