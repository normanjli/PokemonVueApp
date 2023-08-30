export interface PokemonInterface {
  name: string;
  id: number;
  url: string;
  spriteImgSrc: string;
}

export class PokemonModel implements PokemonInterface {
  name: string = "";

  height: number = 0;

  id: number = 0;

  url: string = "";

  spriteImgSrc: string = "";

  constructor(props: PokemonInterface) {
    this.name = props.name;
    this.id = parseInt(props.url.split("/", 7)?.pop() || "0");
    this.url = props.url;
    this.spriteImgSrc = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.id}.png?raw=true`;
  }
}
