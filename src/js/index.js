import Hero from './models/Hero';
import DiscoverTvSeries from './models/DiscoverTvSeries';
import DiscoverMovie from './models/DiscoverMovie';
import MovieModal from './models/MovieModal';
import Search from './models/Search';
import * as heroView from './views/heroView.js';
import * as discoverMovieView from './views/discoverMovieView.js';
import * as discoverTvSeriesView from './views/discoverTvSeriesView.js';
import * as movieModal from './views/movieModalView.js';
import * as searchView from './views/searchView.js';
import {elements,navSlide,searchInput} from './views/base';

const state = {};
window.state = state;

const controlSearch = async () => {
    const query = searchView.getInput();

    if(query) {
        state.search = new Search(query);
        
        searchView.clearInput();
        searchView.clearResults();

        try {
            await state.search.getResults();
            searchView.renderResultsSearch(state.search.results);

            elements.resultsItems.addEventListener('click',e => {

                if (e.target.matches('.results-search__items, .results-search__items *')){
        
                    const id = parseInt(e.target.parentNode.parentNode.id);
                    const data = parseInt(e.target.parentNode.parentNode.dataset.togo)
                    controlHero(id,state.search.results[data].media_type);
                }
            });
        }
        catch (err) {
        }
    }
}

const controlHero = async (id,type) => {

    state.hero = new Hero(id,type);

    try{
        await state.hero.getHero();
        window.scrollTo(0,0);
        heroView.clearResults();
        heroView.renderHero(state.hero.results,state.hero.type);
    }
    catch (err) {
    }
}

const controlDiscoverMovie = async () => {

    state.discoverMovie = new DiscoverMovie('popularity.desc');

    try{
        await state.discoverMovie.getDiscoverMovie();
        discoverMovieView.renderDiscoverMovie(state.discoverMovie.results);
    }
    catch (err) {
    }
}

const controlDiscoverTvSeries = async () => {
    state.discoverTvSeries = new DiscoverTvSeries('popularity.desc');

    try {
        await state.discoverTvSeries.getDiscoverTvSeries();
        discoverTvSeriesView.renderDiscoverTvSeries(state.discoverTvSeries.results);
    }
    catch (err) {
    }
}

const controlMovieModal = async (id) => {
    state.movieModal = new MovieModal(id);

    try {
        await state.movieModal.getMovieModal();
        movieModal.renderMovieModal(state.movieModal.results);
    }
    catch (err) {
        console.log(err);
        alert('something wrong when get movie modal');
    }
}

window.addEventListener('load',()=>{
    controlDiscoverMovie();
    controlDiscoverTvSeries();
    navSlide();
    searchInput();
});

window.addEventListener('click',()=>{
    document.querySelector('.results-search').style.display='none';
})

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.movieCard.addEventListener('click',(e,type='movie') =>{

    if (e.target.matches('.card-link, .card-link *')){
        
        const id = parseInt(e.target.parentNode.parentNode.id);
        controlHero(id,type);
        console.log(e);
    }
    else if (e.target.matches('.card__button, card__button *')){
        console.log(e);
    }
});

elements.tvSeriesCard.addEventListener('click',(e,type ='tv')=>{
    if (e.target.matches('.card-link, .card-link *')){
        
        const id = parseInt(e.target.parentNode.parentNode.id);
        controlHero(id,type);
    }
});

elements.modalClose.addEventListener('click', e => {
    // console.log(e);
    e.target.parentNode.style.display = 'none';
    e.target.parentNode.parentNode.firstElementChild.style.display = 'none';
    e.target.parentNode.firstElementChild.remove();
});
