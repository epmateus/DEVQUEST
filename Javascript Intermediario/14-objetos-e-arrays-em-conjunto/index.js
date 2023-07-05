// let jogo1 = {
//     nome: 'Final Fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// let videoGame = {
//     nome: 'Xbox'
//     valor: 3000
//     jogos: [
//         { nome: 'Final Fantasy' },
//         { nome: 'Fallout' }
//     ]
// }

// let jogo3 = {
//     nome: 'FIFA'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Mateus',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'FIFA' }
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)