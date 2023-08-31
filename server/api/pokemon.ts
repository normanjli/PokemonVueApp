import axios from "axios";

export default defineEventHandler(async (event) => {
  const { data, status } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=60"
  );

  if (status !== 200) {
    throw status;
  }

  const urls: string[] = data.results.map(({ url }: { url: string }) => url);
  const pokemon = await Promise.all(
    urls.map(async (url) => {
      const { data, status } = await axios.get(url);
      return data;
    })
  );
  return pokemon;
});
