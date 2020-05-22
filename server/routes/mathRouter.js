const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/calculations', (req, res) => {
    console.log('in post mathRouter POST with req.body ', req.body);

    let query = `INSERT INTO "Calculations" ("valueOne", "valueTwo", "operatorAction", "result")
                VALUES ($1, $2, $3, $4);`;
    pool.query(query, [req.body.valueOne, req.body.valueTwo, req.body.operatorAction, req.body.result])
        .then((result) => {
            console.log('back from post mathRouter with result: ', result);
            res.send(result.rows);
        }).catch((error) => {
            console.log('error in POST in post mathRouter: ', error);
            res.sendStatus(500);
        })
})

router.get('/calculations', (req, res) => {
    console.log('in set equations GET');
    let query = `SELECT * FROM "Calculations"
                ORDER BY "id" DESC
                FETCH FIRST 10 ROWS ONLY;`;

    pool.query(query)
    .then((result) => {
        console.log('back from GET in set equation with result: ', result);
        res.send(result.rows);
        }).catch((error) => {
            console.log('error in GET in getDogsRouter router: ', error);
            res.sendStatus(500);
        }) 
    })
    


module.exports = router;