import axios from 'axios';

export default class DiscoveryTvSeries {
    constructor(popularity){
        this.popularity = popularity;
    }

    async getDiscoverTvSeries(){
        const key = 'a107a6bebb82140d8f25bc15d64b1460';
    
        try{
            //api link
            //search by keyword
            //const res = await axios(`https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${this.query}&page=1`);
            
            //search by movies
            const res = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=${this.popularity}&page=1`);
            this.results = res.data.results;
            console.log(res);
            
        }
        catch (error){
            //console.log(error);
            alert(error);
        }
    }
}

