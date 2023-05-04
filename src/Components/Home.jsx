import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import ChefData from './ChefData';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Home = () => {
  const [chef, setChef] = useState([]);
  const [state, setState] = useState(true);
  useEffect(() => {
    fetch("https://recipe-hunter-server-ekram2d.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setState(false)
        return setChef(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <Slider></Slider>
     
        <h2 className='mt-5'>THe chef are</h2>
        <div className='w-100 mt-5'>{state && <><Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" /> </>}</div>
      <div className='mt-5'>
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


      <Container className='mt-5 mb-5'>
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
         <div  className='mb-5'>
         <LazyLoad height={300}  threshold={0.95}>
            <img className='w-50' src="https://4.imimg.com/data4/NE/GE/MY-3775197/03.jpg" alt="placeholder" />
            </LazyLoad>
         </div>

          
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
          <Col Col md={6} >
          <LazyLoad height={300}  threshold={0.95}>
            <img className='w-50' src="https://images.creativemarket.com/0.1.0/ps/4681414/1820/1820/m1/fpnw/wm1/kjolemayepq5soly1f88bubaqisqkjmzjzhmvchwsxdrz2zgkmudfcsedrv5sidl-.jpg?1530298613&s=3f7688a1db6f8b520af94b3852787d27" alt="placeholder" />
           
           </LazyLoad>
          </Col>
        </Row>
      </Container>



    </>
  );
};

export default Home;