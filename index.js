import express from 'express';
import router from './routes/index.js';

const app = express();

// Agregar rutas
app.use(router);

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
})