const express = require('express');
const server = express();
const routes = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3001;

server.use(cors());
server.use(morgan('tiny'))

server.use(express.json())
server.use("/rickandmorty", routes) 


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });
















/*var http = require('http');
var getCharById = require('./controllers/getCharById');

http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;

    if (url.includes("/rickandmorty/character")){

        let id=url.split('/').pop();

        //id=Number(id);
        try {
            let character = await getCharById(id)

            if(character?.name) {
                res.writeHead(200, {"Content-type": "application/json"})
                res.end(JSON.stringify(character))
            } else {
                res.writeHead(404, {"Content-type": "text/plain"})
                res.end("No se encontro un personaje con ese id")
            }
        } catch {
            res.writeHead(500, {"Content-type": "text/plain"})
            res.end("Fallo de conexion con la api")
        }
    }
}).listen(3001, "localhost"); //127.0.0.1*/