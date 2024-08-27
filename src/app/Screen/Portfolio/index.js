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
import Hader from "../../Component/Hader";
import { Slide } from "react-awesome-reveal";

const Portfolio = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Col style={{
                    width: isMobile || istablet ? '90%' : '70%',
                }}>
                    <Slide direction="right" duration={2000}>
                        <Hader title={"Projects"} BottomLine />
                    </Slide>

                    <Slide duration={2500}>
                        <Grid style={{
                            gap: 50,
                            display: 'flex',
                            padding: 20,
                            width: "100%",
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: "space-evenly"
                        }}>
                            {data.map((item, index) => (
                                <Card key={index} data={item} />
                            ))}
                        </Grid>
                    </Slide>
                </Col>

            </Grid>
        </>
    );
};

export default Portfolio;
