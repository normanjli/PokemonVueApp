<template>
  <NuxtLink :href="pokemonLinkString" class="pokemon-card">
    <img :src="pokemon.spriteImgSrc" />
    {{ pokemon.name }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PokemonModel } from "~/assets/Models.ts/PokemonModel";
import "~/assets/css/PokemonCard.css";

const { pokemon } = defineProps(["pokemon"]) as { pokemon: PokemonModel };
const pokemonLinkString = `/pokemon/${pokemon.id}`;
</script>

<style></style>
