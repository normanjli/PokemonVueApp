import axios from "axios";
import {
  PokemonInterface,
  PokemonModel,
} from "~/assets/Models.ts/PokemonModel";

export default defineEventHandler(async (event) => {
  const { data, status } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=60"
  );

  if (status !== 200) {
    throw status;
  }

  const pokemon = data.results.map(
    (pokemon: PokemonInterface) => new PokemonModel(pokemon)
  );

  return pokemon;
});
