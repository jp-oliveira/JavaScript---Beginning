// estratégia para gerar valor padrão

edw = function(a,b,c){
    a = a !== undefined ? a : 1  // se a for estritamente diferente de undefined, da a. se não, da 1
    b = 1 in arguments ? b : 1 //se o elemento de posição 2 do vetor dos parâmetros existir, da ele. se não, da 1.
    c = isNaN(c) ? 1 : c  // se c não for um numero da 1. se não, da c.
    return a + b + c
}

console.log(edw(0,0,0), edw(1,2,3), edw(4,4,'r'),edw(undefined,null))

// o 3 caso somou 4 + 4 + 1. O 2 caso somou 1, null e 1.

//outro exemplo de função para parametros padrões:
wwr = function(a=1, b=1, c=1){  //se eu não der parâmetros, eles serão 1.
    return a + b + c // desvantagem: pode dar bug pq essa fç não prevê nulls, undefineds ou nan
}

tls = function(a,b,c){
    a = a || 1   // evita nulls, undefineds e valores nulos.
    b = b || 1
    c = c || 1 
    return a + b + c
}

console.log(tls(3,2,5))