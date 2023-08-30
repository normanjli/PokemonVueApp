<template>
  <input v-on:change="search" class="search-bar" />
</template>

<script lang="ts" setup>
const search = defineProps(["search"]) as () => Ref<string>;
</script>

<style></style>
