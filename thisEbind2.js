function pessoa(){
    this.idade = 0
    setInterval(function(){ 
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)  //// cada 1000 milisegundos, essa função vai disparar um temporizador.
}
pessoa() // ou new pessoa 

/* outra forma seria: 
function pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){ 
        self.idade++
        console.log(self.idade)
    }.bind(this),1000) 
}
pessoa()  ou new pessoa */

