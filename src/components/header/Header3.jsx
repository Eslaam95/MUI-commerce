import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Close, MenuOutlined } from "@mui/icons-material";
import Links from "./Links";
function Header3() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const links = [
    { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Details", subLinks: ["Link 1", "Link 2", "Link 3"] },
  ];
  return (
    <Container
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: theme.palette.text.primary,
            minWidth: "200px",
            justifyContent: "space-between",
            bgcolor: theme.palette.favColor.main,
            "&:.MuiButtonBase-root MuiMenuItem-root": {
              width: "220px",
            },
          }}
        >
          <WindowIcon />
          <Typography variant="body2" flexGrow={1} textAlign={"left"} mx={2}>
            Options
          </Typography>
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            li: { width: "200px" },
            ul: { bgcolor: theme.palette.favColor.main },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <BikeScooterIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <TimeToLeaveOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cars</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Laptops</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SmartphoneOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Phones</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      {useMediaQuery("(min-width:1201px)") && (
        <Box
          sx={{
            display: "flex",
            gap: 6,
            paddingRight: "10px",
          }}
        >
          <Links title="Home" />
          <Links title="Menu" />
          <Links title="Profiles" />
          <Links title="Analytics" right={true} />
        </Box>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <>
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuOutlined />
          </IconButton>
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{
              bgcolor: theme.palette.favColor.main,
              ".MuiDrawer-paper.MuiDrawer-paperAnchorTop": {
                height: "100vh",
                display: "flex",
                alignItems: "center",
                py: 15,
              },
            }}
          >
            <Box
              className={"border"}
              sx={{
                minWidth: "440px",
                position: "relative",
                py: 4,
              }}
            >
              <IconButton
                onClick={toggleDrawer("top", false)}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  ":hover": {
                    cursor: "pointer",
                    color: theme.palette.error.main,
                    transform: "rotate(90deg)",
                    transition: "all .2s",
                  },
                }}
              >
                <Close />
              </IconButton>
              <nav aria-label="secondary mailbox folders">
                {links.map((link) => {
                  return (
                    <>
                      <Accordion
                        sx={{ bgcolor: "transparent", my: 1 }}
                        elevation={0}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{link.mainLink}</Typography>
                        </AccordionSummary>
                        <List>
                          {link.subLinks.map((subLin) => {
                            return (
                              <ListItem sx={{ py: 0 }} key={subLin}>
                                <ListItemButton>
                                  <ListItemText primary={subLin} />
                                </ListItemButton>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Accordion>
                    </>
                  );
                })}
              </nav>
            </Box>
          </Drawer>
        </>
      )}
    </Container>
  );
}

export default Header3;
