import React, { useState } from 'react';
import {
    SwipeableDrawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Link
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { loginWithRedirect } = useAuth0();
    // const []
    return (
        <React.Fragment>
            <SwipeableDrawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}

            >
                <List >
                    <ListItemButton>
                        <ListItemText>
                            <Link href="#home" underline="none" sx={{ color: 'black' }}>
                                Home
                            </Link>
                        </ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText>
                            <Link href="#events" underline="none" sx={{ color: 'black' }}>
                                Events
                            </Link>
                        </ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText>
                            <Link href="#teams" underline="none" sx={{ color: 'black' }}>
                                Teams
                            </Link>
                        </ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText>
                            <Link href="#contact" underline="none" sx={{ color: 'black' }}>
                                Contact
                            </Link>
                        </ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText onClick={() => loginWithRedirect()}>Login</ListItemText>
                    </ListItemButton>
                </List>
            </SwipeableDrawer>
            <IconButton
                sx={{ color: "white", marginLeft: 'auto' }}
                onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    );
};

export default DrawerComp;