import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BackspaceIcon, BeakerIcon, StarIcon } from '@heroicons/react/24/solid'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Recipesection = ({ recipe }) => {

      const { recipe_name, ingredients, cooking_method, rating } = recipe
      const [set, useSet] = useState(true);
      const handlebtn = () => {
            toast(`${recipe_name}  is your favourite food`)
            useSet(false);
      }
      return (
            <div>

                  <Card style={{ width: '90%' }} className='mx-auto mt-5 mb-5'>
                        <Card.Header> <h4>Recipe Name: {recipe_name}</h4></Card.Header>
                        <ListGroup variant="flush">
                              <ListGroup.Item><h4>ingredients:</h4>  {
                                    ingredients.map((data, index) => <p key={index}>{data}</p>)


                              }</ListGroup.Item>
                              <ListGroup.Item> <h4>cooking_method:</h4>  {cooking_method}</ListGroup.Item>

                              <div className='d-flex gap-2 align-items-center  mx-auto'>
                                    <h4>Ratting:</h4>
                                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                                    <span>{rating}</span>


                              </div>
                              <div>
                                   


                                    {set && <Button onClick={handlebtn}>Favourite</Button>}

                              </div>
                              <ToastContainer/>

                        </ListGroup>
                  </Card>

            </div>
      );
};

export default Recipesection;