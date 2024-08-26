import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Col, Flex, Row, Typography } from "antd";
import { BaseColor } from "../../Utils/Theme";


const Content = (props) => {
    const { content, description } = props;
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    display: isMobile || istablet ? "" : "flex",
                    gap: 10,
                    marginTop: 20,
                    marginBottom: 20
                }}
            >

                <Col style={{
                    width: isMobile || istablet ? '100%' : '50%',
                }}>
                    <Typography.Title italic level={1} style={{
                        color: BaseColor.whiteSmoky.color,
                        fontFamily: "monospace",
                        fontSize: isMobile || istablet ? 15 : 20,
                        // fontSize: isMobile || istablet ? 30 : 60,
                    }}>
                        Know about me
                    </Typography.Title>

                </Col>
                {content && (<Col style={{
                    width: isMobile || istablet ? '100%' : '50%',
                }}>
                    <Typography.Title level={1} style={{
                        color: BaseColor.whiteSmoky.color,
                        fontFamily: "monospace",
                        fontSize: isMobile || istablet ? 12 : 20,
                        // fontSize: isMobile || istablet ? 30 : 60,
                    }}>
                        {description}
                    </Typography.Title>

                </Col>)}
            </Grid>
        </>
    );
};

export default Content;
