import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
// import required modules
// eslint-disable-next-line no-unused-vars
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const slides = [
  { title: "MEN", imgSrc: "banner-15.jpg" },
  { title: "WOMEN", imgSrc: "banner-25.jpg" },
];
function Hero() {
  const theme = useTheme();
  return (
    <Container sx={{ display: "flex", gap: 2 }}>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="heroSwiper"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {slides.map((sli) => {
          return (
            <SwiperSlide key={sli.imgSrc}>
              <img src={sli.imgSrc} alt="Banner" />
              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                  },
                  [theme.breakpoints.down("sm")]: {
                    py: 4,
                  },
                }}
              >
                <Typography sx={{ color: "#222" }} variant="h5">
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{ color: "#222", my: 1, fontWeight: 400 }}
                  variant="h3"
                >
                  {sli.title}
                </Typography>
                <Stack
                  sx={{ justifyContent: { xs: "center", sm: "left" } }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography sx={{ color: "#333", mr: 1 }} variant="h5">
                    SALE UP TO
                  </Typography>
                  <Typography sx={{ color: "#D23f57" }} variant="h5">
                    30% OFF
                  </Typography>
                </Stack>
                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    bgcolor: "#222",
                    boxShadow: "0px 4px 16px rgba(43,52,69,.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": { bgcolor: "#151515" },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box sx={{ width: "37%", display: { xs: "none", md: "block" } }}>
        <Box sx={{ position: "relative" }}>
          <img src="banner-17.jpg" alt="Banner" width={"100%"} />
          <Stack
            sx={{
              position: "absolute",
              left: "5%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2B3445", fontSize: "18px" }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
            >
              SUMMER
            </Typography>
            <Typography variant="h6" sx={{ color: "#2B3445" }}>
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: ".2s",
                "&:hover": {
                  color: "#D23f57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIosSharp sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src="banner-16.jpg" alt="Banner" width={"100%"} />
          <Stack
            sx={{
              position: "absolute",
              left: "5%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2B3445", fontSize: "18px" }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
            >
              DESKTOPS
            </Typography>
            <Typography variant="h6" sx={{ color: "#2B3445" }}>
              & LAPTOPS
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: ".2s",
                "&:hover": {
                  color: "#D23f57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIosSharp sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
