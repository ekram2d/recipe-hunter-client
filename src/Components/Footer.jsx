import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
      return (
            <div>
                  <footer className="mt-5">
                        <Container fluid>
                              <Row>
                                    <Col className="text-center">
                                          <p>&copy; 2023 Recipe Hunter</p>
                                    </Col>
                              </Row>
                        </Container>
                  </footer>
            </div>
      );
};

export default Footer;