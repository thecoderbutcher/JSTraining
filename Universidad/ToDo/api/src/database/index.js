const {MongoClient} = require('mongodb');
const {Config}      = require('../config/index');
const debug         = require('debug')('app:database');

var connection = null;

module.exports.Database = (collection) => new Promise(async (resolve, reject) =>{
    try {
        if(!connection){ // Singleton pattem
            const client = new MongoClient(Config.mongoUri);
            connection   = await client.connect();
            debug('Conexion establecida');
        }
        debug("Reutilizando conexion");
        const db = connection.db(Config.mongoDbName);
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
})