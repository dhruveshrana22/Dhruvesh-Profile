import { Grid, useMediaQuery } from "@mui/material";
import { Button, Flex, Image } from "antd";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");

    const { data } = props;
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 2000); // Adjust the delay as needed
    };

    return (
        <Grid
            style={{
                height: isMobile || istablet ? 250 : 300,
                width: isMobile || istablet ? 'auto' : 300,
                position: 'relative'
            }}
        >
            <Grid
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image
                    preview={false}
                    src={data?.Image}
                    alt={data?.title}
                    style={{
                        width: isMobile || istablet ? 250 : 300,
                        height: isMobile || istablet ? 250 : 300,
                        objectFit: 'cover',
                        // filter: 'grayscale(100%) sepia(0.4) brightness(1.1)',
                        transition: 'filter 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <AnimatePresence>
                    {isHovered && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: -50, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.5 }}
                                transition={{ duration: 0.5, ease: "circInOut" }}
                                style={{
                                    position: 'absolute',
                                    padding: 10,
                                    top: 0,
                                    left: 0,
                                    width: isMobile || istablet ? 250 : 300,
                                    height: isMobile || istablet ? 250 : 300,
                                    display: 'flex',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    boxSizing: 'border-box',
                                    textAlign: 'center',
                                    zIndex: 1,
                                    flexWrap: 'wrap',
                                }}
                            >
                                <Flex style={{ flexDirection: 'column' }}>
                                    <h1 style={{ fontSize: isMobile || istablet ? 15 : 20 }}>{data?.title}</h1>
                                    <p
                                        style={{
                                            width: '100%',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word',
                                            padding: '10px',
                                            boxSizing: 'border-box',
                                            fontSize: isMobile || istablet ? 12 : 15
                                        }}
                                    >
                                        {data?.description}
                                    </p>
                                    <Button onClick={() => { navigate('/DetailScreen', { state: { id: data?.id } }) }} style={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'whitesmoke' }}>Detail</Button>

                                </Flex>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </Grid>
        </Grid>
    );
};

export default Card;
