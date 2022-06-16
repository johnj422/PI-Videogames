const {Routes, Router} = require('express');
const { importGenre } = require('../controllers/genres.controller');
const Genre = require('../db');
const router = Router();

router.get('/genres', async (req, res) => {
    try {
        let response = await importGenre()
        res.json(response)
    } catch (e) {
        res.send({error: e})
    }
})




module.exports = router