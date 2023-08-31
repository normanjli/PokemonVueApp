import { PokemonCardModel } from "~/assets/models/PokemonCardModel";
import { PokemonModel } from "~/assets/models/PokemonModel";

export const useConvertData = <
  T extends { new (...args: any[]): InstanceType<T> }
>({
  data,
  model,
}: {
  data: any;
  model: T;
}) => {
  return ref(new model(data)) as Ref<PokemonCardModel | PokemonModel>;
};
