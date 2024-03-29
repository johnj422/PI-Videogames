require('dotenv').config();
const axios = require ('axios');
const {API_KEY} = process.env;
const { Genre, Videogame } = require("../db");

const findVideogameByName = async (name) => {

    let gameByName = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`);
    //console.log(gameByName.data.results[0].name)
    let gameByNameModified = gameByName.data.results.map(game => {
        //console.log(game.name)
        let gameToShow = {
            id: game.id,
            name: game.name,
            description: game.description,
            released: game.released,
            rating: game.rating,
            platforms: game.platforms,
            background_image: game.background_image,
            genres: game.genres,
        }
        //console.log(gameToShow)
        return gameToShow
    })

    let getByNameDB = await Videogame.findAll({
        where: {
            name: name,
        },
        include: Genre 
    })
    console.log(getByNameDB)
    //console.log(gameByNameModified)
    if (gameByNameModified.length === 0 && getByNameDB.length === 0) throw `The videogame doesn't exists`
    return gameByNameModified.concat(getByNameDB)
} 


module.exports = findVideogameByName