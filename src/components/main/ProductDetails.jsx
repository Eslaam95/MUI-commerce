/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

function ProductDetails({ ClickedProduct }) {
  const [mainImg, setMainImg] = useState(ClickedProduct.img);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ display: "flex", width: { xs: 150, md: 700 } }}>
        <img src={mainImg} alt="" width={"100%"} height={"100%"} />
      </Box>
      <Box sx={{ p: 2, textAlign: { xs: "center", md: "left" } }}>
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
        <Button sx={{ textTransform: "capitalise", mt: 1 }} variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
