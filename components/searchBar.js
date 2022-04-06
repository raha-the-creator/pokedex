import Image from "next/image";

const SearchBar = ({ changePokemon, clickPokemon }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      clickPokemon();
    }
  };
  return (
    <div className="search-bar">
      <input
        className="searh-bar-text-box"
        onChange={changePokemon}
        placeholder="Search for Pokémon here"
        onKeyPress={handleKeyPress}
      />
      <button className="search-bar-button" onClick={clickPokemon}>
        <Image
          src={"/icon/search.svg"}
          alt="search icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default SearchBar;
