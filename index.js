import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Middleware
app.use( (req, res, next) => {

    const year = new Date();
    res.locals.actualYear = year.getFullYear();

    next();
})

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar rutas
app.use(router);

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
})