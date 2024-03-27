const { operacionCompleja } = require("./utils")

process.on('message', message=>{
    console.log('message received', message)
    const result = operacionCompleja()
    process.send(result)
})



