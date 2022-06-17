const {Routes, Router} = require('express');
const findVideogameByName = require('../controllers/getVgByName.controller');
const router = Router();
const { getAllVG } = require ('../controllers/videogames.controller');


router.get('/videogames', async (req, res) => {
    let {name} = req.query
    
    try {
        if(name) {
            res.json(await findVideogameByName(name))
        }else{
        return res.json(await getAllVG())
        }
    } catch (e) {
        return res.json({error: e})
    }
})





module.exports = router