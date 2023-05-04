import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BackspaceIcon, BeakerIcon, StarIcon } from '@heroicons/react/24/solid'


const Recipesection = ({ recipe }) => {

      const { recipe_name, ingredients, cooking_method, rating } = recipe
      return (
            <div>

                  <Card style={{ width: '90%' }} className='mx-auto mt-5 mb-5'>
                        <Card.Header> <h4>Recipe Name: {recipe_name}</h4></Card.Header>
                        <ListGroup variant="flush">
                              <ListGroup.Item><h4>ingredients:</h4>  {
                                    ingredients.map((data, index) => <p key={index}>{data}</p>)


                              }</ListGroup.Item>
                              <ListGroup.Item> <h4>cooking_method:</h4>  {cooking_method}</ListGroup.Item>

                              <div className='d-flex  mx-auto'>
                                    <h4>Ratting:</h4>
                                    {
                                          ingredients.map((data, index) => <p key={index}><StarIcon style={{ width: '20px', color: 'yellow' }} /></p>)
                                    }

                              </div>
                              <div>
                                    <Button>Favourite</Button>
                              </div>

                        </ListGroup>
                  </Card>

            </div>
      );
};

export default Recipesection;