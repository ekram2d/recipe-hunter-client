import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheifBanner from './CheifBanner';
import Recipesection from './Recipesection';

const Fooditems = () => {
      const items=useLoaderData();
      // console.log(items);
      const [chef, setChef] = useState([]);
      const [singleChef,setSinglechef]=useState({});
      useEffect(() => {
            fetch("http://localhost:5000/chef")
                  .then((res) => res.json())
                  .then((data) => setChef(data))
                  .catch((error) => console.error(error))
      }, [])
const data =chef.find((data)=>data.id==items[0].id);
// console.log(chef);

      return (
            <div>
                  this is food:{items.length}


                  {/* <CheifBanner key={items[0].id} data={data}></CheifBanner> */}
                 {
                items.map((recipe)=><Recipesection key={recipe.id} recipe={recipe}></Recipesection>)
               }

            </div>
      );
};

export default Fooditems;