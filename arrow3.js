let comparethis = function(param1){
    console.log(param1 === this)
}
comparethis(global)
obj = {}
comparethis = comparethis.bind(obj) //agora this aponta para o obj

comparethis(global) // false
comparethis(obj) // true, pois agora o this aponta para o obj

// PORÉM, NAS FUNÇÕES ARROW, O THIS NÃO APONTA PARA GLOBAL.
let comparethisarrow = param => console.log(this === param)

comparethisarrow(global)
comparethisarrow(module.exports) //no node, o this de um arrow esta no module.exports.

comparethisarrow = comparethisarrow.bind(obj) // não adiantará nada, pq independente de bind, uma arrow function
comparethisarrow(obj)                          //não terá escopo global - this sempre apontará para module.exports.
comparethisarrow(module.exports)               // bind não tem serventia com arrow functions.

