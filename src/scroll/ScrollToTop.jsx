import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 200 })}>
      <Fab
        size="small"
        sx={{ position: "fixed", bottom: "33px", right: "33px" }}
        color="primary"
        aria-label="Scroll To Top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
