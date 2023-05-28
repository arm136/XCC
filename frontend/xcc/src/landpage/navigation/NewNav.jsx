import React from 'react';
import {
    Typography,
    Toolbar,
    AppBar,
    Link,
    Box,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { NavEvents } from './events/NavEvents';
import Tmodel from './teams/tmodel';
import { Contact } from './contact';
import DrawerComp from './DrawerComp';

import { useNavigate } from 'react-router-dom';
import FGallery from './FGallery';


function NewNav() {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))



    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/start');
    }



    return (
        <>
            <Box >
                <AppBar
                    position="fixed"
                    sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <Typography variant="h4" sx={{ p: 0.9 }}>
                            <span className="x">X</span>
                            <span className="cc">CC</span>
                        </Typography>
                        {

                            isMatch ? (
                                <>
                                    <DrawerComp />
                                </>
                            ) : (
                                <>
                                    <Box
                                        // backgroundColor="white"
                                        display={'flex'}
                                        width={'100%'}
                                        justifyContent={'center'}
                                    >

                                        <Link
                                            href="#home"
                                            underline="none"
                                            sx={{ p: 0.9, color: 'white' }}
                                            smooth={true}
                                            duration={500}
                                        >
                                            Home
                                        </Link>

                                        <Link
                                            href="#events"
                                            underline="none"
                                            sx={{ p: 0.9, color: 'white' }}
                                            smooth={true}
                                            duration={500}
                                        >
                                            Events
                                        </Link>

                                        <Link
                                            href="#teams"
                                            underline="none"
                                            sx={{ p: 0.9, color: 'white' }}
                                            smooth={true}
                                            duration={500}
                                        >
                                            Teams
                                        </Link>

                                        <Link
                                            href="#gallery"
                                            underline="none"
                                            sx={{ p: 0.9, color: 'white' }}
                                            smooth={true}
                                            duration={500}
                                        >
                                            Gallery
                                        </Link>

                                        <Link
                                            href="#contact"
                                            underline="none"
                                            sx={{ p: 0.9, color: 'white' }}
                                            smooth={true}
                                            duration={500}
                                        >
                                            Contact
                                        </Link>
                                        <Link
                                            // href='#login'
                                            underline="none"
                                            sx={{ p: 0.9, color: 'white' }}
                                            // onClick={() => loginWithRedirect()}
                                            onClick={(handleClick)}
                                        >
                                            Login
                                        </Link>
                                    </Box>
                                </>
                            )
                        }


                    </Toolbar>
                </AppBar>

                <div className='bd'>

                    <header className="bd_head" id='home'>
                        <h1>Xavier's Coding Club</h1>
                        <p>

                            We are a group of coding enthusiasts who love to learn and create new things.
                            Join us to expand your skills and build great projects together.

                        </p>
                    </header>

                    <section className='events' id="events">

                        <h1>Events</h1>
                        <div className="divider"></div>
                        <NavEvents />
                    </section>

                    <section className='teams' id="teams">
                        <Tmodel />
                    </section>

                    <section className='fgallery' id="gallery">
                    <h1>Gallery</h1>
                    <div className="divider"></div>
                        <FGallery/>
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