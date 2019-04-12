marcas = ['fiat','fanta','nike','bk']

function print(a,b){              // A = NOME DA VARIÁVEL NO ARRAY B = ÍNDICE C = NOME DE TODOS OS ELEMENTOS
    console.log(`${b+1}. ${a}`) // SÃO PARÂMETROS QUE JÁ SÃO PRÉ DEFINIDOS quando se chama função pra array.
}

marcas.forEach(print) // como se fosse um for sem precisar definir o loop. foreach é uma função para arrays.
marcas.forEach(bench => console.log(bench) ) //posso também passar a função como parâmetro da foreach.
                         // como eu só passei um parâmetro, só vai imprimir o referente ao A - nome do elemento.