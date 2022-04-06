import { filtering } from "../../utilities/functions.js";
import pokemon from "../../utilities/pokedex.json";

export default async function handler(req, res) {
  const { name, type, generation } = req.query;

  let lists = filtering(pokemon, {
    name: name,
    type: type ? type.split(",") : null,
    generation: generation ? generation.split(",") : null,
  });
  res.status(200).json(lists);
}
