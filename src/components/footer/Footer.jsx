import {
  Facebook,
  Instagram,
  ShoppingCart,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        pt: 6,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flexBasis: useMediaQuery("(min-width:640px)") ? "25%" : "50%",
              pr: 4,
              mb: 3,
              "@media (max-width: 480px)": {
                minWidth: "100%",
              },
            }}
          >
            <ShoppingCart sx={{ color: "#fff", fontSize: "300%", mb: 1.5 }} />
            <Typography variant="body2" color={"#AEB4BE"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Typography>
          </Box>
          <Box
            sx={{
              flexBasis: useMediaQuery("(min-width:640px)") ? "25%" : "50%",
              px: 2,
              mb: 3,
              "@media (max-width: 480px)": {
                minWidth: "100%",
              },
            }}
          >
            <Typography variant="h6" color={"#fff"}>
              About Us
            </Typography>
            <nav aria-label="secondary mailbox folders">
              <List
                sx={{
                  " .MuiTypography-root": { color: "#AEB4BE", fontSize: "90%" },
                  " .MuiListItemButton-root": { pb: 0, pl: 0 },
                }}
              >
                {[
                  "Careers",
                  "Our Stores",
                  "Our Cares",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((li) => {
                  return (
                    <ListItem disablePadding key={li}>
                      <ListItemButton>
                        <ListItemText primary={li} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Box>
          <Box
            sx={{
              flexBasis: useMediaQuery("(min-width:640px)") ? "25%" : "50%",
              px: 2,
              mb: 3,
              "@media (max-width: 480px)": {
                minWidth: "100%",
              },
            }}
          >
            <Typography variant="h6" color={"#fff"}>
              Customer Care
            </Typography>
            <nav aria-label="secondary mailbox folders">
              <List
                sx={{
                  " .MuiTypography-root": { color: "#AEB4BE", fontSize: "90%" },
                  " .MuiListItemButton-root": { pb: 0, pl: 0 },
                }}
              >
                {[
                  "Help Center",
                  "How To Buy",
                  "Track Your Order",
                  "Corporate & Bulk Purchasing",
                  "Returns & Refunds",
                ].map((li) => {
                  return (
                    <ListItem disablePadding key={li}>
                      <ListItemButton>
                        <ListItemText primary={li} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Box>
          <Box
            sx={{
              flexBasis: useMediaQuery("(min-width:640px)") ? "25%" : "50%",
              px: 2,
              mb: 3,
              "@media (max-width: 480px)": {
                minWidth: "100%",
              },
            }}
          >
            <Typography variant="h6" color={"#fff"}>
              Contact Us
            </Typography>
            <Typography variant="body2" color={"#AEB4BE"} mt={2}>
              70 Washington Square South, New York, NY 10012, United States{" "}
            </Typography>
            <Typography variant="body2" color={"#AEB4BE"} mt={1}>
              Email: eslaam95@gmail.com
            </Typography>
            <Typography variant="body2" color={"#AEB4BE"} mt={1}>
              Phone: +2 010-30046319
            </Typography>
            <Box sx={{ mt: 1.6 }}>
              <IconButton sx={{ p: 0, mr: 0.5 }}>
                <Twitter sx={{ fontSize: "19px", color: "#fff" }} />
              </IconButton>
              <IconButton sx={{ p: 0, mr: 0.5 }}>
                <Facebook sx={{ fontSize: "19px", color: "#fff", mx: 1 }} />
              </IconButton>
              <IconButton sx={{ p: 0, mr: 0.5 }}>
                <Instagram sx={{ fontSize: "19px", color: "#fff" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#fff"}
        variant="text"
        sx={{ fontsize: 18, pt: 4 }}
      >
        Developed with{" "}
        <FavoriteIcon fontSize="70%" sx={{ mx: 0.5, color: "#ff7790" }} />
        by
        <Button
          sx={{
            mx: 0,
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
