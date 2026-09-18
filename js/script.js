const pokemonImage = document.querySelector('.pokemon_image');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon${pokemon}/`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon =  async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
}

