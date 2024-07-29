import { Box, Grid, useMediaQuery } from '@mui/material';
import { Col, Flex, Row } from 'antd';
import React from 'react';

const NavbarCompo = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

    return (
        <Grid style={{}}>
            <Grid style={{}}>
                <Flex>
                    Dhruvesh Rana
                </Flex>


            </Grid>
            {isMobile && (
                <Grid style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

                    <Flex>
                        <Col style={{ transform: 'rotate(90deg)' }}>
                            Follow me --
                        </Col>
                    </Flex>
                    <Col style={{ paddingTop: 30 }}>
                        <Col>
                            Linkedin
                        </Col>
                        <Col>
                            Linkedin
                        </Col>
                        <Col>
                            Linkedin
                        </Col>
                    </Col>

                </Grid>
            )}
        </Grid>
    );
};

export default NavbarCompo;
