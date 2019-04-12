const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao) // como se fosse o self no python. se não fosse escrito o this, daria erro.
    }                              // como se this apontasse para o objeto que está lhe contendo.
}
pessoa.falar()
// falar() dará erro porque falar ta definido somente dentro do objeto.
const falar = pessoa.falar // o this ficará crazy, pois nao apontará mais para o obj pessoa e sim para a const falar.
                           // nessa constante, não há um atributo chamado saudação.

const falaragain = pessoa.falar.bind(pessoa) // bind passa um objeto no qual se quer que seja resolvível no this
falaragain() // é possível agora chamar aquela função fora do escopo original dela.

//OBS: SE EU CRIAR OUTRA FUNÇÃO CHAMANDO PESSOA.FALAR NAO DARÁ CERTO, POIS SÓ FALARAGAIN TEM O BIND.
