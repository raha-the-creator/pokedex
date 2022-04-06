import { useContext, createContext, useState } from "react";

const GenerationContext = createContext();

export function GenerationProvider({ children }) {
  const [generation, setGeneration] = useState([]);

  return (
    <GenerationContext.Provider value={{ generation, setGeneration }}>
      {children}
    </GenerationContext.Provider>
  );
}

export function useGeneration() {
  const { generation, setGeneration } = useContext(GenerationContext);
  return { generation, setGeneration };
}
