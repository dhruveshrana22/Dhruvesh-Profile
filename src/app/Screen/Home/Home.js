import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import NavbarCompo from "../../Component/Navbar";
import { Images } from "../../../assets/ima";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { Col, Flex, Row, Typography } from "antd";
import { introdata } from "../../Utils/content_option";
import { RobotFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(max-width:1300px)");
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation

  return (
    <>
      <Grid
        style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Col style={{
          display: "flex",
          flexDirection: isMobile || istablet ? "column-reverse" : "row",
          justifyContent: isDesktop ? "space-between" : "space-around",
          width: "80%",
          gap: 10,
          top: isMobile || istablet ? 50 : "",
        }}>
          <Grid width={isMobile || istablet ? "100%" : "50%"} style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-start', alignItems: 'flex-start'
          }} >
            <Col style={{ padding: 10 }}>
              <h1 style={{ color: 'whitesmoke', fontSize: isMobile || istablet ? 20 : 45 }}>I'm Dhruvesh Rana</h1>
              <h2 style={{ color: 'whitesmoke', fontSize: isMobile || istablet ? 15 : 25 }}><Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.Forth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              /></h2>
              <Col xs={24}>
                <Typography style={{ fontFamily: 'monospace', fontSize: isMobile || istablet ? 15 : 18, color: 'whitesmoke' }}>
                  {introdata.description}
                </Typography>
              </Col>
            </Col>
            <Flex style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Row style={{ width: '100%', gap: 20 }}>
                <Button variant="outlined" style={{ fontSize: isMobile || istablet ? 10 : 15, color: "whitesmoke" }}
                  onClick={() => { navigate('/Portfolio') }}
                >My Portfolio</Button>
                <Button variant="contained"
                  onClick={() => { navigate('/Contect') }}
                  style={{ backgroundColor: 'whitesmoke', fontSize: isMobile || istablet ? 10 : 15, color: 'black' }}>Contect</Button>
              </Row>
            </Flex>
          </Grid>
          <Grid
            width={isMobile || istablet ? "100%" : "50%"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative", // Position the Grid relative to contain absolute elements
            }}
          >
            <img
              src={DhruveshImage}
              alt="Rolls-Royce"
              style={{
                zIndex: 1, // Ensure image is above the background but below the text
                objectFit: "cover",
                height: "80%",
                width: isMobile || istablet ? "100%" : "60%",
                boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)", // White shadow on all sides
                filter: "grayscale(100%) blur(2px) sepia(0.4) brightness(1.1)", // Black-and-white filter with blur and warmth
                transition: "filter 0.3s ease-in-out", // Smooth transition
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) blur(0px) sepia(0.4) brightness(1.1)"; // Remove blur on hover, keep black-and-white effect
                document.getElementById("hoverText").style.opacity = 0; // Hide text on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) blur(2px) sepia(0.4) brightness(1.1)"; // Reapply blur when not hovering
                document.getElementById("hoverText").style.opacity = 1; // Show text when not hovering
              }}
            />

            <div
              id="hoverText"
              style={{
                position: "absolute",
                top: "50%", // Center the text vertically
                left: "50%", // Center the text horizontally
                transform: "translate(-50%, -50%)", // Centering correction
                zIndex: 2, // Ensure text is above the image
                color: "red",
                fontSize: "24px",
                fontWeight: "bold",
                opacity: 1,
                pointerEvents: "none",
              }}
              animate={{
                y: [0, -20, 0], // Bounce animation
              }}
              transition={{
                y: {
                  duration: 1, // Duration of each bounce cycle
                  repeat: Infinity, // Infinite repeating
                  repeatType: "loop", // Looping animation
                },
              }}
            >
              {isMobile || istablet ? "Click Me" : "Hover Me"}
            </div>
          </Grid>


        </Col>
      </Grid>
    </>
  );
};

export default Home;
