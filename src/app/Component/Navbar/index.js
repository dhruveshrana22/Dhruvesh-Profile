import React, { useState } from "react";
import {
  Box,
  Grid,
  useMediaQuery,
  Modal,
  Fade,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { hover } from "@testing-library/user-event/dist/hover";
import { Col } from "antd";

const AnimatedText = ({
  text,
  animation,
  delay,
  onClick,
  cursor = "default",
  style,
  className,
}) => (
  <Typography
    className={className}
    variant="h2"
    sx={{
      color: "white",
      animation: `${animation} 2s ease-in-out forwards`,
      animationDelay: `${delay}`,
      cursor: cursor,
      fontFamily: "monospace",
    }}
    style={style} // Use style prop for additional inline styles
    onClick={onClick}
  >
    {text}
  </Typography>
);

const NavbarCompo = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(max-width:1440px)");
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const textItems = [
    { text: "Home", delay: "0s", path: "/" },
    { text: "About", delay: "0.5s", path: "/About" },
    { text: "Projects", delay: "1s", path: "/Portfolio" },
    { text: "Contact", delay: "1.5s", path: "/Contect" },
  ];

  return (
    <>
      <Col style={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid
          style={{
            width: isMobile || istablet ? 200 : 400,
            display: "flex",
            alignItems: "center",
            height: 50,
            paddingLeft: "2%",
            padding: isMobile || istablet ? 2 : 10,
            left: isMobile || istablet ? 10 : 50,
            top: isMobile || istablet ? 10 : 50,
          }}
        >
          <h4 onClick={() => navigate("/")}
            style={{
              fontSize: isMobile || istablet ? 20 : 40,
              fontFamily: "monospace",
              cursor: isMobile || istablet ? "" : 'pointer'
            }}
          >
            Dhruvesh Rana
          </h4>
        </Grid>
        <Grid
          style={{
          }}
        >
          <Button color="inherit" onClick={handleOpen}>
            <MenuIcon style={{ fontSize: isMobile || istablet ? 40 : 80 }} />
          </Button>
        </Grid>
      </Col>
      <Modal open={open} closeAfterTransition>
        {/* <Fade in={open}> */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            bgcolor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
            animation: "slideIn 0.5s forwards",
          }}
        >
          <Grid
            onClick={handleClose}
            position={"absolute"}
            style={{
              top: 10,
              left: 20,
              fontSize: 30,
              cursor: isMobile || istablet ? "" : "pointer",
            }}
          >
            X
          </Grid>
          {textItems.map((item, index) => (
            <AnimatedText
              className={"animated-text"}
              key={index}
              text={item.text}
              animation="slideRightToLeft"
              style={{
                cursor: isMobile || istablet ? "" : "pointer",
              }}
              delay={item.delay}
              onClick={() => {
                navigate(item.path); // Use navigate to route to the specified path
                handleClose(); // Close modal after navigation
              }}
            />
          ))}
        </Box>
        {/* </Fade> */}
      </Modal>
    </>
  );
};

export default NavbarCompo;
