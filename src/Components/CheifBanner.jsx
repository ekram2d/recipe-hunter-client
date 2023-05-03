import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const CheifBanner = ({ data }) => {
      // console.log(data)

      const {picture,name, likes, num_recipes, years_of_experience } = data
      return (
      
        <Card style={{ width: '80%' }} className='mx-auto mb-5'>
      <Card.Img style={{width:'50%'}} className='mx-auto' variant="top" src={picture} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: {name}</ListGroup.Item>
        <ListGroup.Item>Bio: China</ListGroup.Item>
        <ListGroup.Item>Likse: {likes}</ListGroup.Item>
        <ListGroup.Item>num_recipes: {num_recipes}</ListGroup.Item>
        <ListGroup.Item>years_of_experience: {years_of_experience}</ListGroup.Item>
      </ListGroup>
     
    </Card>
        
      );
};

export default CheifBanner;