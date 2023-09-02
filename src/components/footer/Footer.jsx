import { Box, Button, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 0.5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="text"
        sx={{ fontsize: 18 }}
      >
        Developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Eslaam
        </Button>
        &copy;2023
      </Typography>
    </Box>
  );
}

export default Footer;
