import express from 'express';

const router = express.Router();

// Rutas 
router.get('/', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.send('Hola Mundo desde Express');
})
router.get('/nosotros', (req, res) => {
    res.render('nosotros');
})

export default router;