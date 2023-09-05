import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useEffect, useState } from "react";
import supabase from "../main/supbase";
import { Close } from "@mui/icons-material";

function ShoppingCartContent() {
  const { cartItems, removeItem } = useShoppingCart();
  const [sdata, setsdata] = useState([]);
  const [loadingdata, setloadingdata] = useState(true);
  async function getItem(id) {
    setloadingdata(true);
    let { data: products, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);
    if (error) {
      console.log("error");
    }
    setloadingdata(false);
    return products;
  }
  useEffect(
    function () {
      cartItems.map((item) => {
        console.log(loadingdata);
        getItem(item.id)
          .then((d) => {
            setsdata((currItems) => [
              ...currItems,
              { ...d[0], quantity: item.quantity },
            ]);
          })
          .catch((err) => err);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartItems]
  );

  const TotalPrice = sdata.reduce((a, s) => {
    a += s.price * s.quantity;
    return a;
  }, 0);
  if (!cartItems.length) {
    return (
      <Stack sx={{ pt: 5 }}>
        <Typography variant="body1">Cart:</Typography>
        <Typography variant="body1">Not items Yet</Typography>
      </Stack>
    );
  }
  return (
    <Stack sx={{ pt: 5 }}>
      <Typography variant="body1">Cart:</Typography>
      {loadingdata && <CircularProgress sx={{ mx: "auto" }} />}
      {sdata.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{ display: "flex", my: 2, position: "relative" }}
          >
            <CardMedia
              component="img"
              sx={{ width: 80 }}
              image={item.img}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pr: 0,
                }}
              >
                <Box>
                  <Typography component="div" variant="body2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                    fontSize={"small"}
                  >
                    X {item.quantity}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                    fontSize={"small"}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <Typography component="div" variant="body2">
                    ${item.price * item.quantity}
                  </Typography>
                  <IconButton onClick={() => removeItem(item.id)}>
                    <Close />
                  </IconButton>
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}

      <Typography textAlign={"right"}>Total Price: ${TotalPrice}</Typography>
    </Stack>
  );
}

export default ShoppingCartContent;
