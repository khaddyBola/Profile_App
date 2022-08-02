const path = require('path');
const express = require('express');

// EXPRESS Config
const app = express();

// REDERING STATIC FILES
const publicDiretory = path.join(__dirname, './public');
app.use(express.static(publicDiretory));



// console.log(__dirname);

// PORT Config
const port = 5000;

// EXPRESS ROUTING
// 127.0.0.1:3000 
app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1>This is About page</h1>')
});

app.get('/api', (req, res) => {
    res.send({name: 'Bolanle', location: 'Nigeria'})
});

app.get('*', (req, res) => {
    res.send('<h1>Page not found</h1>')
});





// EXPRESS LISTEN port
app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
});