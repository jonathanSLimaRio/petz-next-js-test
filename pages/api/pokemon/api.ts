export const fetchPokemonLocations = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/location/');
  if (!res.ok) {
    throw new Error(`Failed to fetch locations: ${res.status}`);
  }
  const data = await res.json();
  return data.results;
}
