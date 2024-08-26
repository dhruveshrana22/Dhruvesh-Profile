import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import NavbarCompo from "../../Component/Navbar";
import { Images } from "../../../assets/ima";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { Col, Flex, Row, Typography } from "antd";
import { introdata, services, skills } from "../../Utils/content_option";
import { RobotFilled } from "@ant-design/icons";
import Hader from "../../Component/Hader";
import { DeviceWidth } from "../../Utils/Theme";
import Content from "../../Component/Content";

const About = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Col style={{
                    width: isMobile || istablet ? '90%' : '70%',
                }}>
                    <Col >
                        <Hader title="About me" BottomLine />
                    </Col>
                    <Col >
                        <Content title={"Skills"} Skill={skills} />
                    </Col>
                    <Col >
                        <Content content title={"abit about my self"} description={introdata.description2} />
                    </Col>

                    <Col >
                        <Content title={"Services"} services={services} />
                    </Col>
                </Col>
            </Grid>
        </>
    );
};

export default About;
