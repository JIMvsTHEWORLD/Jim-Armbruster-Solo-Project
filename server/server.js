const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () =>{console.log('You\'re listening in on port 3000')});

module.exports = app;