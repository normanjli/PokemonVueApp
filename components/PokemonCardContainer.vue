<template>
  <div class="pokemon-card-container">
    <input
      type="text"
      @input="onSearch"
      placeholder="Search..."
      class="search-bar"
    />
    <section class="pokemon-card-grid">
      <PokemonCard
        v-for="pokemon in filterPokemon(pokemonList, search)"
        :pokemon="pokemon"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import "~/assets/css/PokemonContainer.css";
import PokemonCard from "./PokemonCard.vue";
import { PokemonCardModel } from "~/assets/models/PokemonCardModel";

const search: Ref<RegExp | null> = ref(null);

const pokemonList = await useFetchManyPokemon();

const filterPokemon = (
  pokemonList: PokemonCardModel[],
  search: RegExp | null
) => {
  return pokemonList.filter((poke: PokemonCardModel) => {
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
