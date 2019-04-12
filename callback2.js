const grades = [6.5, 7.7, 4.5, 8.7, 9.8, 4.3, 7.5]
let notasbaixas = []
for (i in grades){
    if (grades[i]< 7) {
        notasbaixas.push(grades[i])
    }
}
console.log(notasbaixas)
// agora fazendo com callback:
const notasbaixas2 = grades.filter(function(nota){ // não altera o array grades.
    return nota < 7               // se der true, o notas baixas 2 copia o elemento. caso dê false, não pega.
})
console.log(notasbaixas2)
// outra forma: (podia-se também fazer uma função - const qualquer = nota => nota < 7  e passa-la no param do filter.
const notasbaixas3 = grades.filter(nota => nota < 7)
console.log(notasbaixas3)