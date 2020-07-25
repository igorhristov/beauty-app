import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './header.styles.css';

const Header = () => (
        <Navbar sticky="top"  expand='lg'>
            <Navbar.Brand href='#home'>Ritual Beauty</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto pink'>
                    <Nav.Link href='#home'>Почетна</Nav.Link>
                    <Nav.Link href='#about'>За Нас</Nav.Link>
                    <Nav.Link >Услуги</Nav.Link>
                    <Nav.Link href='#about'>Галерија</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
);

export default Header;
