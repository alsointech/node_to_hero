const { httpClientPlugin } = require('./plugins');

// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const pokemon = await httpClientPlugin.get(url);
//     return pokemon.name;
// }

const { buildLogger } = require('./plugins');

const logger = buildLogger('index.js');

logger.log('Hello World');
logger.error('Hello errord');

/* getPokemonById(3).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('err');
}).finally(() => {
    console.log('Finally');
});  */