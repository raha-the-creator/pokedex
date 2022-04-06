const ContextHeader = ({ name, japanese_name, species, pokedex_number }) => {
  return (
    <div className="context-header">
      <div className="context-header-title">
        <h1>{name}</h1>
        <span>{japanese_name}</span>
      </div>
      <div>
        <p>{species}</p>
        {`${pokedex_number}` / 10 < 1 ? (
          <h2>#00{pokedex_number}</h2>
        ) : `${pokedex_number}` / 10 < 10 ? (
          <h2>#0{pokedex_number}</h2>
        ) : (
          <h2>#{pokedex_number}</h2>
        )}
      </div>
    </div>
  );
};

export default ContextHeader;
