import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { useTheme } from "@emotion/react";

function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center">
          <Typography
            variant="body2"
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23f57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HOT
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined fontSize="small" sx={{ color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined fontSize="small" sx={{ color: "#fff" }} />
              </IconButton>
            )}
          </div>

          <Twitter sx={{ fontSize: "16px", color: "#fff" }} />
          <Facebook sx={{ fontSize: "16px", color: "#fff", mx: 1 }} />
          <Instagram sx={{ fontSize: "16px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
}

export default Header1;
