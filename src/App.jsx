import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import IconSec from "./components/hero/IconSec";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./scroll/ScrollToTop";
import ShoppingCartProvider from "./components/context/ShoppingCartContext";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ShoppingCartProvider>
      {" "}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bg.main}>
            <Hero />
            <IconSec />
            <Main />
            <Footer />
          </Box>

          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ShoppingCartProvider>
  );
}

export default App;
