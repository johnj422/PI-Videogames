const { Router } = require('express');
const videogames = require ('./videogames');
const videogame = require ('./videogame');
const platforms = require ('./platforms');
const genres = require ('./genres');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/',videogames);
router.use('/',genres);
//router.use('/',platforms);
//router.use('/',videogame);



module.exports = router;
