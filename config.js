const dotenv = require('dotenv')

const environment = "PRODUCTION"

//dotenv.config(); busca el .env por default

dotenv.config({
    path: environment == "PRODUCTION"  ? `${__dirname}/.env.production` : `${__dirname}/.env.development`
});

//console.log('port', process.env.port)
//console.log(process.env)
//console.log(process.env.port)

const {port, enviroment, MONGO_DB_URL} = process.env;
module.exports = {
    port, 
    enviroment, 
    MONGO_DB_URL
}