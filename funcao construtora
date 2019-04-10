function carro(velomaxima = 200, delta = 5){
    //atributo privado, não global
    let veloatual = 0

    // metodo publico - acrescentar o this para ser chamado fora do escopo da função
    this.acelerar = function(){  // prefira o let ao var
        if(veloatual + delta <= velomaxima){
            veloatual +=  delta 
        } else{
            veloatual = velomaxima
        }       
    }
    // metodo publico para poder pegar velo atual. podia ter deixado ela publica sempre,
    // mas o usuario poderia modifica-la a qualquer momento.
    this.getveloatual = function(){
        return veloatual
    }
}
const uno = new carro(160,5)    // se passasse somente const alguem = new carro ia passar com os parametros ja
                                //pre definidos.
uno.acelerar()
uno.acelerar()   // acelerou duas vezes, então saiu de 0 pra 5 depois pra 10. quando chegar a 160, ele vai
                 // atingir a velo maxima.
console.log(uno.getveloatual())
