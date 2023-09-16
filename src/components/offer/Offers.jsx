import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

function Offers() {
  return (
    <Container sx={{ p: "0 !important" }}>
      <Box
        sx={{
          minHeight: "200px",
          backgroundImage: useMediaQuery("(min-width:900px)")
            ? "url(long-banner.jpg)"
            : null,
          bgcolor: "#e8ecef",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          mb: 8,
          mt: 8,
          py: 2,
          pl: 4,
          pr: 6,
          display: "flex",
          justifyContent: useMediaQuery("(min-width:900px)")
            ? "flex-end"
            : "center",
          gap: 5,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h4" sx={{ color: "#222" }}>
            GIFT <span style={{ color: "#D23f57" }}>50% OFF</span> PERFECT
            STYLES
          </Typography>
          <Typography variant="body1" sx={{ color: "#222", mt: 0.7 }}>
            Only until the end of this week. Terms and conditions apply
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            fontWeight: "500",
            bgcolor: "#fff",
            py: 1,
            px: 2.5,
            color: "#222",
            boxShadow: "0px 0px 28px rgba(3, 0, 71, 0.01)",

            ":hover": {
              bgcolor: "#222",
              color: "#f1f1f1",
            },
          }}
        >
          Discover Now
        </Button>
      </Box>
    </Container>
  );
}

export default Offers;
