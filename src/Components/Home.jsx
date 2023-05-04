import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import ChefData from './ChefData';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
      const [chef, setChef] = useState([]);
      useEffect(() => {
            fetch("http://localhost:5000/chef")
                  .then((res) => res.json())
                  .then((data) => setChef(data))
                  .catch((error) => console.error(error))
      }, [])

      return (
            <>
                  <Slider></Slider>
                  <div className='mt-5'>
                        <h2>THe chef are</h2>
                        <Row xs={1} md={3} >



                              {
                                    chef.map((data) =>
                                          <Row xs={1} md={2} >
                                                <ChefData key={data.id} data={data}></ChefData>
                                          </Row>

                                    )
                              }
                        </Row>
                  </div>

                 
        <Container className='mt-5'>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="mb-3">Welcome to Section 1</h1>
              <p className="lead mb-3">
                This is the first section of your home page.
              </p>
              <p>
                <Button variant="primary">Order Now details</Button>
              </p>
            </Col>
            <Col md={6}>
              <img className='w-75' src="https://4.imimg.com/data4/NE/GE/MY-3775197/03.jpg" alt="placeholder" />
            </Col>
          </Row>
        </Container>
        
        <Container className='mt-5 mb-5'>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h1>Welcome to Section 2</h1>
              <p>
                This is the second section of your home page.
              </p>
              <p>
                <Button variant="primary">Fruit Corner details</Button>
              </p>
            </Col>
            <Col>
              <img className='w-75' src="https://images.creativemarket.com/0.1.0/ps/4681414/1820/1820/m1/fpnw/wm1/kjolemayepq5soly1f88bubaqisqkjmzjzhmvchwsxdrz2zgkmudfcsedrv5sidl-.jpg?1530298613&s=3f7688a1db6f8b520af94b3852787d27" alt="placeholder" />
            </Col>
          </Row>
        </Container>
     


            </>
      );
};

export default Home;