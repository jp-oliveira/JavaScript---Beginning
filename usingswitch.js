const imprimir = function(nota){
    if (nota - Math.floor(nota) >= 0.6 ){
        switch(Math.ceil(nota)){  // tá arredondando pra cima pq switch só trabalha com inteiros.
            case 10: case 9:  //caso seja 10 ou 9 faça isso
                console.log('Aprovadx com honras!')
                break  // IMPORTANTE COLOCAR BREAK PARA NÃO FAZER DIFERENTES CONDIÇÕES
            case 8: case 7: case 6:
                console.log('Aprovadx!!')
                break
            case 5: case 4:
                console.log('De Recuperação!!')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado!')
                break
            default:
                console.log('Nota Inválida.') 
        }
   } else{
    switch(Math.floor(nota)){  // tá arredondando pra cima pq switch só trabalha com inteiros.
        case 10: case 9:  //caso seja 10 ou 9 faça isso
            console.log('Aprovadx com honras!')
            break  // IMPORTANTE COLOCAR BREAK PARA NÃO FAZER VARIAS VEZES DIFERENTES CONDIÇÕES
        case 8: case 7: case 6:
            console.log('Aprovadx!!')
            break
        case 5: case 4:
            console.log('De Recuperação!!')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota Inválida.') 
    }   }
}
imprimir(5.8)
imprimir(7.6)
imprimir(9.2)
