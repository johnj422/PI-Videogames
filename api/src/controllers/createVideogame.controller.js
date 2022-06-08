const axios = require ('axios');
const { response } = require('express');
const {Genre, Videogame} = require("../db")

function vgById (req, res){
    const params = req.params

}

async function createVg (obj){

    await axios.get('http://localhost:3001/genres');

    let {name, description, released, rating, genres, platforms, background_image} = obj
    if(!name || !description || !released || !rating || !genres || !platforms || !background_image) throw 'Missing Information';

    let genresDB = genres.map(async g => {
        return await Genre.findAll({
            where: {
                name: g
            }
        })

    })
    console.log(genresDB)
    return "Creando..."
    // const newVG = await Videogame.create(obj)
    // const genre = await Genre.findAll({
    //     where: {name: genres},
    // })
    // newVG.addGenre(genre)
    // return `Videogame ${name} successsfully created`
    

}

module.exports = {
    vgById,
    createVg
}