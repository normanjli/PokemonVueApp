import axios from "axios";

export default defineEventHandler(async (event) => {
  const { data, status } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=60"
  );

  if (status !== 200) {
    throw status;
  }
  return data.results;
});
