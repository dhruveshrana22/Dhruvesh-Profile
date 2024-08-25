import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import NavbarCompo from "../../Component/Navbar";
import { Images } from "../../../assets/ima";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { Col, Flex, Row, Typography } from "antd";
import { introdata } from "../../Utils/content_option";
import { RobotFilled } from "@ant-design/icons";

const Portfolio = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    height: '100vh',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                Portfolio
            </Grid>
        </>
    );
};

export default Portfolio;
