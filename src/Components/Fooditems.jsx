import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheifBanner from './CheifBanner';
import Recipesection from './Recipesection';
import { Spinner } from 'react-bootstrap';

const Fooditems = () => {
      const items = useLoaderData();
      // console.log(items);
      const [chef, setChef] = useState([]);
      const [singleChef, setSinglechef] = useState({});
      const [state, setState] = useState(true);
      useEffect(() => {

            fetch("https://recipe-hunter-server-ekram2d.vercel.app/chef")
                  .then((res) => res.json())
                  .then((data) => {
                        const data1 = data.find((data1) => data1.id == items[0].id);
                        setSinglechef(data1);
                        setState(false)
                        return setChef(data)
                  })
                  .catch((error) => console.error(error))

      }, [])

      //    useEffect(()=>{
      //       console.log(chef);
      //       const data =chef.find((data)=>data.id==items[0].id);
      //       console.log(data);
      //             setSinglechef({ekram:'name'});

      //    },[])
      // console.log(singleChef);

      return (
            <div>

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

                  <h1 className='mt-5'>Chef Details</h1>


                  <CheifBanner key={singleChef.id} singleChef={singleChef}></CheifBanner>
                  <div>
                        <h1 className='mt-5'>chef recipes</h1>
                        {
                              items.map((recipe, index) => <Recipesection key={index} recipe={recipe}></Recipesection>)
                        }

                  </div>
            </div>
      );
};

export default Fooditems;