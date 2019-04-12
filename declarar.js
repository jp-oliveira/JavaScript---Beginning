soma(5,6)  // A VANTAGEM DE F.D. É QUE POSSO CHAMAR NO COMEÇO DO PROGRAMA 

//function declaration
function soma(a,b,c = 30){
    return a + b + c
}

//function expression
const subtrair = function (a,b){
    return b - a
}

//named function expression
const mult = function mult(a,b,c){
    return a *b * c
}