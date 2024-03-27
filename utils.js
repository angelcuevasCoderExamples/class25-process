function operacionCompleja() {
    let result = 0;
    for(let i = 0; i < 50000000000; i++){
        result += i;
    }
    return result;
}

module.exports = {
    operacionCompleja: operacionCompleja
}