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
        let { name, genres, background_image } = game;
        gamesAPI.push({ name, genres, background_image })
        }
        
        return gamesAPI
    // let gamesDB = await Videogame.findAll({
    //     attributes: [name, background_image], 
    //     include: [Genre],
    // })
    // console.log(gamesDB)
    // return gamesDB


    
}

module.exports = {
    getAllVG,


}