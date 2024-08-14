const { getPokemonById } = require("./handler");

(() => {
    const pokemon = getPokemonById(1)
    pokemon.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log('error');
    }).finally(() => {
        console.log('Finally');
    });
})();
