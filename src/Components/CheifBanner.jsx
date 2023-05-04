import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const CheifBanner = ({ singleChef }) => {
  // console.log(data)

  const { picture, name, likes, num_recipes, years_of_experience } = singleChef
  return (

    <Card style={{ width: '80%' }} className='mx-auto mb-5'>
      <Card.Img style={{ width: '50%' }} className='mx-auto' variant="top" src={picture} /> 
      <Card.Body>


      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='d-flex justify-content-center align-items-center gap-2'><h4 >Name: </h4>{name}</ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center align-items-center gap-2'><h4 >Bio: </h4>China</ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center align-items-center gap-2'><h4 >Likse:</h4> {likes}</ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center align-items-center gap-2'><h4 >num_recipes: </h4> {num_recipes}</ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center align-items-center gap-2'><h4 >years_of_experience: </h4> {years_of_experience}</ListGroup.Item>
      </ListGroup>

    </Card>

  );
};

export default CheifBanner;