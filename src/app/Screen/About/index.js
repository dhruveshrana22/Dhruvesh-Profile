import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Col, Typography } from "antd";
import { introdata, services, skills } from "../../Utils/content_option";
import Hader from "../../Component/Hader";
import Content from "../../Component/Content";
import { Link as ScrollLink, Element } from 'react-scroll';
import { Slide } from 'react-awesome-reveal';

const About = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                    <Slide direction="left" triggerOnce>
                        <Element name="about-me">
                            <Hader title="About me" BottomLine />
                        </Element>
                    </Slide>

                    <Slide direction="right" triggerOnce duration={2000}>
                        <Element name="skills">
                            <Content title={"Skills"} Skill={skills} />
                        </Element>
                    </Slide>

                    <Slide direction="left" triggerOnce duration={2000}>
                        <Element name="about-myself">
                            <Content content title={"abit about my self"} description={introdata.description2} />
                        </Element>
                    </Slide>

                    <Slide direction="right" triggerOnce duration={2000}>
                        <Element name="services">
                            <Content title={"Services"} services={services} />
                        </Element>
                    </Slide>
                </Col>
            </Grid>
        </>
    );
};

export default About;
