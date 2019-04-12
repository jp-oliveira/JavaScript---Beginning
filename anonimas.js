const soma = function(x,y){  // função anônima = sem nome. só isso kkkk
    return x+y
}

const print = function(a,b, c = soma){
    console.log(c(a,b))
    if (2 in arguments) console.log('3 parâmetro incluso')
}

print(3,4) // === print(3,4,soma)

print(5,6,function(x,y){    // possível de passar uma função como parâmetro
    return x *y
})
print(12,3, (x,y) => x/y)

const obj = {
    falar: function(){
        console.log('opa')
    }
}
obj.falar()