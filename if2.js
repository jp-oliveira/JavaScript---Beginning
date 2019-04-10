function aprenderif(valor){
    if (valor > 6)
        console.log(valor) //QUANDO NÃO SE ASSOCIA BLOCO ({}) AO IF, APENAS A PRIMEIRA SENTENÇA APÓS ELE É CONSIDERADA DENTRO.
    console.log('final') // OU SEJA, O ALINHAMENTO DESSA LINHA AQUI NÃO IMPORTA. ELA TA FORA DO IF SEM O BLOCO.   
}
aprenderif(7)
aprenderif(4)
/*
CUIDADO COM PONTO E VÍRGULA.
if (alguma coisa); {              É DIFERENTE DE :  if(algumacoisa) {

}                                                   }  

com ponto e vírgula é como se fosse:
if(algumacoisa)
;    cria-se um bloco vazio.
{
}
*/