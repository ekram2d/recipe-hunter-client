import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Recipesection = ({ recipe }) => {
      console.log(recipe);
      const { recipe_name,ingredients,cooking_method,rating,      } = recipe
      return (
            <div>
                  <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
                        <Card.Header> <h5>Recipe Name: {recipe_name}</h5></Card.Header>
                        <ListGroup variant="flush">
                              <ListGroup.Item>ingredients: {
                              ingredients.map((data)=><p>{data}</p>)
                              
                              
                              }</ListGroup.Item>
                              <ListGroup.Item>cooking_method: {cooking_method}</ListGroup.Item>
                              <ListGroup.Item>rating{rating}</ListGroup.Item>
                        </ListGroup>
                  </Card>

            </div>
      );
};

export default Recipesection;