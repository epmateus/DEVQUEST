let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

// let frutasExtraidas = frutas.slice(1)

// console.log(frutasExtraidas)

let frutasExtraidas = frutas.splice(1, 2)

console.log(frutasExtraidas)

console.log(frutas)

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra')

console.log(frutas)
console.log(removeEAdicionaFrutas)