import { PokemonModel } from "~/assets/models/PokemonModel";

export const useFetchPokemonDetail = async (id: number) => {
  const { data } = await useFetch(`/api/getOnePokemon/${id}`);
  const pokemon = useConvertData({
    data: data.value,
    model: PokemonModel,
  });

  return pokemon;
};
