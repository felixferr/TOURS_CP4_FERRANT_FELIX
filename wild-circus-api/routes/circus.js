const db = require('../db/db');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: true
}));

//Créer une actualité
router.post('/actualites', (req, res) =>{
    const formData = req.body;
    db.query("INSERT INTO Actualités SET ?", formData, (err, results) => {
        if(err){
            res.status(500).send(`Erreur lors de la création d'une actualité`);
            return;
        }
        if (!results) {
            res.status(400).send();
            return;
        } else {
            db.query("SELECT * FROM Actualités WHERE id = ?", results.insertId, (err, results) =>{
                if (err) {
                    res.status(500);
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});

//Modifier une actualité
router.put('/actualites/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE Actualités SET ? WHERE id = ?',[formData,id], err => {
        if(err){
            console.log(err)
            res.status(500).send('Erreur lors de la modification');
        } if (!results) {
            res.status(400).send();
        }
        
        else {
            db.query('SELECT * FROM Actualités WHERE id = ?', id, err => {
                if(err){
                    res.status(500).send();
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});

//Supprimer une actualité
router.delete('/actualites/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Actualités WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).send(`Erreur lors de la suppression d'une actualité`);
        } else {
            res.status(204).send();
        }
    })
});

module.exports = router;