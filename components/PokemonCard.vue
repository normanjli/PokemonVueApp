<template>
  <NuxtLink :href="pokemonLinkString" class="pokemon-card">
    <img :src="pokemon?.spriteImgSrc" />
    {{ pokemon?.displayName }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PokemonModel } from "~/assets/models/PokemonModel";

const { pokemon } = defineProps({ pokemon: PokemonModel });

const pokemonLinkString = `/pokemon/${pokemon?.id}`;
</script>

<style></style>
