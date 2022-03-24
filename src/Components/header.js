import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import { NavLink, useMatch  } from 'react-router-dom';

const Header = () => {
        const matchFavour = useMatch('/favourites');

        return (
                <Navbar bg="primary" variant="dark" expand="sm" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                                <Container className='d-flex justify-content-md-center justify-content-sm-start' >
                                        <NavLink to="/" >Random dish</NavLink>
                                        <NavLink to="/favourites" >Favourites</NavLink>
                                </Container>
                        </Navbar.Collapse>
                </Navbar>
        )
};

export default Header;
