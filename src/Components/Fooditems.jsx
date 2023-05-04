import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheifBanner from './CheifBanner';
import Recipesection from './Recipesection';

const Fooditems = () => {
      const items = useLoaderData();
      // console.log(items);
      const [chef, setChef] = useState([]);
      const [singleChef, setSinglechef] = useState({});
      useEffect(() => {

            fetch("http://localhost:5000/chef")
                  .then((res) => res.json())
                  .then((data) => {
                        const data1 = data.find((data1) => data1.id == items[0].id);
                        setSinglechef(data1);
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
                  <h1 className='mt-5'>Banner section</h1>


                  <CheifBanner key={singleChef.id} singleChef={singleChef}></CheifBanner>
                  <div>
                        <h1 className='mt-5'>Recipe section</h1>
                        {
                              items.map((recipe, index) => <Recipesection key={index} recipe={recipe}></Recipesection>)
                        }

                  </div>
            </div>
      );
};

export default Fooditems;