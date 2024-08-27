import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import NavbarCompo from "../../Component/Navbar";
import { Images } from "../../../assets/ima";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { Col, Flex, Row, Typography } from "antd";
import { data, introdata } from "../../Utils/content_option";
import { RobotFilled } from "@ant-design/icons";
import Card from "../../Component/Card/Index";

const Portfolio = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Grid style={{
                    gap: 50,
                    display: 'flex',
                    padding: 20,
                    width: isMobile || istablet ? "100%" : "80%",
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: "space-evenly"
                }}>
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </Grid>

            </Grid>
        </>
    );
};

export default Portfolio;
