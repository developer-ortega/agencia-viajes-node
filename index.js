import express from 'express';

const app = express();

// Definir el puerto
const port = process.env.PORT || 4000;

// Ruta de ejemplo
app.get('/', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.send('Hola Mundo desde Express');
})

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
})