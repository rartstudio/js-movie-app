export const elements = {
    burgerMenu : document.querySelector('.burger-menu'),
    heroImgCon : document.querySelector('.hero-img-container'),
    heroDesc : document.querySelector('.hero-description'),
    heroSection : document.querySelector('.section-hero'),
    heroContainer : document.querySelector('.hero-container'),
    hero : document.querySelector('.hero'),
    movieCard : document.querySelector('.movie .card'),
    tvSeriesCard : document.querySelector('.tv .card'),
    modal : document.querySelector('.modal'),
    backdrop : document.querySelector('.backdrop'),
    modalClose : document.querySelector('.btn-modal-close'),
    resultsSearch : document.querySelector('.results-search'),
    resultsItems : document.querySelector('.results-search__items'),
    searchInput : document.querySelector('.search-input'),
    searchBar : document.querySelector('.search-bar'),
    searchForm : document.querySelector('.search-form'),
    btnSearch : document.querySelector('.btn-search-input'),
    logo : document.querySelector('.nav-logo')
}

export const limitTitle = (title, limit = 17) =>{
    const newTitle = [];
    if (title.length > limit){
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        //return the result more than 17
        return `${newTitle.join(' ')}...`;
    }
    //less than 17
    return title;
}

export const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

export const searchInput = () => {
    elements.btnSearch.addEventListener('click',() => {
        elements.searchInput.classList.toggle('onactive');
        elements.logo.classList.toggle('inactive');
        elements.searchForm.classList.toggle('expansion');
    });
}