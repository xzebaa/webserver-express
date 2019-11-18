const express = require('express');
const app = express();
const hbs = require('hbs');
app.use( express.static(__dirname + '/public'))

require('./hbs/helpers');
// express hbs engine
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

// respond with "hello world" when a GET request is made to the homepage
app.get('/asd', (req, res) => {

    let data = {
        nombre: 'seba',
        apellido: 'alvarez',
        edad: 29,
        url: req.url,
    }
    res.send(data);
});


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'negro mata pacos',
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Negro mata pacos',
    });
});

const port = process.env.PORT || 3000;

const startServer = () => {
    console.log(`Iniciaindo servidor por puerto ${port}`);
}

app.listen(port, startServer);