import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import NavbarCompo from "../../Component/Navbar";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(max-width:1440px)");
  return (
    <>
      <Grid
        position={"relative"}
        style={{
          backgroundColor: "red",
          top: isMobile || istablet ? 100 : 150,
          display: "flex",
          flexDirection: isMobile || istablet ? "column-reverse" : "row",
          justifyContent: "space-around",
        }}
      >
        <Grid width={"50%"} height={"50%"} bgcolor={"green"}>
          <Grid style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Spectre/11100/1705661590820/front-left-side-47.jpg"
              alt="Rolls-Royce"
              height={isMobile || istablet ? 500 : "100%"}
              width={"100%"}
              style={{ position: "relative", zIndex: 0 }}
            />
          </Grid>
        </Grid>
        <Grid width={"50%"} height={"50%"}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(0, 0.5, 0.5, 0.5), rgba(255, 255, 255, 0.5))", // Black to white gradient

                zIndex: 1, // Ensure the overlay is above the image
              }}
            />
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Spectre/11100/1705661590820/front-left-side-47.jpg"
              alt="Rolls-Royce"
              height={isMobile || istablet ? 500 : "100%"}
              width={"100%"}
              style={{ position: "relative", zIndex: 0 }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
