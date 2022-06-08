const {Routes, Router} = require('express');
const router = Router();
const { getAllVG } = require ('../controllers/videogames.controller');

// router.post('/videogames', async (req, res) => {
//     try {
//         let newVG = await createVg(req.body);
//         res.send("newVG")
//     } catch (e) {
//         res.send(e)
        
//     }
// })
router.get('/videogames', async (req, res) => {
    try {
        res.json(await getAllVG())
    } catch (e) {
        res.send(e)
    }
})





module.exports = router