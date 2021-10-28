
const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json()); 
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

let projectData = {};

app.post('/entry', (req, res) => {
    console.log(req.body);
    projectData = req.body,
    res.send(projectData)
    console.log('Post has been received...');
    console.log(projectData);
});

app.get('/entry', (req, res) => {
    res.send(projectData);
});

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening to port ${port}`));