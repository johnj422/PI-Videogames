const { Router } = require('express');
const videogames = require ('./videogames');
const createVideogame = require ('./createVideogame');
const genres = require ('./genres');
const videogameByID = require ('./videogameByID')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/',videogames);
router.use('/',createVideogame);
router.use('/',videogameByID);
router.use('/',genres);

//router.use('/',platforms);
//router.use('/',videogame);



module.exports = router;
