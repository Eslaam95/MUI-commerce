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
import FloatingCart from "./components/main/FloatingCart";
import ShoppingCartProvider from "./components/context/ShoppingCartContext";
import { SnackbarProvider } from "notistack";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <SnackbarProvider maxSnack={3}>
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
            <FloatingCart />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ShoppingCartProvider>
    </SnackbarProvider>
  );
}

export default App;
