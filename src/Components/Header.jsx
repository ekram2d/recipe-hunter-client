import React, { useContext } from 'react';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';
import Image from 'react-bootstrap/Image';
const Header = () => {
      const { user, Logout } = useContext(AuthContext);
      const handleLogout = () => {

            Logout()
                  .then((result) => {

                  })
                  .catch(error => {

                  })

      }
      // console.log("photo", user.photoURL);
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home">Recipe Hunter club </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mx-auto flex gap-2 ">
                                          <NavLink to='/'>Home</NavLink>
                                          <NavLink to='/blog'>Blog</NavLink>

                                    </Nav>
                                    <Nav className='d-flex gap-2 p-2'>
                                          {user && <Col >
                                                <Image style={{ width: '40px' }} src={user.photoURL} roundedCircle /> <NavLink>  {user.displayName}</NavLink>
                                          </Col>}
                                    </Nav>
                                    <Nav className=''>

                                          {
                                                user ? <Button variant="secondary" onClick={handleLogout}>Logout</Button> :
                                                      <Link to='/login' ><Button variant="secondary" >LogIn</Button></Link>
                                          }
                                    </Nav>



                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;