import React, { useContext, useState } from 'react';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';
import Image from 'react-bootstrap/Image';
// import { textDecorationLine } from 'html2canvas/dist/types/css/property-descriptors/text-decoration-line';
const Header = () => {
      const { user, Logout } = useContext(AuthContext);
      const [showtxt, setShowtxt] = useState(false)
      
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
                                    <Nav className="mx-auto flex gap-2 text-decoration-none ">
                                          <NavLink to='/'
                                          className={`${location.pathname ==='/'?'':''} text-decoration-none text-danger` }
                                          >Home</NavLink>
                                          <NavLink className="text-decoration-none text-danger" to='/blog'>Blog</NavLink>

                                    </Nav>
                                    <Nav className='d-flex gap-2 p-2'>
                                          {user && <Col className='d-flex flex-col position-relative'>
                                                <Image
                                                      style={{ width: '50px' }}
                                                      src={user.photoURL}
                                                      roundedCircle
                                                      onMouseEnter={() => setShowtxt(true)}
                                                      onMouseLeave={() => setShowtxt(false)}
                                                />
                                                <NavLink
                                                      className='position-absolute text-decoration-none fw-bolder text-danger fs-6'
                                                >
                                                      {showtxt && user.displayName}
                                                </NavLink>
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