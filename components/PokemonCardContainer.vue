<template>
  <p v-if="pending">some text</p>
  <div v-else class="pokemon-card-grid" v-for="pokemon in pokemonList">
    <PokemonCard v-bind:pokemon="pokemon" />
  </div>
</template>

<script lang="ts" setup>
import PokemonCard from "./PokemonCard.vue";

const {
  data: pokemonList,
  error,
  execute,
  pending,
  refresh,
  status,
} = await useFetch("/api/pokemon");
</script>

<style></style>
