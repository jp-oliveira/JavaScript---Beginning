function pessoa(){
    this.idade = 0    
    setInterval(() => { 
        this.idade++
        console.log(this.idade)
        if (this.idade%2 == 0) console.log('me da um olá')
    },1000) 
}
pessoa()
 // ou new pessoa . obs: ctrl + alt + m pausa a execução.
