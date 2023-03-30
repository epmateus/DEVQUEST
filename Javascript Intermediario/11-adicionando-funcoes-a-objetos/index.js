let usuario = {
    nome: 'Mateus',
    excluir: function(){
        console.log('O usuário, ' + this.nome + 'foi excluído!')
    }
}

usuario.excluir()