import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

const Footer = () => {
      return (
            <Navbar className='mt-auto mt-5' collapseOnSelect expand="lg" bg="light" variant="dark">
                  <footer>
                        <Navbar>
                              <Row>
                                    <Col md={4}>
                                          <h5>About Us</h5>
                                          <p>We are a company that specializes in providing high-quality products to our customers.</p>
                                    </Col>
                                    <Col md={4}>
                                          <h5>Contact Us</h5>
                                          <p>Email: info@company.com</p>
                                          <p>Phone: 555-1234</p>
                                          <p>Address: 123 Main St, Anytown USA</p>
                                    </Col>
                                    <Col md={4}>
                                          <h5>Connect With Us</h5>
                                          <p>Follow us on social media:</p>
                                          <ul>
                                                <li><a href="#">Facebook</a></li>
                                                <li><a href="#">Twitter</a></li>
                                                <li><a href="#">Instagram</a></li>
                                          </ul>
                                    </Col>
                              </Row>
                        </Navbar>
                  </footer>
            </Navbar>
      );
};

export default Footer;