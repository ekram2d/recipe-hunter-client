import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefData = ({ data }) => {
  // console.log(data);
  const { id, name, likes, picture, num_recipes, years_of_experience } = data

  return (


    <>



      <Card className=' mx-auto mb-5 '>

        <LazyLoad height={300}  threshold={0.95}>
          <Card.Img className='w-100 mx-auto' variant="top" src={picture} style={{ height: '96%', width: '90%' }} />
        </LazyLoad>
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
        <Link to={`/items/${id}`}><Button>View Recipes</Button></Link>
      </Card>



    </>
  );
};

export default ChefData;