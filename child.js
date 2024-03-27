process.on('message', message=>{
    console.log('message received', message)
    const result = operacionCompleja();
    process.send(result)
})



function operacionCompleja() {
    console.log("doint complex operation")
    let result = 0;
    for(let i = 0; i < 5000000000; i++){
        result += i;
    }
    return result;
}