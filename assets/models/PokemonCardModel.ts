export interface PokemonCard {
  name: string;
  id: number;
  displayName: string;
  spriteImgSrc: string;
  url?: string;
}

export class PokemonCardModel implements PokemonCard {
  name: string = "";
  id: number = 0;
  spriteImgSrc: string = "";

  constructor(props: PokemonCard) {
    this.name = props?.name || "";
    this.id = parseInt(props?.url?.split("/", 7)?.pop() || "0");
    this.spriteImgSrc = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.id}.png?raw=true`;
  }

  get displayName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
}
