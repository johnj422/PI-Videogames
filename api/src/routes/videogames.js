const {Routes, Router} = require('express');
const router = Router();
const { getAllVG } = require ('../controllers/videogames.controller');


router.get('/videogames', async (req, res) => {
    try {
        res.json(await getAllVG())
    } catch (e) {
        res.send(e)
    }
})





module.exports = router