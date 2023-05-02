import React from 'react';
import {
    Typography,
    Toolbar,
    AppBar,
    Link,
    Box,
    List,
    Collapse,
    IconButton,
} from '@mui/material';
import { Events } from './events/Events';
import Tmodel from './teams/tmodel';
import { Contact } from './contact';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


function NewNav() {

    const [open, setOpen] = useState(false);
    // const handleClick = () => {
    //     setOpen(!open)
    // }



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <Typography variant="h4" sx={{ p: 0.9 }}>
                            <span className="x">X</span>
                            <span className="cc">CC</span>
                        </Typography>
                        <Box
                            // backgroundColor="white"
                            display={'flex'}
                            width={'100%'}
                            justifyContent={'center'}
                        >
                            
                            <IconButton
                            onClick={() => setOpen(!open)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                    <Link
                                        href="#home"
                                        underline="none"
                                        sx={{ p: 0.9 }}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        href="#events"
                                        underline="none"
                                        sx={{ p: 0.9 }}
                                    >
                                        Events
                                    </Link>

                                    <Link
                                        href="#teams"
                                        underline="none"
                                        sx={{ p: 0.9 }}
                                    >
                                        Teams
                                    </Link>

                                    <Link
                                        href="#contact"
                                        underline="none"
                                        sx={{ p: 0.9 }}
                                    >
                                        Contact
                                    </Link>

                                    <Link
                                        underline="none"
                                        sx={{ p: 0.9 }}
                                    >
                                        Login
                                    </Link>
                            </Collapse>
                        </Box>
                    </Toolbar>
                </AppBar>

                <div className='bd'>

                    <header className="bd_head" id="home">
                        <h1>Xavier's Coding Club</h1>
                        <p>

                            We are a group of coding enthusiasts who love to learn and create new things.
                            Join us to expand your skills and build great projects together.

                        </p>
                    </header>

                    <section className='events' id="events">

                        <h1>Events</h1>
                        <div className="divider"></div>
                        <Events />
                    </section>

                    <section className='teams' id="teams">
                        <Tmodel />
                    </section>

                    <section className='contact' id="contact">
                        <h1>Contact Us</h1>
                        <div className="divider"></div>
                        <Contact />
                    </section>
                    <footer>
                        <p>Copyright &copy; {new Date().getFullYear()} Xavier's Coding Club</p>
                    </footer>

                </div>
            </Box >


        </>
    );
}

export default NewNav;