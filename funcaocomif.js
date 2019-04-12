function area(largura,altura){     //obs: conceitos aqui vistos na pasta de fundamentos - 1 funcao
    const areao = largura * altura
    if (areao >=30) console.log(`Área maior que a permitida. Sua área foi ${areao}m²`)
    else {
        return areao
    }
}