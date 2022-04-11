import { db } from "../utils/db";

export const getMyPokemons = async () => {
  const result = await db.myPokemons.toArray();
  return result;
};
