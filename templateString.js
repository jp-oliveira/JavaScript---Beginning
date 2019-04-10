const name = 'Carlinhos'
const concatenacao = 'Olá ' + name + '!'

const template =`
    Olá
    ${name}! `

console.log(concatenacao, template)
// não necessariamente o template tem que ser em várias linhas, mas essa é uma vantagem do template para a concatenação.

console.log(`2+2 = ${2+2}` )

// possível de fazer expressões

const up = texto => texto.toUpperCase()
console.log(`cara, ${up('cuidado')}!`)

// depois será visto isso com mais calma

