// Objetivo: Implementar por conta própria as funções nativas Map, Reduce, e Filter


const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 9.99},
    {nome: 'Impressora', qtde: 0, preco: 104.30},
    {nome: 'Caderno', qtde: 7, preco: 19.77},
    {nome: 'Lapis', qtde: 2, preco: 4.50},
    {nome: 'Tesoura', qtde: 1, preco: 12.50}
]

// Implementando meu próprio Filter
Array.prototype.myFilter = function(fn) {
    const filtered = []
        for(let el of this){
            if(fn(el)){
                filtered.push(el)
            }
        }
    return filtered
}
const fn = item => item.qtde > 0
const total = item => item.qtde * item.preco
const somar = (a,b) => a + b 
// Implementando meu próprio Map

Array.prototype.myMap = function(fn) {
    const mapped = [];
        for(let el of this){
            mapped.push(fn(el))
        }

    return mapped;
}
Array.prototype.myReduce = function (fn, inicial) {
    let ultimo = inicial
    for(let el of this){
        if(!ultimo === undefined){
            ultimo = el
            continue
        }
        console.log(ultimo, el)
        ultimo = fn(ultimo, el)
   
    }
}

const result = carrinho
.myFilter(fn)
.myMap(total)
.myReduce(somar)

console.log(result);







