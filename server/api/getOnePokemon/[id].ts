import axios from "axios";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const { data, status } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  if (status !== 200) {
    throw status;
  }

  return data;
});
