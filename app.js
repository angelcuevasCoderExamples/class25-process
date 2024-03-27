const { fork } = require('child_process');
const express = require('express');
const { chdir } = require('process');
const { operacionCompleja } = require('./utils');

const app = express();
const port = 8080;


app.get('/calculo-no-bloq', (req, res)=>{
    const child = fork(`${__dirname}/child.js`)
    child.send('Start calculating')
    child.on('message', result=>{
        console.log('message received', result)
        res.send({result:result})
    })
})

app.get('/calculo-bloq', (req, res)=>{
    const result = operacionCompleja()
    res.send({result})
})

let visitorsCounter = 0; 

app.get('/', (req, res)=>{
    visitorsCounter++;
    res.send(`hello world!!, visits number: ${visitorsCounter}`)
})




app.listen(port,()=>console.log(`Running on port ${port}`));