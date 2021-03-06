import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const key = 'a107a6bebb82140d8f25bc15d64b1460';
    
        try{
            //api link
            //search by keyword
            //const res = await axios(`https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${this.query}&page=1`);
            
            //search by movies
            const res = await axios(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${this.query}`);
            
            console.log(res);
            this.results = res.data.results;
        }
        catch (error){
            console.log(error);
            alert(error);
        }
    }
}

