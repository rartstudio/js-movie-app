import {elements} from './base';

export const renderMovieModal = modal => {
    const markup = `
    <div class="modal-container">
        <div class="modal-img-container">
            <img src="${'https://image.tmdb.org/t/p/w300/'+ modal.poster_path}" alt ="${modal.original_title}" class="section-modal-img">
        </div>
        <div class="modal-description">
            <h2>${modal.original_title}</h2>
            <p class="vote-average"> Vote Average : ${modal.vote_average}</p>
            <p class="popularity">Popularity : ${modal.popularity}</p>
            <p class="release-date">Release Date: ${modal.release_date}</p>
            <p class="genre">Genre : ${
                modal.genres.map(el => el.name)
            }</p>
            <p class="language">Language : ${modal.original_language}</p>
            <p class="overview">Overview : <br>${modal.overview}</p>
        </div>    
    </div>
    `;

    elements.modal.insertAdjacentHTML('afterbegin', markup);

}