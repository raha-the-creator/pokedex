import { useContext, createContext, useState } from "react";
import { themes } from "./variables";

const initalStates = {
  theme: "dark",
  theme: "bold",
  theme: "contrast",
  setTheme: () => {},
  setBoldTheme: () => {},
};

const MyThemeContext = createContext(initalStates);

export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [boldTheme, setBoldTheme] = useState("regular");
  const [contrastTheme, setContrastTheme] = useState("normal");

  return (
    <MyThemeContext.Provider
      value={{
        theme,
        setTheme,
        boldTheme,
        setBoldTheme,
        contrastTheme,
        setContrastTheme,
      }}
    >
      <style jsx global>
        {`
          body {
            background-color: ${themes[theme].body};
            color: ${themes[theme].color};
          }
          button {
            color: ${themes[theme].color};
            font-weight: ${themes[boldTheme].text};
          }
          h2 {
            color: ${themes[contrastTheme].cool};
            font-weight: ${themes[boldTheme].text};
          }
          p {
            color: ${themes[theme].color};
            font-weight: ${themes[boldTheme].text};
          }
          h1 {
            color: ${themes[theme].color};
            font-weight: ${themes[boldTheme].text};
          }
          span {
            color: ${themes[theme].color};
            font-weight: ${themes[boldTheme].text};
          }
        `}
      </style>
      {children}
    </MyThemeContext.Provider>
  );
}

export function useTheme() {
  const {
    theme,
    setTheme,
    boldTheme,
    setBoldTheme,
    contrastTheme,
    setContrastTheme,
  } = useContext(MyThemeContext);
  return {
    theme,
    setTheme,
    boldTheme,
    setBoldTheme,
    contrastTheme,
    setContrastTheme,
  };
}
