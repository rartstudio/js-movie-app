import axios from 'axios';

export default class MovieModal {
    constructor(id){
        this.id = id;
    }

    async getMovieModal(){
        const key = 'a107a6bebb82140d8f25bc15d64b1460';
    
        try{
            //api link
            //search by keyword
            //const res = await axios(`https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${this.query}&page=1`);
            
            //search by movies
            const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&language=en-US`);
            this.results = res.data;
            //console.log(res);
            
        }
        catch (error){
            //console.log(error);
            alert(error);
        }
    }
}

