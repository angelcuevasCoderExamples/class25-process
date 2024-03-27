const express = require('express');
const { port, enviroment, MONGO_DB_URL } = require('./config');

const app = express(); 

app.listen(port, ()=>{
    console.log(`running on port ${port}, enviroment ${enviroment}, mongo connecition link ${MONGO_DB_URL}`)
})
