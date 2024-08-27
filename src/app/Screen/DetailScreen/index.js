import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Col, Typography } from "antd";
import { data, introdata, services, skills } from "../../Utils/content_option";
import Hader from "../../Component/Hader";
import Content from "../../Component/Content";
import { Link as ScrollLink, Element } from 'react-scroll';
import { Slide } from 'react-awesome-reveal';
import { Grid, useMediaQuery } from "@mui/material";
const DetailScreen = () => {
    const location = useLocation();
    const id = location.state?.id;
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");

    const matchedObject = data.find(item => item.id === id);
    // Now you can use the id in your component logic
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
                            <Hader title="Project Detail Page" BottomLine />
                        </Element>
                    </Slide>

                    <Slide direction="right" triggerOnce duration={2000}>
                        <Element name="skills">
                            <Content Imagecompo={matchedObject} />
                        </Element>
                    </Slide>


                </Col>
            </Grid>


        </>
    );
};

export default DetailScreen;
