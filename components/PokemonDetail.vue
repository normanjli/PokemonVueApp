<template>
  <div class="pokemon-detail-wrapper">
    <NuxtImg
      class="pokemon-detail-image"
      :src="pokemon?.spriteImgSrc"
      :alt="pokemon.displayName"
    />
    <div class="pokemon-detail-text-wrapper">
      <h1 class="pokemon-name">{{ pokemon.displayName }}</h1>
      <p><strong>Abilities:</strong> {{ pokemon.displayAbilities }}</p>
      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PokemonModel } from "~/assets/models/PokemonModel";
import "~/assets/css/PokemonDetailStyles.css";

const route = useRoute();
const id = parseInt((route?.params?.id as string) || "0");

const pokemonList = await useFetchPokemon();

const pokemon = pokemonList.value.filter((pokemon) => pokemon.id === id)[0];
</script>

<style></style>
