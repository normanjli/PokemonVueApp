import { PokemonCardModel } from "~/assets/models/PokemonCardModel";

export const useFetchManyPokemon = async () => {
  const { data } = await useFetch("/api/getManyPokemon");
  const pokemonList = useConvertManyData({
    data: data.value as PokemonCardModel[],
    model: PokemonCardModel,
  });
  return pokemonList;
};
