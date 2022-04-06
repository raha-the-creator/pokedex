import axios from "axios";
import Image from "next/image";

const PokemonEvolution = ({ pokemonname = "henry", arrowDisplay = null }) => {
  return (
    <div className="evolution-card-cont">
      <div className="evolution-image-cont">
        <div className="evolution-image-icon">
          <Image
            src={`/pokemon/${pokemonname}.png`}
            width={164}
            height={164}
            alt={pokemonname}
            className="poke-img"
          />
          {arrowDisplay == "show" ? (
            <Image
              src={"/icon/arrowDown.svg"}
              alt="arrow icon"
              width={30}
              height={30}
              className="arrow-icon"
            />
          ) : null}
        </div>
        <h1 className="pokemon-evolution-text">{pokemonname}</h1>
      </div>
    </div>
  );
};

export default PokemonEvolution;
