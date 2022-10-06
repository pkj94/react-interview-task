const express = require('express');
const app = express();
app.get('/movies', (req, res, next) => {
    let movies = require('./data.json')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','*')
    res.status(200).send(movies);
});
app.listen(4000, () => {
    console.log('Service started on port: 4000')
})