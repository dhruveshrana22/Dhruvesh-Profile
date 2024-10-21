import { Box, Button, AppBar, Toolbar, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import NavbarCompo from "../../Component/Navbar";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { introdata } from "../../Utils/content_option";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Portfolio from "../Portfolio";
import Contact from "../Contect/Index"; 
import About from "../About";
import { Link } from "react-scroll";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(max-width:1300px)");
  const navigate = useNavigate();

  // Function to open the app or redirect to Play Store
  function openAppOrRedirect() {
    const appPackage = "com.happykamper"; // Replace with your app's package name
    const playStoreUrl = "https://play.google.com/store/apps/details?id=" + appPackage;

    const appLink = "yourapp://"; // Replace with your app's URI scheme

    // Create an invisible iframe to try to open the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appLink;

    document.body.appendChild(iframe);

    // Redirect to Play Store after a timeout if the app is not opened
    setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 2000); // Adjust timeout as needed
  }

  return (
    <>
      {/* AppBar for navigation links */}
      {!isMobile && (
        <AppBar sx={{ marginBottom: 2, position: "fixed", right: '10%', background: '#0c0c0c' }}>
          <Toolbar>
            <Button color="inherit">
              <Link to="home-section" smooth={true} duration={500}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="about-section" smooth={true} duration={500}>About</Link>
            </Button>
            <Button color="inherit">
              <Link to="portfolio-section" smooth={true} duration={500}>Projects</Link>
            </Button>
            <Button color="inherit">
              <Link to="contact-section" smooth={true} duration={500}>Contact</Link>
            </Button>
          </Toolbar>
        </AppBar>
      )}

      {/* Main Content */}
      <Slide direction="down" duration={1000} style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
        <Box id="home-section" sx={{
          display: "flex",
          flexDirection: isMobile || isTablet ? "column-reverse" : "row",
          justifyContent: isDesktop ? "space-between" : "space-around",
          width: "80%",
          gap: 2,
          marginTop: isMobile || isTablet ? 5 : 0,
        }}>
          {/* Text Section */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 2 }}>
            <Typography variant="h1" sx={{ color: 'whitesmoke', fontSize: isMobile || isTablet ? 20 : 45 }}>
              I'm Dhruvesh Rana
            </Typography>
            <Typography variant="h2" sx={{ color: 'whitesmoke', fontSize: isMobile || isTablet ? 15 : 25 }}>
              <Typewriter
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
              />
            </Typography>
            <Typography sx={{ fontFamily: 'monospace', fontSize: isMobile || isTablet ? 15 : 18, color: 'whitesmoke' }}>
              {introdata.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
              <Button variant="outlined" sx={{ fontSize: isMobile || isTablet ? 10 : 15, color: "whitesmoke" }} onClick={() => navigate('/Portfolio')}>
                My Projects
              </Button>
              <Button variant="contained" sx={{ backgroundColor: 'whitesmoke', fontSize: isMobile || isTablet ? 10 : 15, color: 'black' }} onClick={() => navigate('/Contact')}>
                Contact
              </Button>
              {/* Button to open app or redirect */}
              <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' }} onClick={openAppOrRedirect}>
                Open App
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img
              src={DhruveshImage}
              alt="Dhruvesh"
              style={{
                objectFit: "cover",
                height: "80%",
                width: isMobile || isTablet ? "100%" : "60%",
                boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)",
                filter: "grayscale(100%) blur(2px) sepia(0.4) brightness(1.1)",
                transition: "filter 0.3s ease-in-out",
                animation: "rotateIn 2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) blur(0px) sepia(0.4) brightness(1.1)";
                document.getElementById("hoverText").style.opacity = 0;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) blur(2px) sepia(0.4) brightness(1.1)";
                document.getElementById("hoverText").style.opacity = 1;
              }}
            />
            <div
              id="hoverText"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                color: "red",
                fontSize: "24px",
                fontWeight: "bold",
                opacity: 1,
                pointerEvents: "none",
              }}
            >
              {isMobile || isTablet ? "Click Me" : "Hover Me"}
            </div>
          </Grid>
        </Box>
      </Slide>

      {/* Portfolio Section */}
      <Box id="portfolio-section" sx={{ borderTop: '2px dashed gray' }}>
        <Portfolio />
      </Box>

      {/* About Section */}
      <Box id="about-section" sx={{ borderTop: '2px dashed gray' }}>
        <About />
      </Box>

      {/* Contact Section */}
      <Box id="contact-section" sx={{ borderTop: '2px dashed gray' }}>
        <Contact />
      </Box>
    </>
  );
};

export default Home;
