require('dotenv').config();
const axios = require ('axios');
const {API_KEY} = process.env;
const { Genre, Videogame } = require("../db");

const findVideogameByName = async (name) => {

    let gameByName = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`);
    //console.log(gameByName.data.results[0].name)
    //if(gameByName.data.results.length === 0) throw `Game ${name} not found`;
    let gameByNameModified = gameByName.data.results.map(game => {
        //console.log(game.name)
        let gameToShow = {
            name: game.name,
            background_image: game.background_image,
            genres: game.genres
        }
        //console.log(gameToShow)
        return gameToShow
    })
    //console.log(gameByNameModified)
    return gameByNameModified
} 

module.exports = findVideogameByName