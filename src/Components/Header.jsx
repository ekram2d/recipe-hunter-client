import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home">Recipe Hunter club </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mx-auto">
                                          <Nav.Link href="#features">Home</Nav.Link>
                                          <Nav.Link href="#pricing">Blog</Nav.Link>
                                          
                                    </Nav>
                                    <Nav>
                                          <Nav.Link href="#deets">Profile</Nav.Link>
                                          <Nav.Link eventKey={2} href="#memes">
                                                Login
                                          </Nav.Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;