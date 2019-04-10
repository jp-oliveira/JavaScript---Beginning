//break - switch, for e while. Exemplo:

var v1 = [1,3,4,7,11,13,22,88,9,10]
for (i in v1){
    if (i == 5) break  // quando o i assumir o valor 5, o for irá parar de rodar. Não inclui o 5
    console.log(`Elemento de índice ${i} = ${v1[i]}`)
}

// continue- para for e while. Ex:
console.log('changing...')

var v2 = [2.3, 4.5, 6.8, 7.4, 1.9, 8.9, 7.0, 8.4, 4.45, 2.13]
for (j in v2){
    if (j==5) {continue} // não faz a operação do bloco nesse valor mas não sai do loop. apenas pula esse valor.
    console.log(`Elemento de índice ${j} = ${v2[j]}`)
}
// e se eu tenho 2 for e quero dar break no for mais externo e não no mais interno?criar rótulo!!

rotul: for (a in v2) {     //evitar rótulos, evitar rótulos, evitar rótulos
    for (b in v2) {
        if(a==2 && b==2) break rotul
        console.log(`Par = ${a}, ${b}`)
    }
}
