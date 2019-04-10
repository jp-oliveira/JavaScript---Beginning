function pegarnumeroentre(min,max){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

let option = 1
while(option != 3){  // se tivesse o mesmo valor que foi declarado, nem ia entrar no while
    option = pegarnumeroentre(1,5)
    console.log(`O número foi ${option}.`)
}
console.log('Adios!')

