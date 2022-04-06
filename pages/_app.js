import "../styles/globals.scss";
import MyThemeProvider from "../utilities/provider";
import { TypeProvider } from "../utilities/typeProvider";
import { GenerationProvider } from "../utilities/generationProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <TypeProvider>
        <GenerationProvider>
          <Component {...pageProps} />
        </GenerationProvider>
      </TypeProvider>
    </MyThemeProvider>
  );
}

export default MyApp;
