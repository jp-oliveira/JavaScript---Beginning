Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimir = function (nota){
    if (nota.entre(9,10)){    // só uma das condições é contemplada. se uma for realizada, sai do bloco if.
        console.log('Homenageado por mérito.')
    } else if (nota.entre(6,8.99)){
        console.log('Aprovado, parabéns!')
    } else if (nota.entre(4,5.99)){
        console.log('De Recuperação.')
    } else if (nota.entre(0,3.99)) {
        console.log('Reprovado(a)!!')
    } 
     else console.log('nota inválida!')
}    
imprimir(4.6)
imprimir(6.7)
imprimir(9.3)
imprimir(3.2)
imprimir(11)

