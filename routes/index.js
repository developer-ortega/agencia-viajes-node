import express from 'express';

const router = express.Router();

// Rutas 
router.get('/', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render('inicio');
})
router.get('/nosotros', (req, res) => {
    res.render('nosotros'); 
    /*const viajes = 'Viaje a Alemania';
    res.render('nosotros', { viajes }); // renderiza la vista de PUG*/
})

export default router;