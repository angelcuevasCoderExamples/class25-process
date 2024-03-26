console.log('Folder :', process.cwd())
console.log('O.S. :', process.platform)
console.log('Process Id :', process.pid)
console.log('Memory usage:' , process.memoryUsage())
console.log('Node version', process.version)

const args = process.argv.slice(2)

console.log('arguments', args)