import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar>
                <Navbar.Brand as={Link} to="/">Justine August Mabalot</Navbar.Brand>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Navbar>
        </>
    )
};

export default Header;