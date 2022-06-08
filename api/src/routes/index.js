const { Router } = require('express');
const videogames = require ('./videogames');
const createVideogame = require ('./createVideogame');
const genres = require ('./genres');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/',createVideogame);
router.use('/',videogames);
router.use('/',genres);
//router.use('/',platforms);
//router.use('/',videogame);



module.exports = router;
