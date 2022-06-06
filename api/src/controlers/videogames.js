require('dotenv').config();
const axios = require ('axios');
const {API_KEY} = process.env;
const { Genre, Videogame } = require("../db");


function getAllVG (){
    
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`
    return axios.get(url) 
        .then( response => {
            //console.log(response.data.results)
            let gamesRaw = response.data.results;
            let gamesToShow = []
            for (const game of gamesRaw) {
                let { id, name, released, rating, platforms, genres, background_image } = game;
                gamesToShow.push({ id, name, released, rating, platforms, genres, background_image })
                }
                return gamesToShow
            })


    
}

module.exports = {
    getAllVG,


}