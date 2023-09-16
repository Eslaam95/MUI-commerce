import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import Cart from "./Cart";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 200 })}>
      <Fab
        size="small"
        sx={{ position: "fixed", bottom: "100px", right: "33px" }}
        color="primary"
        aria-label="Floating cart"
      >
        <Cart variant="floating" />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
