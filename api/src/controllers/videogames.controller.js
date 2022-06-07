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

    let gamesToShow = []
    for (const game of gamesProcesed) {
        let { id, name, released, rating, platforms, genres, background_image } = game;
        gamesToShow.push({ id, name, released, rating, platforms, genres, background_image })
        }
        return gamesToShow
    


    
}

module.exports = {
    getAllVG,


}