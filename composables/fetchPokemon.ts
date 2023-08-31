import { PokemonModel } from "~/assets/models/PokemonModel";

export const useFetchPokemon = async () => {
  const { data } = await useFetch("/api/pokemon");
  const pokemonList = useConvertData({
    data: data.value as PokemonModel[],
    model: PokemonModel,
  });

  return pokemonList;
};
