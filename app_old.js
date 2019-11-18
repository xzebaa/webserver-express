const http = require('http');

http.createServer( (req, resp) => {

    resp.writeHead(200, {'Content-Type':'application/json'})

    let data = {
        nombre: 'seba',
        apellido: 'alvarez',
        edad: 29,
        url: req.url,
    }
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(8080);