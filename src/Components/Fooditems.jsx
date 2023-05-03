import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Fooditems = () => {
      const items=useLoaderData();
      console.log(items);
      return (
            <div>
                  this is food:{items.length}
            </div>
      );
};

export default Fooditems;