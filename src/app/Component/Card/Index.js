import { Grid, useMediaQuery } from "@mui/material";
import { Button, Image } from "antd";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Card = (props) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");

    const { data } = props;
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);

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
                height: isMobile || istablet ? 250 : 350,
                width: isMobile || istablet ? 'auto' : 350,
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
                        width: isMobile || istablet ? 250 : 350,
                        height: isMobile || istablet ? 250 : 350,
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
                            <Button onClick={() => { alert("click on Image") }} style={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'whitesmoke' }}>Detail</Button>
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
                                    width: isMobile || istablet ? 250 : 350,
                                    height: isMobile || istablet ? 250 : 350,
                                    display: 'flex',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: 20,
                                    boxSizing: 'border-box',
                                    textAlign: 'center',
                                    zIndex: 1,
                                    flexWrap: 'wrap',
                                }}
                            >
                                <>
                                    <h1>{data?.title}</h1>
                                    <p
                                        style={{
                                            width: '100%',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word',
                                            padding: '10px',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        {data?.description}
                                    </p>
                                </>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </Grid>
        </Grid>
    );
};

export default Card;
