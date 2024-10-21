const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        res.render('layout', { title: 'Home', body: 'pages/home', users });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Something went wrong.');
    }
})

app.get('/about', (req, res) => {
    res.render('layout', { title: 'About', body: 'pages/about', });
})

app.listen(3000, () => {
    console.log('Server in running...');
});