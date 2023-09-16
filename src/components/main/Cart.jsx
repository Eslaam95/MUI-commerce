import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartContent from "./ShoppingCartContent";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import { Close, ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

// eslint-disable-next-line react/prop-types
function Cart({ variant }) {
  const theme = useTheme();
  const { allItemsCount } = useShoppingCart();
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

  return (
    <>
      <IconButton
        aria-label="cart"
        onClick={toggleDrawer("right", !state["right"])}
      >
        <Badge badgeContent={allItemsCount} color={"primary"}>
          {variant === "floating" ? (
            <ShoppingCart sx={{ color: theme.palette.background.default }} />
          ) : (
            <ShoppingCart />
          )}
        </Badge>
      </IconButton>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box sx={{ minWidth: "350px", pt: 2, px: 3, position: "relative" }}>
          <IconButton
            aria-label="cart"
            onClick={toggleDrawer("right", false)}
            sx={{ position: "absolute", right: 3 }}
          >
            <Close />
          </IconButton>
          <ShoppingCartContent />
        </Box>
      </Drawer>
    </>
  );
}

export default Cart;
