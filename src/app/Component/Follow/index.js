import { Grid, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Col, Row, Typography } from "antd";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BaseColor } from "../../Utils/Theme";
import { BgColorsOutlined } from "@ant-design/icons";

const Follow = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const topPosition = window.innerHeight / 2;
  return (
    <>
      <Grid2
        position="absolute"
        style={{
          top: isMobile || istablet ? 0 : topPosition, // Position at half of the window height
          right: isMobile || istablet ? "" : 50, // Stretch to the right of the window
          transform: 'translateY(-50%)', // Center the element vertically
        }}
      >

        <Col>
          <LinkedInIcon
            style={{ fontSize: isMobile ? 30 : 40, color: BaseColor.whiteSmoky.color, }} // Adjust size and color as needed
          />
        </Col>
        <Col>
          <InstagramIcon
            style={{ fontSize: isMobile ? 30 : 40, color: BaseColor.whiteSmoky.color }} // Adjust size and color as needed
          />
        </Col>
      </Grid2>
    </>
  );
};

export default Follow;
