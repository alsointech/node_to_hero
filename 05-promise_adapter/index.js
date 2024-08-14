const { httpClientPlugin } = require('./plugins');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClientPlugin.get(url);
    return pokemon.name;
}

getPokemonById(1).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
}); 