import { Box, Grid, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Col, Flex, Row, Typography } from "antd";
import React from "react";

const Follow = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const istablet = useMediaQuery("(max-width:768px)");
  const deviceWidth = window.innerWidth;

  return (
    <>
      <Grid2
        bottom={isMobile || istablet ? 10 : 0}
        left={!isMobile || !istablet ? 0 : 0}
        justifyContent={"center"}
        width={"100%"}
        position={"absolute"}
        style={{
          display: "flex",
        }}
      >
        <Col style={{}}>Follow me --</Col>
        <Row
          style={{
            gap: 5,
          }}
        >
          <Col>Linkedin</Col>
          <Col>Linkedin</Col>
          <Col>Linkedin</Col>
        </Row>
      </Grid2>
    </>
  );
};

export default Follow;
