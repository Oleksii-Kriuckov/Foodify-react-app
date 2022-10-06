import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap'
import { NavLink, useMatch } from 'react-router-dom';
import  ModalWindow  from './modal';
import { useDispatch, useSelector } from 'react-redux';


export const Header = () => {
    const matchFavour = useMatch('/favourites');
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch = useDispatch();

    return (
        <Navbar bg="primary" variant="dark" expand="sm" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container className='d-flex mt-2 mt-sm-0 justify-content-md-center justify-content-sm-start' >
                    <NavLink to="/" >Random dish</NavLink>
                    <NavLink to="/favourites">Favourites</NavLink>
                </Container>
            </Navbar.Collapse>
            {matchFavour ?
                <Button
                    variant='secondary'
                    id='open_modal'
                    onClick={() => setModalShow(true)}
                >
                    Add custom dish
                </Button>
                : null
            }
            <ModalWindow show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar>
    )
}