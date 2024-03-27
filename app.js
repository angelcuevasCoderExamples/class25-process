const express = require('express')

const { Command } = require('commander')
const dotenv = require('dotenv')

const app =express();


/** COMMANDER */
const program = new Command();
program.option('--mode <modo>')
program.parse();

const opts = program.opts();

console.log(opts)

//** DOTENV */
console.log(opts.mode == 'production')
dotenv.config({
    path: `.env.${opts.mode}`
    //path : opts.mode == 'production ' ?  '.env.production' : '.env.development'
});

//ej: 
    //node app.js --mode production
    //node app.js --mode development

const port = process.env.port; 
app.listen(port, ()=>console.log(`running on port ${port}`))