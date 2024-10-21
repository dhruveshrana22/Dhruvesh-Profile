import { useEffect } from "react";
import { Box, Button, Grid, useMediaQuery, AppBar, Toolbar } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import NavbarCompo from "../../Component/Navbar";
import { Images } from "../../../assets/ima";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { Col, Flex, Row, Typography } from "antd";
import { introdata } from "../../Utils/content_option";
import { RobotFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Portfolio from "../Portfolio";
import Contect from "../Contect/Index";
import About from "../About";
import { Link } from "react-scroll";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(max-width:1300px)");
  const navigate = useNavigate();

  // Deep link redirection effect
  useEffect(() => {
    const redirectToApp = () => {
      const appUrl = "myapp://app/HomeScreen"; // Replace with your deep link URL for your app screen

      // Try opening the app
      window.location.href = appUrl;

      // If the app is not installed, redirect to fallback after 1 second
      setTimeout(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.happykamper"; // Fallback URL to Play Store
      },2000);
    };

    // Call the redirect function when the component mounts
    redirectToApp();
  }, []);

  return (
    <>
      {!isMobile && (
        <AppBar style={{ alignItems: 'flex-end', marginBottom: 20, width: 400, position: "fixed", right: '10%', background: '#0c0c0c' }}>
          <Toolbar>
            <Button color="inherit">
              <Link to="home-section" smooth={true} duration={500}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="about-section" smooth={true} duration={500}>
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="portfolio-section" smooth={true} duration={500}>
                Projects
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="contact-section" smooth={true} duration={500}>
                Contact
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      )}

      <Slide direction="down" duration={1000} style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
        <Col id="home-section" style={{ display: "flex", flexDirection: isMobile || istablet ? "column-reverse" : "row", justifyContent: isDesktop ? "space-between" : "space-around", width: "80%", gap: 10, top: isMobile || istablet ? 50 : "" }}>
          <Grid width={isMobile || istablet ? "100%" : "50%"} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
            <Col style={{ padding: 10 }}>
              <h1 style={{ color: 'whitesmoke', fontSize: isMobile || istablet ? 20 : 45 }}>I'm Dhruvesh Rana</h1>
              <h2 style={{ color: 'whitesmoke', fontSize: isMobile || istablet ? 15 : 25 }}>
                <Typewriter options={{ strings: [introdata.animated.first, introdata.animated.second, introdata.animated.third, introdata.animated.Forth], autoStart: true, loop: true, deleteSpeed: 10 }} />
              </h2>
              <Col xs={24}>
                <Typography style={{ fontFamily: 'monospace', fontSize: isMobile || istablet ? 15 : 18, color: 'whitesmoke' }}>
                  {introdata.description}
                </Typography>
              </Col>
            </Col>
            <Flex style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Row style={{ width: '100%', gap: 20 }}>
                <Button variant="outlined" style={{ fontSize: isMobile || istablet ? 10 : 15, color: "whitesmoke" }} onClick={() => { navigate('/Portfolio') }}>My Projects</Button>
                <Button variant="contained" onClick={() => { navigate('/Contect') }} style={{ backgroundColor: 'whitesmoke', fontSize: isMobile || istablet ? 10 : 15, color: 'black' }}>Contact</Button>
              </Row>
            </Flex>
          </Grid>

          <Grid width={isMobile || istablet ? "100%" : "50%"} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", position: "relative" }}>
            <img src={DhruveshImage} alt="Dhruvesh Image" style={{ zIndex: 1, objectFit: "cover", height: "80%", width: isMobile || istablet ? "100%" : "60%", boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)", filter: "grayscale(100%) blur(2px) sepia(0.4) brightness(1.1)", transition: "filter 0.3s ease-in-out", animation: "rotateIn 2s ease-in-out" }} />
            <style>
              {`
                @keyframes rotateIn {
                  0% {
                    transform: rotate(-360deg) scale(1);
                    opacity: 0;
                  }
                  100% {
                    transform: rotate(0deg) scale(1);
                    opacity: 1;
                  }
                }
              `}
            </style>

            <div id="hoverText" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2, color: "red", fontSize: "24px", fontWeight: "bold", opacity: 1, pointerEvents: "none" }}>
              {isMobile || istablet ? "Click Me" : "Hover Me"}
            </div>
          </Grid>
        </Col>
      </Slide>

      <Grid style={{ borderTop: '2px dashed gray' }} />
      <div id="portfolio-section">
        <Portfolio />
      </div>
      <Grid style={{ borderTop: '2px dashed gray' }} />
      <div id="about-section">
        <About />
      </div>
      <Grid style={{ borderTop: '2px dashed gray' }} />
      <div id="contact-section">
        <Contect />
      </div>
    </>
  );
};

export default Home;
