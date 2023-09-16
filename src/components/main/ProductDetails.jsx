/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import DeleteIcon from "@mui/icons-material/Delete";
function ProductDetails({ ClickedProduct }) {
  const [mainImg, setMainImg] = useState(ClickedProduct.img);
  const { addItem, getItemQuantity, decreasreItemCount, removeItem } =
    useShoppingCart();

  const qunatity = getItemQuantity(ClickedProduct.id);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexDirection: { xs: "column", md: "row" },
          py: { xs: 3, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: 150, md: 700 },
            height: { md: "100%" },
            bgcolor: { md: "#fff" },
            py: { md: 5 },
          }}
        >
          <img src={mainImg} alt="" width={"100%"} height={"100%"} />
        </Box>
        <Box
          sx={{ px: 2, py: { md: 6 }, textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="body2">
            {ClickedProduct.men === true ? "MEN" : "WOMEN"} FASHION
          </Typography>
          <Typography variant="h5">{ClickedProduct.title}</Typography>
          <Typography my={0.4} color={"crimson"} variant="h5">
            ${ClickedProduct.price}
          </Typography>
          <Typography variant="body2">{ClickedProduct.desc}</Typography>
          <Stack
            direction={"row"}
            gap={1}
            my={2}
            sx={{ justifyContent: { xs: "center", md: "left" } }}
          >
            {[ClickedProduct.img_desc_1, ClickedProduct.img].map((imgSrc) => {
              return (
                <img
                  style={{
                    cursor: "pointer",
                    borderRadius: 3,
                    opacity: mainImg === imgSrc ? 1 : 0.7,
                    background: "#121212",
                  }}
                  src={imgSrc}
                  alt=""
                  width={100}
                  key={imgSrc}
                  onClick={() => {
                    setMainImg(imgSrc);
                  }}
                />
              );
            })}
          </Stack>
          {(qunatity === undefined || qunatity === 0) && (
            <Button
              sx={{ textTransform: "capitalise", mt: 1 }}
              variant="contained"
              onClick={() => {
                addItem(ClickedProduct);
              }}
            >
              <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
              Add to Cart
            </Button>
          )}
          {qunatity > 0 && (
            <Stack direction={"row"} gap={1}>
              <Button
                sx={{
                  textTransform: "capitalise",

                  p: 0,
                  minWidth: "30px",
                }}
                variant="contained"
                onClick={() => {
                  addItem(ClickedProduct);
                }}
              >
                +
              </Button>
              <Typography
                variant="body2"
                textAlign={"center"}
                width={"auto"}
                px={2}
              >
                {qunatity}
              </Typography>
              <Button
                sx={{
                  textTransform: "capitalise",

                  minWidth: "30px",
                  p: 0,
                }}
                variant="contained"
                onClick={() => {
                  qunatity > 1
                    ? decreasreItemCount(ClickedProduct.id)
                    : removeItem(ClickedProduct.id);
                }}
              >
                -
              </Button>
              <Button
                sx={{
                  textTransform: "capitalise",

                  minWidth: "30px",
                  p: 0,
                }}
                variant="contained"
                onClick={() => {
                  removeItem(ClickedProduct.id);
                }}
              >
                <DeleteIcon />
              </Button>
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ProductDetails;
