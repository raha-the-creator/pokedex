import Image from "next/image";
import { useDrag, useDrop } from 'react-dnd';

// import component
import TypingBox from "./typingBox";

const PokedexCardCont = ({ 
  pokemonname,
  type1,
  type2, 
  children = null 
}) => {
  return (
    <div className="pokedex-card-container">
      <div className={`pokedex-card-cont-${type1}`}>
        <h1>{pokemonname}</h1>
        <TypingBox type={type1} typestyle={type1} />
        {/* if type 2 doesn't exist, don't show */}
        {type2 == "" ? null : <TypingBox type={type2} typestyle={type1} />}
      </div>
      <div className="pokedex-card-image">
        <Image
          src={`${process.env.NEXT_PUBLIC_POKEMON_API}/pokemon/${pokemonname.toLowerCase()}.png`}
          alt={pokemonname}
          width={100}
          height={100}
        />
      </div>
      <div className="pokedex-card-bg">
        <Image src="/pokeball.png" alt="pokeball" width={180} height={180} />
      </div>
    </div>
  );
};

export default PokedexCardCont;
