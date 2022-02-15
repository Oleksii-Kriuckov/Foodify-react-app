import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
        return <Navbar bg="primary" variant="dark" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className='ms-2'>
                        <Container className='d-flex justify-content-md-center justify-content-sm-start' >
                                <Link to="/">Random dish</Link>
                                <Link to="/favourites">Favourites</Link>
                        </Container>
                </Navbar.Collapse>
        </Navbar>

};

export default Header;
