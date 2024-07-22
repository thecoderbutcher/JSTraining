const express  = require('express');
const debug    = require('debug')('app:server'); 
const app      = express();
const {Config} = require('./src/config/index');
const {TaskAPI}   = require('./src/tasks/index');
const {IndexAPI, NotFoundAPI} = require('./src/index/index');

app.use(express.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Modulos
IndexAPI(app);
TaskAPI(app);
NotFoundAPI(app);

app.listen(Config.port, () => debug(`Servidor escuchando en el puerto ${Config.port}`))