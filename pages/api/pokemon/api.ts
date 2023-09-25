const BASE_API = "https://pokeapi.co/api/v2/";

export const fetchPokemonRegion = async () => {
  const res = await fetch(`${BASE_API}region/`);
  if (!res.ok) {
    throw new Error(`Failed to fetch locations: ${res.status}`);
  }
  const data = await res.json();
  return data.results;
};

export const fetchPokemonCities = async (city: string = "kanto") => {
  const res = await fetch(`${BASE_API}region/${city}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch locations: ${res.status}`);
  }
  const data = await res.json();
  return data.locations;
};

export const fetchPokemons = async () => {
  const res = await fetch(`${BASE_API}pokemon/`);
  if (!res.ok) {
    throw new Error(`Failed to fetch locations: ${res.status}`);
  }
  const data = await res.json();
  return data.results;
};
