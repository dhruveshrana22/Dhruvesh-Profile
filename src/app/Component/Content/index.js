import { Box, Button, Grid, Slider, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Flex, Row, Typography } from "antd";
import { BaseColor } from "../../Utils/Theme";

const AnimatedSlider = ({ value }) => {
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500; // Total duration of animation in ms
        const increment = value / (duration / 10); // Increment value

        const animateSlider = () => {
            start += increment;
            if (start >= value) {
                setSliderValue(value); // Ensure it stops exactly at the target value
            } else {
                setSliderValue(Math.min(Math.floor(start), value)); // Update slider value
                setTimeout(animateSlider, 10); // Repeat every 10ms
            }
        };

        animateSlider();

        return () => clearTimeout(animateSlider); // Cleanup timeout if component unmounts
    }, [value]);
    return (
        <Slider
            value={sliderValue}
            // aria-label="Slider"
            valueLabelDisplay="on"
            valueLabelFormat={(val) => `${val}%`} // Show percentage
            step={1}
            min={0}
            max={100}
            style={{ color: 'whitesmoke' }}
        />
    );
};
const Content = (props) => {
    const { content, description, title, Skill, services } = props;
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    display: isMobile || istablet ? "" : "flex",
                    gap: 10,
                    marginTop: 30,
                    marginBottom: 30,
                    paddingBottom: 20,
                    borderBottom: '0.5px solid gray', // Combine thickness, style, and color
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
                        {title}
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
                {Skill && (<Col style={{
                    width: isMobile || istablet ? '100%' : '50%',
                }}>
                    {Skill.map((item, index) => (
                        <Grid key={index}>
                            <Typography.Title
                                level={1}
                                style={{
                                    color: BaseColor.whiteSmoky.color,
                                    fontFamily: "monospace",
                                    fontSize: isMobile || istablet ? 12 : 20,
                                }}
                            >
                                {item.name}
                            </Typography.Title>
                            <AnimatedSlider value={item.value} />
                        </Grid>
                    ))}

                </Col>)}
                {services && (<Col style={{
                    width: isMobile || istablet ? '100%' : '50%',
                }}>
                    {services.map((item, index) => (
                        <Grid style={{}} key={index}>
                            <Grid style={{ borderBottom: '0.5px solid gray', }}>
                                <Typography.Title
                                    level={1}
                                    style={{
                                        color: BaseColor.whiteSmoky.color,
                                        fontFamily: "monospace",
                                        fontSize: isMobile || istablet ? 12 : 20,
                                    }}
                                >
                                    {item.title}
                                </Typography.Title>
                            </Grid>

                        </Grid>
                    ))}

                </Col>)}
            </Grid>
        </>
    );
};

export default Content;
