export interface Ability {
  ability: { name: string };
}

export interface PokemonInterface {
  species?: {
    name: string;
    url: string;
  };
  id: number;
  spriteImgSrc: string;
  abilities: Ability[];
  sprites?: { front_default: string };
  height: string;
  weight: string;
}

export class PokemonModel implements PokemonInterface {
  name: string = "";

  height: string = "";
  weight: string = "";

  id: number = 0;

  url: string = "";

  spriteImgSrc: string = "";

  abilities: Ability[] = [];

  constructor(props: PokemonInterface) {
    this.name = props?.species?.name || "";
    this.id = props.id;
    this.url = props?.species?.url || "";
    this.spriteImgSrc = props?.sprites?.front_default || "";
    this.abilities = props.abilities;
    this.height = props.height;
    this.weight = props.weight;
  }

  get displayName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  get displayAbilities() {
    return this.abilities
      .map(({ ability }) => {
        const words = ability.name.split("-");
        return words
          .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(" ");
      })
      .join(", ");
  }
}
