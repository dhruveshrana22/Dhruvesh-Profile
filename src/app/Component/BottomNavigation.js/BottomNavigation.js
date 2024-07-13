import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Flex } from 'antd';
import { Box, Divider, Grid, Hidden } from '@mui/material';

export default function BottomNavigationbar() {
    const [value, setValue] = React.useState('recents');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const drawer = (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <List>
                {['Recents', 'Favorites', 'Nearby', 'Folder'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index === 0 && <RestoreIcon />}
                            {index === 1 && <FavoriteIcon />}
                            {index === 2 && <LocationOnIcon />}
                            {index === 3 && <FolderIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <>
            {isMobile ? (
                <Box bgcolor={"red"}>
                    {/* Show Bottom Navigation on mobile devices */}
                    <Divider></Divider>
                    <Hidden smUp>
                        <BottomNavigation
                            sx={{ width: '100%', position: 'fixed', bottom: 0, bgcolor: "transparent" }}
                            value={value}
                            onChange={handleChange}
                        >
                            <BottomNavigationAction
                                label="Recents"
                                value="recents"
                                icon={<RestoreIcon />}
                                sx={{
                                    color: value === 'recents' ? 'blue' : 'whitesmoke',
                                    '& .MuiSvgIcon-root': {
                                        color: value === 'recents' ? 'blue' : 'whitesmoke',
                                    },
                                }}
                            />
                            <BottomNavigationAction
                                label="Favorites"
                                value="favorites"
                                icon={<FavoriteIcon />}
                                sx={{
                                    color: value === 'favorites' ? 'blue' : 'whitesmoke',
                                    '& .MuiSvgIcon-root': {
                                        color: value === 'favorites' ? 'blue' : 'whitesmoke',
                                    },
                                }}
                            />
                            <BottomNavigationAction
                                label="Nearby"
                                value="nearby"
                                icon={<LocationOnIcon />}
                                sx={{
                                    color: value === 'nearby' ? 'blue' : 'whitesmoke',
                                    '& .MuiSvgIcon-root': {
                                        color: value === 'nearby' ? 'blue' : 'whitesmoke',
                                    },
                                }}
                            />
                            <BottomNavigationAction
                                label="Folder"
                                value="folder"
                                icon={<FolderIcon />}
                                sx={{
                                    color: value === 'folder' ? 'blue' : 'whitesmoke',
                                    '& .MuiSvgIcon-root': {
                                        color: value === 'folder' ? 'blue' : 'whitesmoke',
                                    },
                                }}
                            />
                        </BottomNavigation>
                    </Hidden>

                    {/* Show a different component/layout on larger screens */}
                    <Hidden smDown>
                        <Box sx={{ padding: 2 }}>
                            {/* Replace with your drawer or other layout */}
                            <p>This is the content for larger screens</p>
                        </Box>
                    </Hidden>
                </Box>
            ) : (
                null
            )}
        </>
    );
}
