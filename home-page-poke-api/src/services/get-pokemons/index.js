async function getPokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const list = await response.json()
    const {results} = list;
    const names = results.map((item) => item.name)
    console.log(names)
}

getPokemons()

export { getPokemons }