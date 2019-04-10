function gerarnumentre(min,max){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}               // essa sintaxe do while é muito pouco usada.
let vari = 3
do { 
vari = gerarnumentre(2,7)
console.log('O número gerado foi o seguinte:' + vari)
} while (vari!= 5) //no while, se essa condição for igual ao valor da variavel, ele nem entra no while(ver la).aqui pode.
                  // exemplo: se essa condição do while for igual ao valor do let la em cima, ele realiza o while uma vez.
console.log('Au Revoir!')