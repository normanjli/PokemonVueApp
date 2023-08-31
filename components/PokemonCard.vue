<template>
  <NuxtLink :href="pokemonLinkString" class="pokemon-card">
    <NuxtImg
      class="thumbnail"
      :src="pokemon?.spriteImgSrc"
      :alt="pokemon?.displayName"
    />
    {{ pokemon?.displayName }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PokemonCardModel } from "~/assets/models/PokemonCardModel";

const { pokemon } = defineProps({ pokemon: PokemonCardModel });

const pokemonLinkString = `/pokemon/${pokemon?.id}`;
</script>

<style></style>
