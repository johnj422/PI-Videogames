require('dotenv').config();
const fs = require('fs');
const axios = require ('axios');
const {API_KEY} = process.env;
const { Platform } = require ("../db");



function platform (req, res) {
    
    res.json({msg: 'Platform route'})
}

module.exports = {
    platform,
}