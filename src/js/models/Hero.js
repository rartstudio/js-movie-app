import axios from 'axios';

export default class Hero {
    constructor(id,type){
        this.id = id;
        this.type = type;
    }

    async getHero(){
        const key = 'a107a6bebb82140d8f25bc15d64b1460';
    
        try{
            //api link
            //search by keyword
            //const res = await axios(`https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${this.query}&page=1`);
            
            //search by movies
            const res = await axios(`https://api.themoviedb.org/3/${this.type}/${this.id}?api_key=${key}`);
            this.results = res.data;
            //console.log(this.results);
        }
        catch (error){
            //console.log(error);
            alert(error);
        }
    }
}

