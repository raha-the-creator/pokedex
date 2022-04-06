export function filtering(
  pokemons = [],
  config = { name: null, type: null, generation: null }
) {
  // type is an array of pokemon types
  const { name, type, generation } = config;

  let data = pokemons;

  if (name) {
    data = data.filter((pokemon) => {
      const matchPokemon = name
        ? pokemon.name.toUpperCase().includes(name.toUpperCase())
        : true;

      return matchPokemon;
    });
  }

  if (type) {
    data = data.filter((pokemon) => {
      return type.includes(pokemon?.type_1) || type.includes(pokemon?.type_2);
    });
  }

  if (generation) {
    data = data.filter((pokemon) => {
      return generation.includes(pokemon?.generation);
    });
  }

  return data;
}
