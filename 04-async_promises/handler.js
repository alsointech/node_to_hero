const getPokemonById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    // throw new Error('Error with your pokemon');
    return pokemon.name;
}

module.exports = {
    getPokemonById,
}