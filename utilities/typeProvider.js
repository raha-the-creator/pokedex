import { useContext, createContext, useState } from "react";

const TypeContext = createContext();

export function TypeProvider({ children }) {
  const [type, setType] = useState([]);

  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
}

export function useType() {
  const { type, setType } = useContext(TypeContext);
  return { type, setType };
}
