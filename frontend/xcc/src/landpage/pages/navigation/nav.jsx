import React, { useState } from 'react';
import { Contact } from './contact';
import Tmodel from './teams/tmodel';
import { Events } from './events/Events';
import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";


import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function Nav() {
    const [showBasic, setShowBasic] = useState(false);


    // Login using Auth0.
    const { loginWithRedirect } = useAuth0();



    // const navigate = useNavigate();

    // const handleClick = (e) => {
    //     navigate('/login');
    // }


    return (

        <header>

            <MDBNavbar className='navbar' expand='lg' dark bgColor='black' fixed="top">
                <MDBContainer className="Container">
                    <h1 className="navbar-logo">
                        <span className="x">X</span><span className='cc'>CC</span>
                    </h1>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}>
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 menu'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#home'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='#teams'>Teams</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='#events'>Events</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='#contact'>Contact</MDBNavbarLink>
                            </MDBNavbarItem>

                            {/* <MDBNavbarItem>
                                <MDBNavbarLink href='/Log'>Login</MDBNavbarLink>
                            </MDBNavbarItem> */}

                            <MDBNavbarItem className='nav-log'>
                                {/* <MDBNavbarLink onClick={(handleClick)} > Login</MDBNavbarLink> */}
                                <MDBNavbarLink onClick={() => loginWithRedirect()}> Login</MDBNavbarLink>
                            </MDBNavbarItem>


                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


            <div className='bd'>

                <header className="bd_head" id="home">
                    <h1>Xavier's Coding Club</h1>
                    <p>

                        We are a group of coding enthusiasts who love to learn and create new things.
                        Join us to expand your skills and build great projects together.

                    </p>
                </header>

                <section className='events' id="events">

                    <h1 className='bdtitle'>Upcoming Events</h1>
                    <div className="divider"></div>
                    <Events />
                </section>

                <section className='teams' id="teams">
                    <Tmodel />
                </section>

                <section className='contact' id="contact">
                    <h1 className=''>Contact Us</h1>
                    <div className="divider"></div>
                    <Contact />
                </section>
                <footer>
                    <p>Copyright &copy; {new Date().getFullYear()} Xavier's Coding Club</p>
                </footer>

            </div>
        </header>

    );
}