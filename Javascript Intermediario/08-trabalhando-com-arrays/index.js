let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

// for(let i = 0; i < frutasTamanho; i++){
//     console.log('fruta: ' + frutas[i])
// }

frutas.forEach(function(item){
    console.log('Fruta: ' + item)
})

frutas.push('manga')

frutas.pop()

let posicaoLaranja = frutas.indexOf('laranja')

console.log(posicaoLaranja)