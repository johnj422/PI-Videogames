require ('dotenv').config();
const {API_KEY} = process.env;
const { Genre } = require ('../db');
const { response } = require('express');
const axios = require ('axios');

const importGenre = async () => {
    const genresAPI = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    //console.log(genresAPI.data.results)
    const genresRes = genresAPI.data.results;
    const names = genresRes.map(genre => genre.name);
    //console.log(names)

    names.map(name => {
        Genre.findOrCreate({
            where: {
                name: name,
            }
        })
    });

    let results = await Genre.findAll();
    return results;

    // genresRes.forEach(async (g) => {
    //     //console.log(g.name)
    //     await Genre.findOrCreate({
    //         where: {
    //             name: g.name,
    //         }
    //     })
    // });
    // const genresToPush = genresRes.map(genre => {
    //     return {
    //         id: genre.id,
    //         name: genre.name,
    //     };
    // });
    //return Genre.findAll();
}

module.exports = {
    importGenre,
}