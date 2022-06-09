const {Router} = require('express');
const findVideogameByID = require('../controllers/getVgByID.controller');
const router = Router();

router.get('/videogames/:id', async (req, res) => {
   
    let {id} = req.params
    
    try {
       
        res.json(await findVideogameByID(id))
        
    } catch (e) {
        res.send('Videogame doesn`t exists')
    }
})

module.exports = router