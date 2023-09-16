/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "@emotion/react";
import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import supabase from "./supbase";
import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { motion } from "framer-motion";
import Featuredproducts from "./Featuredproducts";
import Offers from "../offer/Offers";

function Main() {
  const [loading, setloading] = useState(true);
  const [fetcherror, setfetcherror] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const allProducts = "all";
  const menProducts = true;
  const womenProducts = false;
  // eslint-disable-next-line no-unused-vars
  const [poductFilter, setproductFilter] = useState(allProducts);
  const [allpros, setallpros] = useState([]);
  const [pros, setpros] = useState([]);
  const [ClickedProduct, setClickedProduct] = useState({});

  async function setproducts() {
    setloading(true);
    let { data: products, error } = await supabase.from("products").select("*");
    setpros(products);
    setallpros(products);
    if (error) {
      setfetcherror(error.message);
    }
    setloading(false);
  }
  function filterProducts(filter) {
    setloading(true);
    if (filter === "all") {
      setpros(allpros);
    } else if (filter === true) {
      const men = allpros.filter((item) => item.men === true);
      setpros(men);
    } else if (filter === false) {
      const women = allpros.filter((item) => item.men === false);
      setpros(women);
    }
    setloading(false);
  }
  /*
  async function getproducts(filter) {
    setloading(true);
    if (filter === "all") {
      setpros(allpros);
    } else if (filter === true) {
      let { data: products, error } = await supabase
        .from("products")
        .select("*")
        .eq("men", true);

      setpros(products);
      if (error) {
        setfetcherror(error.message);
      }
    } else if (filter === false) {
      let { data: products, error } = await supabase
        .from("products")
        .select("*")
        .eq("men", false);
      setpros(products);
      if (error) {
        setfetcherror(error.message);
      }
    }
    setloading(false);
  }
  */
  useEffect(function () {
    setproducts();
  }, []);
  useEffect(
    function () {
      //load

      filterProducts(poductFilter);
      //end load
    },
    [poductFilter]
  );

  const handleFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setproductFilter(newFilter);
    }
  };
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // if (error) {
  //   return <Typography variant="h4">{error.message}</Typography>;
  // }
  if (fetcherror) {
    return (
      <Box minHeight={"300px"}>
        <Typography
          variant="h5"
          textAlign={"center"}
          minHeight={"300px"}
          mt={15}
        >
          {fetcherror}
        </Typography>
      </Box>
    );
  }
  return (
    <Container sx={{ my: 8, pb: 3 }}>
      <Featuredproducts pros={allpros} />
      <Offers />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={4}
        flexWrap={"wrap"}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in execlusive brand selection
          </Typography>
        </Box>

        <Box>
          <ToggleButtonGroup
            value={poductFilter}
            exclusive
            onChange={handleFilter}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,.5) !important",
                color: "#e94560 !important",
                bgcolor: "initial",
              },
            }}
          >
            <ToggleButton
              className="Fbtn"
              value={allProducts}
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="Fbtn"
              value={menProducts}
              aria-label="centered"
              sx={{
                mx: "15px !important",
                color: theme.palette.text.primary,
              }}
            >
              Men category
            </ToggleButton>
            <ToggleButton
              className="Fbtn"
              value={womenProducts}
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-around"
        flexWrap="wrap"
        gap={2}
        sx={{ mt: 8, position: "relative" }}
      >
        {loading && (
          <Box minHeight={"300px"}>
            <CircularProgress />
          </Box>
        )}
        {pros.map((item) => {
          return (
            <Card
              component={motion.section}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 0.2 }}
              sx={{
                maxWidth: 315,
                mb: 5,
                " .MuiCardMedia-img": {
                  transition: "all 0.2s  ease-in-out",
                },
                ":hover .MuiCardMedia-img": {
                  rotate: "2deg",
                  scale: "1.05",
                },
              }}
              key={item.title}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={item.img}
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h56" component="div">
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="p">
                    ${item.price}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", mt: 1 }}>
                <Button
                  size="large"
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => {
                    handleClickOpen();
                    setClickedProduct(item);
                  }}
                >
                  <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                  Add to cart
                </Button>
                <Rating
                  name="read-only"
                  value={item.rating}
                  precision={0.1}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{
          " .MuiPaper-root": {
            minWidth: {
              md: 800,
              xs: "100%",
            },
            minHeight: "200px",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 5,
            top: 5,
            ":hover": {
              cursor: "pointer",
              color: theme.palette.error.main,

              transition: "all .2s",
            },
          }}
        >
          <Close />
        </IconButton>
        <ProductDetails ClickedProduct={ClickedProduct} />
      </Dialog>
    </Container>
  );
}

export default Main;
