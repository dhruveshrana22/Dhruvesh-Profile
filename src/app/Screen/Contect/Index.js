import { Box, Grid, useMediaQuery } from '@mui/material';
import { Col } from 'antd';
import React, { useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Element } from 'react-scroll';
import Hader from '../../Component/Hader';
import Content from '../../Component/Content';
import { skills } from '../../Utils/content_option';

const Contect = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Grid
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Col style={{
                    width: isMobile || istablet ? '90%' : '70%',
                }}>
                    <Slide direction="left" triggerOnce>
                        <Element name="about-me">
                            <Hader title="Contact Me" BottomLine />
                        </Element>
                    </Slide>

                    <Slide direction="right" triggerOnce duration={2000}>
                        <Element name="skills">
                            <Content title={"Get In Touch"} Contact />
                        </Element>
                    </Slide>


                </Col>

            </Grid>
        </>
    );
};

export default Contect;
