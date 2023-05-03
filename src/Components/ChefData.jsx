import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefData = ({ data }) => {
      console.log(data);
      const { id, name, likes, picture, num_recipes, years_of_experience } = data

      return (
          

<>

            
          
                <Card className='w-100 g-4 mx-auto '>
                  <Card.Img className='w-50 mx-auto' variant="top" src={picture} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    years_of_experience: {years_of_experience}
                    </Card.Text>
                    <Card.Text>
                    num_recipes: {num_recipes}
                    </Card.Text>
                    <Card.Text>
                    Likes: {likes}
                    </Card.Text>
                  </Card.Body>
                  <Link><Button>View Recipes Button</Button></Link>
                </Card>
          
      

      </>
      );
};

export default ChefData;