const hbs = require('hbs');

hbs.registerHelper('getYear', ()=> {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    const palabras = text.split(' ');
    palabras.forEach( (palabra, index) => {
        palabras[index]= palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});