import { describe, expect, test } from "vitest";
import { setup, $fetch, url, createPage } from "@nuxt/test-utils";
import indexVue from "~/pages/index.vue";

describe("Api getManyPokemon", async () => {
  await setup({});

  test("mount home page", async () => {
    const html = $fetch("/");
    console.log(html);
  });
});
