import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { useTheme } from "../utilities/provider";
import { useType } from "../utilities/typeProvider";
import { useGeneration } from "../utilities/generationProvider";

// import components
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import PokedexCardCont from "../components/pokedexCardCont";
import Dropzone from "../components/dropZone";

export default function Home() {
  const [name, setName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { setTheme } = useTheme();
  const { type } = useType();
  const { generation } = useGeneration();

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!isSearching) return;

    let cancelSetPokemons = false;
    const getPokemons = async () => {
      console.log(type);
      const res = await axios.get("/api/pokemon", {
        params: {
          name: name,
          type: type.join(","),
          generation: generation.join(","),
        },
      });
      if (!cancelSetPokemons) {
        setPokemons(res.data);
        setHasSearched(true);
        setIsSearching(false);
      }
    };

    getPokemons();

    if (isSearching) return () => (cancelSetPokemons = true);
  }, [isSearching, setIsSearching, name]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div className="page-container">
      <div className="nav-bar">
        <Logo name="Pokédex" />
        <SearchBar
          changePokemon={(e) => setName(e.target.value)}
          clickPokemon={() => setIsSearching(true)}
        />
        <div className="button-cont">
          <Link href={"settings"}>
            <button>Settings</button>
          </Link>
          <Link href={"favourites"}>
            <button>Favourites</button>
          </Link>
        </div>
      </div>
      {/* data mapping */}
      <div className="index-pokedex-card-display">
        {pokemons.length === 0 && hasSearched && (
          <div className="empty-search-handle">
            <h2>No Pokémon Matched Your Search</h2>
            <p>Try these suggestions to find a Pokémon:</p>
            <ul>
              <li>Reduce the number of search parameters</li>
              <li>Search for only one Pokémon type at a time</li>
              <li>Remove generation limit</li>
            </ul>
            <p>Configure your search preferences in Settings</p>
          </div>
        )}
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.name}>
              <Link href={`/pokemon/${pokemon.name}`}>
                <a>
                  <PokedexCardCont
                    pokemonname={pokemon.name}
                    type1={pokemon.type_1}
                    type2={pokemon.type_2}
                  />
                </a>
              </Link>
            </div>
          ))}
      </div>
      <div className="favourites">
        <Dropzone />
      </div>
    </div>
  );
}
