const { Command } = require('commander');

const program = new Command()

program
    //.argument('<arg1>', 'Necessary argument 1')
    .option('-p, --port <port>', 'The port where the application will run', 8080)
    .requiredOption('-db', 'Mongo database connection link', 'mongodblink')
    .option('-r, --role <role>', `The user's role`, 'USER')

program.parse();

const opts = program.opts();

console.log(program.args)
console.log(opts)
console.log("PORT ", opts.port)
