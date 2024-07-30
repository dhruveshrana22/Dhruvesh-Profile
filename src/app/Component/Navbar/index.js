import React, { useState } from "react";
import { Box, Grid, useMediaQuery, Modal, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarCompo = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        style={{
          width: isMobile || istablet ? 200 : 400,
          display: "flex",
          alignItems: "center",
          height: 50,
          position: "absolute",
          padding: isMobile || istablet ? 2 : 10,
          left: isMobile || istablet ? 10 : 50,
          top: isMobile || istablet ? 10 : 50,
        }}
      >
        <h4
          style={{
            fontSize: isMobile || istablet ? 20 : 40,
            fontFamily: "monospace",
          }}
        >
          Dhruvesh Rana
        </h4>
      </Grid>
      <Grid
        style={{
          display: "flex",
          width: 100,
          height: 50,
          position: "absolute",
          padding: isMobile || istablet ? 2 : 10,
          right: isMobile || istablet ? 10 : 50,
          top: isMobile || istablet ? 10 : 50,
          textAlign: "end",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <div onClick={handleOpen}>
          <MenuIcon style={{ fontSize: isMobile || istablet ? 40 : 80 }} />
        </div>
      </Grid>
      <Modal open={open} onClose={handleClose} closeAfterTransition >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "auto",
              bgcolor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              outline: "none",
            }}
          >
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Project</h2>
            <h2>Skill</h2>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NavbarCompo;
