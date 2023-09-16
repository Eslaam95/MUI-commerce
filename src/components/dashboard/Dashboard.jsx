import {
  Box,
  CssBaseline,
  Link,
  Popover,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Notifications,
  Person2Outlined,
  ShoppingCart,
} from "@mui/icons-material";
import DashboardStats from "./DashboardStats";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Dashboard() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorElNoti, setAnchorElNoti] = useState(null);

  const handleClickNoti = (event) => {
    setAnchorElNoti(event.currentTarget);
  };

  const handleCloseNoti = () => {
    setAnchorElNoti(null);
  };

  const openNoti = Boolean(anchorElNoti);
  const idNoti = openNoti ? "simple-popover" : undefined;

  const [anchorElAcc, setAnchorElAcc] = useState(null);

  const handleClickAcc = (event) => {
    setAnchorElAcc(event.currentTarget);
  };

  const handleCloseAcc = () => {
    setAnchorElAcc(null);
  };

  const openAcc = Boolean(anchorElAcc);
  const idAcc = openAcc ? "simple-popover2" : undefined;

  const [theme, colorMode] = useMode();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box bgcolor={theme.palette.bg.main} sx={{ minHeight: "100vh" }}>
          <Box
            sx={{ pl: useMediaQuery("(min-width:640px)") ? "80px" : "55px" }}
          >
            <AppBar
              position="fixed"
              open={open}
              sx={{ bgcolor: "#2B3445", " *": { color: "#fff" } }}
            >
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 2,
                      ...(open && { display: "none" }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="body1" noWrap component="div">
                    Dashboard
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
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
                        <DarkModeOutlined
                          fontSize="small"
                          sx={{ color: "#fff" }}
                        />
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
                        <LightModeOutlined
                          fontSize="small"
                          sx={{ color: "#fff" }}
                        />
                      </IconButton>
                    )}
                  </div>
                  <IconButton onClick={handleClickAcc}>
                    <Person2Outlined />
                  </IconButton>
                  <Popover
                    id={idAcc}
                    open={openAcc}
                    anchorEl={anchorElAcc}
                    onClose={handleCloseAcc}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        width: "100%",
                        " button": { flexGrow: 1 },
                        px: 2,
                        pt: 2,
                        pb: 0,
                      }}
                    >
                      <Box sx={{ pb: 1 }}>
                        <Typography variant="body1">Eslaam Mohamed</Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.customCardSubtitle.main }}
                        >
                          Admin
                        </Typography>
                      </Box>
                      <Box sx={{ py: 1.3 }}>
                        <Link
                          underline="none"
                          href="#"
                          sx={{
                            color: theme.palette.customCardSubtitle.main,
                            width: "100%",
                            display: "block",
                            p: 0.5,
                            " :hover": {
                              bgcolor: theme.palette.customCard.main,
                            },
                          }}
                        >
                          Profile
                        </Link>{" "}
                        <Link
                          underline="none"
                          href="#"
                          sx={{
                            color: theme.palette.customCardSubtitle.main,
                            width: "100%",
                            display: "block",
                            p: 0.5,
                            " :hover": {
                              bgcolor: theme.palette.customCard.main,
                            },
                          }}
                        >
                          Orders
                        </Link>
                        <Link
                          underline="none"
                          href="#"
                          sx={{
                            color: theme.palette.customCardSubtitle.main,
                            width: "100%",
                            display: "block",
                            p: 0.5,
                            " :hover": {
                              bgcolor: theme.palette.customCard.main,
                            },
                          }}
                        >
                          Settings
                        </Link>
                      </Box>
                      <Box sx={{ py: 1.3 }}>
                        <Link
                          underline="none"
                          onClick={() => navigate("/")}
                          sx={{
                            color: theme.palette.customCardSubtitle.main,
                            width: "100%",
                            display: "block",
                            cursor: "pointer",
                            py: 0.5,
                            pl: "4px",
                            " :hover": {
                              bgcolor: theme.palette.customCard.main,
                            },
                          }}
                        >
                          Log out
                        </Link>
                      </Box>
                    </Box>
                  </Popover>
                  <IconButton onClick={handleClickNoti}>
                    <Notifications />
                  </IconButton>
                  <Popover
                    id={idNoti}
                    open={openNoti}
                    anchorEl={anchorElNoti}
                    onClose={handleCloseNoti}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          width: "100%",
                          " button": { flexGrow: 1 },
                        }}
                      >
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                        >
                          <Tab label="Unread" {...a11yProps(0)} />
                          <Tab label="All" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                        <Stack>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "15px",
                              alignItems: "center",
                              borderBottom: "1px solid #ddd",
                              cursor: "pointer",
                              p: 2,
                            }}
                          >
                            <ShoppingCart sx={{ fontSize: "26px" }} />
                            <Box>
                              <Typography variant="body1" fontSize={"90%"}>
                                New Purshase
                              </Typography>
                              <Typography variant="body2" fontSize={"70%"}>
                                2 hours ago
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "15px",
                              alignItems: "center",
                              borderBottom: "1px solid #ddd",
                              cursor: "pointer",
                              p: 2,
                            }}
                          >
                            <ShoppingCart sx={{ fontSize: "26px" }} />
                            <Box>
                              <Typography variant="body1" fontSize={"90%"}>
                                New Purshase
                              </Typography>
                              <Typography variant="body2" fontSize={"70%"}>
                                2 hours ago
                              </Typography>
                            </Box>
                          </Box>
                        </Stack>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                        <Stack>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "15px",
                              alignItems: "center",
                              borderBottom: "1px solid #ddd",
                              cursor: "pointer",
                              p: 2,
                            }}
                          >
                            <DashboardIcon sx={{ fontSize: "26px" }} />
                            <Box>
                              <Typography variant="body1" fontSize={"90%"}>
                                New Purshase
                              </Typography>
                              <Typography variant="body2" fontSize={"70%"}>
                                4 hours ago
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "15px",
                              alignItems: "center",
                              borderBottom: "1px solid #ddd",
                              cursor: "pointer",
                              p: 2,
                            }}
                          >
                            <DashboardIcon sx={{ fontSize: "26px" }} />
                            <Box>
                              <Typography variant="body1" fontSize={"90%"}>
                                New Purshase
                              </Typography>
                              <Typography variant="body2" fontSize={"70%"}>
                                2 hours ago
                              </Typography>
                            </Box>
                          </Box>
                        </Stack>
                      </CustomTabPanel>
                    </Box>
                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        py: 1,
                        width: "100%",
                        textAlign: "center",
                        display: "inline-block",
                      }}
                    >
                      See All
                    </Link>
                  </Popover>
                </Box>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader
                sx={{ justifyContent: "space-between !important", pl: "20px" }}
                display="flex"
              >
                <Box>
                  <Link href="/" color={theme.palette.text.primary}>
                    <ShoppingCart />
                  </Link>
                </Box>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {["Dashboard", "Products", "Categories", "Settings"].map(
                  (text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index === 0 ? (
                            <DashboardIcon />
                          ) : index === 1 ? (
                            <ShoppingCart />
                          ) : index === 2 ? (
                            <BorderColorIcon />
                          ) : (
                            <SettingsIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {["Orders", "Customers", "Sellers"].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {index === 0 ? (
                          <BorderColorIcon />
                        ) : index === 1 ? (
                          <ShoppingCart />
                        ) : index === 2 ? (
                          <DashboardIcon />
                        ) : (
                          <DashboardIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: useMediaQuery("(min-width:640px)") ? 3 : 0,
              }}
            >
              <DrawerHeader />
              <DashboardStats />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboard;
