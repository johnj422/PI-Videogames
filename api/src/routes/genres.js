const {Routes, Router} = require('express');
const { importGenre } = require('../controllers/genres.controller');
const Genre = require('../db');
const router = Router();

router.get('/genres', async (req, res) => {
    try {
        let response = await importGenre()
        return res.json(response)
    } catch (e) {
        return res.json({error: e})
    }
})




module.exports = router