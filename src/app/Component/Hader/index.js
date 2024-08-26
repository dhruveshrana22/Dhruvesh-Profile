import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import NavbarCompo from "../../Component/Navbar";
import { Images } from "../../../assets/ima";
import DhruveshImage from '../../../assets/Images/Dhruvesh.jpg';
import { Col, Flex, Row, Typography } from "antd";
import { introdata } from "../../Utils/content_option";
import { RobotFilled } from "@ant-design/icons";
import { motion } from 'framer-motion';
import { BaseColor } from "../../Utils/Theme";
import { BorderColor } from "@mui/icons-material";


const Hader = ({ title, BottomLine }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const istablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:1300px)");
    return (
        <>
            <Grid
                style={{
                    display: "flex",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 2, x: 0 }}
                    transition={{ duration: 1.5 }}
                    style={{ alignItems: 'flex-start' }}
                >
                    <Typography.Title italic level={1} style={{
                        color: BaseColor.whiteSmoky.color,
                        fontFamily: "monospace",
                        fontSize: isMobile || istablet ? 30 : 60,
                        textDecoration: BottomLine ? `underline ${isMobile || istablet ? '2px' : '4px'} solid ${BaseColor.whiteSmoky.color}` : 'none',
                        textDecorationThickness: BottomLine ? (isMobile || istablet ? '0.8px' : '0.5px') : 'initial', // Adjusts thickness
                        textUnderlineOffset: BottomLine ? '5px' : '0',
                    }}>
                        {title}
                    </Typography.Title>
                </motion.div>


            </Grid>
        </>
    );
};

export default Hader;
