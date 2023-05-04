import React, { useContext } from 'react';
import { Button, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
      const { user, Logout } = useContext(AuthContext);
      const handleLogout=()=>{

            Logout()
            .then((result)=>{

            })
            .catch(error=>{
                  
            })

      }
      console.log("user",user);
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home">Recipe Hunter club </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mx-auto ">
                                          <Link to='/'>Home</Link>
                                          <Nav.Link href="#pricing">Blog</Nav.Link>

                                    </Nav>
                                   <Nav>
                                          {user && <Nav.Link href="#deets">{user.displayName}</Nav.Link>}

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