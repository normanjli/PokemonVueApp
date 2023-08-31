import { PokemonCardModel } from "~/assets/models/PokemonCardModel";
import { PokemonModel } from "~/assets/models/PokemonModel";

export const useConvertManyData = <
  T extends { new (...args: any[]): InstanceType<T> }
>({
  data,
  model,
}: {
  data: any[];
  model: T;
}) => {
  return ref(data.map((obj) => new model(obj))) as Ref<
    PokemonCardModel[] | PokemonModel[]
  >;
};
