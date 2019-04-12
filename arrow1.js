let dobro = function (a){
    return 2*a
}
// outra forma:

dobro = (a) => {
    return 2*a
}
// outra forma:

dobro = a => 2*a   // quando só tem um parâmetro, parametros são desnecessários. o return nesse caso está implícito.
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
//Outra forma de escrever
ola = () => 'Olá'
ola = _ => 'Olá'

console.log(ola())