import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/logo/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'darkcyan' }} variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img height='30px' style={{ borderRadius: '5px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            {
                                user
                                    ?

                                    <>
                                        <Nav.Link as={Link} to='/manageinventory'>ManageInventory</Nav.Link>
                                        <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button>
                                    </>
                                    :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;