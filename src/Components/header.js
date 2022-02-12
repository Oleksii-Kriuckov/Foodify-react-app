import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return <Navbar bg="primary" variant="dark" expand="lg">
            <Container className='d-flex' style={{justifyContent: 'center'}}>
                    <Link to="/">Random dish</Link>
                    <Link to="/favourites">Favourites</Link>
            </Container>
        </Navbar>
    
};

export default Header;
