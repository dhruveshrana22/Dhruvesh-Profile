import { Box, Button, Grid, Input, Slider, TextField, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Flex, Image, Row, Typography } from "antd";
import { BaseColor } from "../../Utils/Theme";
import { isEmpty } from "lodash";
import emailjs from '@emailjs/browser';


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
    const { content, description, title, Skill, services, Contact, Imagecompo } = props;
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [showGoToSetting, setShowGoToSetting] = useState(false);

    const handleSendClick = (e) => {
        e.preventDefault(); // Prevent default form submission

        const newErrors = {};
        if (name === "8511") {
            setShowGoToSetting(true); // Set state to show "Go to Setting"
        } else {
            setShowGoToSetting(false); // Set state to hide "Go to Setting"
        }
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Use EmailJS to send the email
        emailjs
            .send('service_8syoeeb', 'template_faubqk4', {
                user_name: name,
                user_email: email,
                message: message
            }, '6Vxm-mJ0gSaDEsKeb')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                // Optionally reset the form or display a success message
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('Email sending failed:', error.text);
            });
    };


    const handleNameChange = (e) => {
        setName(e.target.value);
        if (errors.name) {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        if (errors.message) {
            setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
        }
    };
    return (
        <>
            <Grid
                style={{
                    display: "flex",
                    flexDirection: isMobile || istablet ? "column" : "row",
                    gap: Contact ? 30 : 10,
                    marginTop: 50,
                    marginBottom: 50,
                    paddingBottom: 20,
                    borderBottom: '0.5px solid gray',
                }}
            >


                <Col style={{
                    width: isMobile || istablet ? '100%' : Contact ? '40%' : '50%',
                }}>
                    {!Imagecompo && (<Typography.Title italic={Contact ? false : true} level={1} style={{
                        color: BaseColor.whiteSmoky.color,
                        fontFamily: Contact ? "sans-serif" : "monospace",
                        fontSize: isMobile || istablet ? 18 : 25,
                        marginBottom: 30
                        // fontSize: isMobile || istablet ? 30 : 60,
                    }}>
                        {title}
                    </Typography.Title>)}
                    {Contact && (
                        <Grid style={{ gap: 20, display: 'flex', flexDirection: 'column' }}>
                            <Row style={{ alignItems: 'center', fontSize: 20, }}>
                                <strong>Email: </strong><span style={{ marginLeft: 10, fontSize: 15, fontFamily: 'monospace' }}>dhrurana96@gmail.com</span>
                            </Row>
                            <Row style={{ alignItems: 'center', fontSize: 20 }}>
                                <strong>Phone: </strong><span style={{ marginLeft: 10, fontSize: 15, fontFamily: 'monospace' }}>8511587821</span>

                            </Row>
                            <Row style={{ alignItems: 'center', fontSize: 20 }}>
                                <Grid style={{ fontSize: 18 }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, or just want to say hello, feel free to drop me a message! </Grid>
                            </Row>
                        </Grid>


                    )}

                    {Imagecompo && (
                        <>
                            <Image src={Imagecompo?.Image} alt={"data "} height={500} style={{ objectFit: "cover", }} />
                        </>
                    )}

                </Col>
                {content && (<Col style={{
                    width: isMobile || istablet ? '100%' : '50%',
                }}>
                    <Typography.Title level={1} style={{
                        color: BaseColor.whiteSmoky.color,
                        fontSize: isMobile || istablet ? 12 : 20,
                        lineHeight: 1.5
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
                        <Grid style={{ marginBottom: 30 }} key={index}>
                            <Grid style={{ borderBottom: '0.5px solid gray', }}>
                                <Typography.Title
                                    level={1}
                                    style={{
                                        color: BaseColor.whiteSmoky.color,
                                        fontFamily: "monospace",
                                        fontSize: isMobile || istablet ? 18 : 25,
                                    }}
                                >
                                    {item.title}
                                </Typography.Title>
                            </Grid>
                            <Col>
                                <Typography.Title level={3} style={{
                                    color: BaseColor.whiteSmoky.color,
                                    fontSize: isMobile || istablet ? 15 : 18,
                                    lineHeight: 1.5

                                    // fontSize: isMobile || istablet ? 30 : 60,
                                }}>
                                    {item.description}
                                </Typography.Title>
                            </Col>

                        </Grid>
                    ))}

                </Col>)}
                {Imagecompo && (<Col style={{
                    width: isMobile || istablet ? '100%' : '50%',
                }}>

                    <Grid style={{ marginBottom: 30 }} >
                        <Grid style={{ borderBottom: '0.5px solid gray', }}>
                            <Typography.Title
                                level={1}
                                style={{
                                    color: BaseColor.whiteSmoky.color,
                                    fontFamily: "monospace",
                                    fontSize: isMobile || istablet ? 18 : 25,
                                }}
                            >
                                {Imagecompo?.title2}
                            </Typography.Title>
                        </Grid>
                        <Col>
                            <Typography.Title level={3} style={{
                                color: BaseColor.whiteSmoky.color,
                                fontSize: isMobile || istablet ? 15 : 18,
                                lineHeight: 1.5

                                // fontSize: isMobile || istablet ? 30 : 60,
                            }}>
                                {Imagecompo?.description2}
                            </Typography.Title>
                        </Col>

                    </Grid>
                    <Grid style={{ marginBottom: 30, borderBottom: '0.5px solid gray', }} >

                        <Row style={{ alignItems: 'center' }}>
                            <Typography.Title
                                level={1}
                                style={{
                                    color: BaseColor.whiteSmoky.color,
                                    fontFamily: "monospace",
                                    fontSize: isMobile || istablet ? 18 : 25,
                                }}
                            >
                                {Imagecompo?.title3}:
                            </Typography.Title>
                            <Typography.Title level={3} style={{
                                color: BaseColor.whiteSmoky.color,
                                fontSize: isMobile || istablet ? 15 : 18,
                                lineHeight: 1.5,
                                marginLeft: 5

                                // fontSize: isMobile || istablet ? 30 : 60,
                            }}>
                                {Imagecompo?.Role}
                            </Typography.Title>
                        </Row>
                        <Row style={{ alignItems: 'center' }}>
                            <Typography.Title
                                level={1}
                                style={{
                                    color: BaseColor.whiteSmoky.color,
                                    fontFamily: "monospace",
                                    fontSize: isMobile || istablet ? 18 : 25,
                                }}
                            >
                                {Imagecompo?.title4}:
                            </Typography.Title>
                            <Typography.Title level={3} style={{
                                color: BaseColor.whiteSmoky.color,
                                fontSize: isMobile || istablet ? 15 : 18,
                                lineHeight: 1.5,
                                marginLeft: 5

                                // fontSize: isMobile || istablet ? 30 : 60,
                            }}>
                                {Imagecompo?.Technologies}
                            </Typography.Title>
                        </Row>

                    </Grid>

                    {!isEmpty(Imagecompo?.title5) && (<Grid style={{ marginBottom: 30 }} >
                        <Grid style={{ borderBottom: '0.5px solid gray', }}>
                            <Typography.Title
                                level={1}
                                style={{
                                    color: BaseColor.whiteSmoky.color,
                                    fontFamily: "monospace",
                                    fontSize: isMobile || istablet ? 18 : 25,
                                }}
                            >
                                {Imagecompo?.title5}:
                            </Typography.Title>
                        </Grid>
                        <Col>
                            <Typography.Title level={3} style={{
                                color: BaseColor.whiteSmoky.color,
                                fontSize: isMobile || istablet ? 15 : 18,
                                lineHeight: 1.5

                                // fontSize: isMobile || istablet ? 30 : 60,
                            }}>
                                {Imagecompo?.OtherDetail}

                            </Typography.Title>
                            {!isEmpty(Imagecompo?.OtherDetail) && (
                                <>
                                    <Typography.Title
                                        level={3}
                                        style={{
                                            color: BaseColor.whiteSmoky.color,
                                            fontSize: isMobile || istablet ? 15 : 18,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {Imagecompo?.OtherDetail2}
                                    </Typography.Title>
                                    <Typography.Title
                                        level={3}
                                        style={{
                                            color: BaseColor.whiteSmoky.color,
                                            fontSize: isMobile || istablet ? 15 : 18,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {Imagecompo?.OtherDetail3}
                                    </Typography.Title>
                                </>
                            )}

                        </Col>

                    </Grid>)}



                </Col>)}
                {Contact && (
                    <Col style={{ width: isMobile || istablet ? '100%' : Contact ? '60%' : '50%', background: '#979898', }}>
                        <Grid style={{ marginBottom: 30, padding: 30, gap: 20, display: 'flex', flexDirection: 'column' }}>
                            <Grid style={{ justifyContent: "space-between", display: 'flex', gap: 20, flexDirection: isMobile || istablet ? 'column' : 'row' }}>
                                <Col style={{ width: isMobile || istablet ? '100%' : '40%' }}>
                                    <TextField
                                        label="Name"
                                        variant="filled"
                                        style={{ width: '100%' }}
                                        required
                                        color="primary"
                                        value={name}
                                        onChange={handleNameChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                    />
                                </Col>
                                <Col style={{ width: isMobile || istablet ? '100%' : '40%' }}>
                                    <TextField
                                        label="Email"
                                        variant="filled"
                                        style={{ width: '100%' }}
                                        required
                                        color="primary"
                                        value={email}
                                        onChange={handleEmailChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </Col>
                            </Grid>
                            <TextField
                                label="Message"
                                variant="filled"
                                style={{ width: '100%' }}
                                multiline
                                rows={4}
                                color="primary"
                                required
                                value={message}
                                onChange={handleMessageChange}
                                error={!!errors.message}
                                helperText={errors.message}
                            />
                            <Col>
                                <Button
                                    style={{ backgroundColor: 'black', color: 'whitesmoke', fontSize: 10 }}
                                    onClick={handleSendClick}
                                >
                                    Send
                                </Button>
                            </Col>
                            {showGoToSetting && (<Button
                                style={{ backgroundColor: 'black', color: 'whitesmoke', fontSize: 10 }}
                                onClick={handleSendClick}
                            >
                                Go to the Setting
                            </Button>)}
                        </Grid>
                    </Col>)}

            </Grid>
        </>
    );
};

export default Content;
