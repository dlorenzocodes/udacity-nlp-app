
const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');


app.use(express.json()); 
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

let projectData = {};

app.post('/entry', (req, res) => {
    projectData = req.body,
    res.send(projectData)
    console.log(projectData.articleURl);
    console.log('Post has been received...');
});

app.get('/urlData', async (req, res) => {
    const baseURl = 'https://api.meaningcloud.com/sentiment-2.1';
    const inputURl = projectData.articleURl;
    console.log(inputURl);
    const apiKey = process.env.API_KEY;

    const response = await fetch(`${baseURl}key=${apiKey}&url=${inputURl}&leng=en`)
    const data = await response.json();
    console.log(data);
    console.log('Post 2 has been received...');
    res.send(data);
});



const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening to port ${port}`));