const express = require('express');
const app = express();

app.get('/aldaz', (req, res) => {
    res.send('Jostin Aldaz, 21 años, Estudiante de Desarrollo de Software, adepto a la lectura de manga.');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/aldaz`);
});
