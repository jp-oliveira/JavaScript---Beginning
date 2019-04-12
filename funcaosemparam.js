// É possível não passar parâmetros em funções e mesmo assim utilizar parâmetros. com arguments

function err(){
    let somar = 0
    for (i in arguments){ //arguments é um arrau com todos os parâmetros que serão passados quando a função for chamada.
        somar += arguments[i]
    }
    return(somar)
}
console.log(err(1,2,3,4))
console.log(err('j','p'))  // vai concatenar O ZERO PQ ELE JÁ ESTÁ EM SOMAR junto com os parâmetros passados.
console.log(err(2,7))
console.log(err(12,3,'number'))

