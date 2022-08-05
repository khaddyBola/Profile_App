const path = require('path');
const express = require('express');
const hbs = require('hbs');

// EXPRESS Config
const app = express();
app.set('view engine', 'hbs')


// REDERING STATIC FILES
const publicDiretory = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');
app.use(express.static(publicDiretory));
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);



// console.log(__dirname);

// PORT Config
const port = 5000;

// EXPRESS ROUTING
// 127.0.0.1:3000 
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/api', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You have to put a search item 😋'
        })
    } else {
        res.send({name: 'Bolanle', location: 'Nigeria'})

    }
});

app.get('*', (req, res) => {
    res.send('<h1>Page not found</h1>')
});




// EXPRESS LISTEN port
app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
});