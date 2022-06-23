require('dotenv').config();
const axios = require ('axios');
const {API_KEY} = process.env;
const { Genre, Videogame } = require("../db");

const findVideogameByID = async (id) => {

    if(id.length > 10){

        let getByIdDB = await Videogame.findByPk(id,{include: Genre})

        return getByIdDB
    }
    if(id.length < 10){
    let gameByID = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    //console.log(gameByID.data.id)
    let newGameByID =  {
        //console.log(game.name)
            id: gameByID.data.id,
            name: gameByID.data.name,
            description: gameByID.data.description,
            released: gameByID.data.released,
            rating: gameByID.data.rating,
            platforms: gameByID.data.platforms.map(p => p.platform.name),
            background_image: gameByID.data.background_image,
            genres: gameByID.data.genres,
        //console.log(gameToShow)
        }
        return newGameByID
    }
} 



module.exports = findVideogameByID