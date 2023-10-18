const express = require('express');
const db = require('./db');


const app = express();
const port = 3001; // Port sur lequel votre serveur écoutera

// Exemple de route Express
app.get('/', (req, res) => {
    res.send('Backend is running.');
});

// Écoutez le serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});