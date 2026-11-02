/**
* Serveur Backend Pokedex
*/

console.log ("Hello World!");
// Définir l'emplacement des fichiers bases de données
const POKEDEX_SRC = "./DATA/pokedex.json";
// Définir l'emplacement des images
const IMAGES_SRC = "./FILES/images";
// Définir un port
const PORT = 5001;
// ************************************************
// Lancer un serveur express sur un port défini
const fs = require('fs');
// npm install express
const express = require('express');
const app = express();

app.use(express.json());

function getallPokemons(req, res) {
    // Lire le fichier pokedex.json
    fs.readFile(POKEDEX_SRC, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du fichier pokedex.json');
            return;
        }
    });
    const pokedex = JSON.parse(data);
    res.json(pokedex);
}
// const pokedex = JSON.parse(fs.readFileSync(POKEDEX_SRC, 'utf8'));

//On affiche le contenu du fichier pokedex.json
app.get('/api/v1/pokemons', (req, res) => {
    getallPokemons(req, res);
});
// Lancement du serveur et attendre
app.listen(
    PORT,
    '0.0.0.0'
    ,
    () => {
        console.log('Server Pokedex is listening on ' + PORT);
    }
)