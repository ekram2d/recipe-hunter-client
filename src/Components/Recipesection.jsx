import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BackspaceIcon, BeakerIcon,StarIcon } from '@heroicons/react/24/solid'


const Recipesection = ({ recipe }) => {
     
      const { recipe_name,ingredients,cooking_method,rating} = recipe
      return (
            <div>
                  <Card style={{ width: '90%' }} className='mx-auto mt-5'>
                        <Card.Header> <h5>Recipe Name: {recipe_name}</h5></Card.Header>
                        <ListGroup variant="flush">
                              <ListGroup.Item>ingredients: {
                              ingredients.map((data,index)=><p key={index}>{data}</p>)
                              
                              
                              }</ListGroup.Item>
                              <ListGroup.Item>cooking_method: {cooking_method}</ListGroup.Item>
                              
                              <div className='d-flex mx-auto'>
                             Rating:  <StarIcon  style={{width:'20px',color:'yellow'} } />
                             <StarIcon  style={{width:'20px',color:'yellow'} } />
                             <StarIcon  style={{width:'20px',color:'yellow'} } />
                             <StarIcon  style={{width:'20px',color:'yellow'} } />
                              </div>
                              
                        </ListGroup>
                  </Card>

            </div>
      );
};

export default Recipesection;