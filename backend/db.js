const mysql2 = require('mysql2');

const db = mysql2.createConnection
({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weird_city'
});

// Établir la connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
    } else {
        console.log('Connexion à la base de données établie.');
    }
    });
    
module.exports = db;
