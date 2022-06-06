const {Routes, Router} = require('express');
const router = Router();
const model = require ('./functions');

router.get('/videogames', async (req, res) => {
    try {
        res.json(await model.getAllVG())
    } catch (e) {
        res.send(e)
    }
})




module.exports = router