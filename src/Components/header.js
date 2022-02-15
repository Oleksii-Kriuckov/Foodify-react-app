import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import { Link, useMatch } from 'react-router-dom';

const Header = () => {
        const matchMain = useMatch('/');
        const matchFavour = useMatch('/favourites');

        return <Navbar bg="primary" variant="dark" expand="sm" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className='ms-2'>
                        <Container className='d-flex justify-content-md-center justify-content-sm-start' >
                                <Link to="/" className={matchMain ? 'active' : null}>Random dish</Link>
                                <Link to="/favourites" className={matchFavour ? 'active' : null}>Favourites</Link>
                        </Container>
                </Navbar.Collapse>
        </Navbar>
};

export default Header;
