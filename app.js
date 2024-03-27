const { fork } = require('child_process');
const express = require('express');
const { chdir } = require('process');

const app = express();
const port = 8080;


app.get('/suma', (req, res)=>{
    //const result= operacionCompleja();
    const child = fork(`${__dirname}/child.js`)
    child.send('Start calculating')
    child.on('message', result=>{
        console.log('message received', result)
        res.send({result:result})
    })

    
})

app.get('/', (req, res)=>{
    res.send('hello world')
})

// function operacionCompleja() {
//     let result = 0;
//     for(let i = 0; i < 50000000000; i++){
//         result += i;
//     }
//     return result;
// }


app.listen(port,()=>console.log(`Running on port ${port}`));