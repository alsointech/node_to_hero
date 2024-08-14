const getPokemonById = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        // .then(() => {throw new Error('Error with your pokemon')})
        .then((data) => (data.name));
};

module.exports = { getPokemonById };