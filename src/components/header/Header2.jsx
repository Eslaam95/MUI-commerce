import {
  ExpandLess,
  ExpandMore,
  Person2Outlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import {
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useRef, useState } from "react";
import { useTheme } from "@emotion/react";

const options = ["All Categories", "Cars", "Laptops", "Phones"];
function Header2() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "22px",
    border: "1px solid #777",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "250px",
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 0.6,
    maxWidth: "550px",
    minWidth: "220px",
    transition: "all .1s",
    "&:hover": {
      border: "1px solid #333",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
  }));
  const solref = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = () => {
    setAnchorEl(solref.current);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack
        alignItems="center"
        // sx={{ flex: " 1 0 100%", textAlign: "center", pt: 2, order: 3 }}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>

      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#777" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.favColor.main,
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              minWidth: "150px",
              cursor: "pointer",
              padding: "2px 0",
              height: "100%",
            }}
          >
            <ListItem
              ref={solref}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{ textAlign: "center" }}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={solref}
            getContentAnchorEl={null}
            anchorPosition={{ left: 100, top: 100 }}
            anchorOrigin={{ vertical: -20, horizontal: "center" }}
            transformOrigin={{
              vertical: -130,
              horizontal: useMediaQuery("(min-width:800px)") ? -126 : 30,
            }}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "15px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack alignItems="center" direction="row" gap={1}>
        <IconButton aria-label="cart">
          <Badge badgeContent={3} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton>
          <Person2Outlined />
        </IconButton>
      </Stack>
    </Container>
  );
}

export default Header2;
