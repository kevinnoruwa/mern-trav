import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Pro Shop</Navbar.Brand>
                 </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                     <LinkContainer to="/cart">
                        <Nav.Link ><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Nav.Link>
                     </LinkContainer>
                      <LinkContainer to="/login">
                        <Nav.Link><i class="fa fa-user" aria-hidden="true"></i> Sign In</Nav.Link>
                     </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </header>
    )
}

export default Header
