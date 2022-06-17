const {Router} = require('express');
const router = Router();
const { createVg } = require('../controllers/createVideogame.controller');


router.post('/videogames', async (req, res) => {
    try {
        let newVG = await createVg(req.body);
        return res.status(201).json(newVG)
    } catch (e) {
        return res.json({error: e})
        
    }
})

module.exports = router