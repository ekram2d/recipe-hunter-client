import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import ChefData from './ChefData';
import { Row } from 'react-bootstrap';

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
                  <Row xs={1} md={2} className="">
                       
                 

                        {
                              chef.map((data) =>
                                    <Row xs={1} md={2} className="">
                                          <ChefData key={data.id} data={data}></ChefData>
                                    </Row>

                              )
                        }
                  </Row>
                  </div>


            </>
      );
};

export default Home;