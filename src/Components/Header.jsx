import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap'
import { NavLink, useMatch } from 'react-router-dom';
import { ModalWindow } from './modal';
import { useDispatch } from 'react-redux';


export const Header = () => {
    const matchFavour = useMatch('/favourites');
    const dispatch = useDispatch();

    return (
        <Navbar bg="primary" variant="dark" expand="sm" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container className='d-flex mt-2 mt-sm-0 justify-content-md-center justify-content-sm-start' >
                    <NavLink to="/" >Random dish</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
                </Container>
            </Navbar.Collapse>
            {matchFavour ?
                <Button
                    variant='secondary'
                    id='open_modal'
                    onClick={() => dispatch({ type: "setShowModal", payload: true })}
                >
                    Add custom dish
                </Button>
                : null
            }
            <ModalWindow  />
        </Navbar>
    )
}