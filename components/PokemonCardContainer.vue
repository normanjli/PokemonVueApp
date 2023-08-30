<template>
  <p v-if="pending">Loading</p>
  <div class="pokemon-card-container" v-else>
    <input type="text" @input="onSearch" class="search-bar" />
    <section class="pokemon-card-grid">
      <PokemonCard
        v-for="pokemon in filterPokemon(pokemonList, search)"
        :pokemon="pokemon"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { PokemonModel } from "~/assets/models/PokemonModel";
import PokemonCard from "./PokemonCard.vue";
import "~/assets/css/PokemonContainer.css";

const { data: pokemonList, pending } = useFetch("/api/pokemon");
const search: Ref<RegExp | null> = ref(null);

const filterPokemon = (pokemonList: PokemonModel[], search: RegExp | null) => {
  return pokemonList.filter((poke: PokemonModel) => {
    if (!search) {
      return true;
    }
    return poke.name.match(search);
  });
};

const onSearch = (event: Event) => {
  const target = event?.target as HTMLInputElement;
  if (!target?.value) {
    search.value = null;
  }

  search.value = new RegExp(target?.value, "gi") || "";

  return;
};
</script>

<style></style>
