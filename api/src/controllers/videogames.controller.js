require('dotenv').config();
const axios = require ('axios');
const { response } = require('express');
const {API_KEY} = process.env;
const { Genre, Videogame } = require("../db");


async function getAllVG (){

    let hundredGames = [];

    for (let page =1; page < 6; page++){
        let pags = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`;
        hundredGames.push(pags);
    }
    const gamesRaw = await Promise.all(hundredGames.map((vg) => 
    axios(vg).then((r) => r.data.results)));
   
    let gamesProcesed = gamesRaw.flat();

    let gamesAPI = []
    for (const game of gamesProcesed) {
        let { id, name, genres, background_image } = game;
        gamesAPI.push({ id, name, genres, background_image })
        }
        
        //return gamesAPI;

    let gamesDB = await Videogame.findAll({include: Genre});


    gamesDB = gamesDB.map(game => {
        console.log(game.dataValues)
        let gameDBToShow = {
            id: game.dataValues.id,
            name: game.dataValues.name,
            background_image: game.dataValues.background_image,
            genres: game.dataValues.genres
        }
        return gameDBToShow
    })
    
    return gamesAPI.concat(gamesDB)


    
}

module.exports = {
    getAllVG,


}