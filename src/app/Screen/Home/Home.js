import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import NavbarCompo from "../../Component/Navbar";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(max-width:1440px)");
  return (
    <>
      <NavbarCompo></NavbarCompo>
      <Grid
        xs={12}
        position={"absolute"}
        style={{  top: 100 }}
      >
        <img
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Spectre/11100/1705661590820/front-left-side-47.jpg"
          alt="Rolls-Royce"
          height={isMobile || istablet ? 500 : "100%"}
          width={"100%"}
        />
      </Grid>
    </>
  );
};

export default Home;
