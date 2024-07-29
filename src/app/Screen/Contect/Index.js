import { Box, Grid, useMediaQuery } from '@mui/material';
import React from 'react';

const Contect = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

    return (
        <Grid container>
            <Box>
                <Grid >
                    Dhruvesh
                </Grid>
            </Box>
        </Grid>
    );
};

export default Contect;
