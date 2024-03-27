
process.on('exit', (code)=>{
    console.log(`Process ended with code ${code}`)
    if(code == -4){
        console.log('Proceso finalizado por argumentación inválida en una función')
    }
})


const listNumbers = (...numbers)=>{
    const types = numbers.map(n=> typeof n)

    let isValid = types.every(t=> t == "number")

    if(!isValid){
        process.exit(-4)
    }
}

listNumbers(1,2, "3")