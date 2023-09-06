/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, A11y } from "swiper/modules";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Featuredproducts({ pros }) {
  const { addItem, getItemQuantity, decreasreItemCount } = useShoppingCart();

  const [ClickedProduct, setClickedProduct] = useState({});

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        mb: 15,
        " .swiper-button-next": {
          right: 0,
          py: "7px",
          pl: "8px",
          bgcolor: "#000",
        },
        " .swiper-button-next::after": { fontSize: "17px", fontWeight: "bold" },
        " .swiper-button-prev": {
          zIndex: 9999,
          left: 0,
          py: "7px",
          pr: "8px",
          bgcolor: "#000",
        },
        " .swiper-button-prev::after": { fontSize: "17px", fontWeight: "bold" },
        " .swiper-button-disabled": {
          opacity: 1,
          bgcolor: theme.palette.favColor.main,
        },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Featured Products</Typography>
        <Typography variant="body1" fontWeight={300}>
          All our collections
        </Typography>
      </Box>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {pros.map((item) => {
          return (
            <SwiperSlide key={item.id} style={{ background: "transparent" }}>
              <Card
                sx={{
                  maxWidth: "100%",
                  borderRadius: 0,
                  " .MuiCardMedia-img": {
                    transition: "all 0.2s  ease-in-out",
                  },
                  ":hover .MuiCardMedia-img": {
                    scale: "1.05",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  sx={{ cursor: "pointer" }}
                  image={item.img}
                  alt="green iguana"
                  onClick={() => {
                    handleClickOpen();
                    setClickedProduct(item);
                  }}
                />
                <Stack flexDirection={"row"} sx={{ minHeight: "120px", pb: 1 }}>
                  <CardContent
                    sx={{
                      bgcolor: "transparent",
                      textAlign: "left",
                      pb: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      sx={{ my: 1 }}
                    >
                      ${item.price}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={item.rating}
                      size="small"
                      precision={0.1}
                      readOnly
                    />
                  </CardContent>
                  <CardActions
                    sx={{
                      flexGrow: 1,
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      mt: 1,
                      flexDirection: "column",
                    }}
                  >
                    {getItemQuantity(item.id) > 0 && (
                      <>
                        <Button
                          onClick={() => decreasreItemCount(item.id)}
                          size="small"
                          sx={{
                            textTransform: "capitalize",
                            border: "2px solid",
                            borderColor: theme.palette.primary.light,
                            color: theme.palette.primary.light,

                            py: 0,
                            px: 0,
                            minWidth: "20px",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          -
                        </Button>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                          sx={{ my: 1, width: "25px", textAlign: "center" }}
                        >
                          {getItemQuantity(item.id)}
                        </Typography>
                      </>
                    )}
                    <Button
                      onClick={() => addItem(item)}
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                        border: "2px solid",
                        borderColor: theme.palette.primary.light,
                        color: theme.palette.primary.light,

                        py: 0,
                        px: 0,
                        minWidth: "20px",
                        width: "25px",
                        height: "25px",
                      }}
                    >
                      +{/* <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} /> */}
                    </Button>
                  </CardActions>
                </Stack>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
    </Box>
  );
}

export default Featuredproducts;
