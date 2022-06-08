require('dotenv').config();
const axios = require ('axios');
const { response } = require('express');
const {API_KEY} = process.env;
const { Genre, Videogame, Platform } = require("../db.js");
// Probando otra forma de obtener los VG

function getAllVideogames (req, res) {
    const query = req.query
    if (query) {

    }


} 

module.exports = {
    getAllVideogames
}