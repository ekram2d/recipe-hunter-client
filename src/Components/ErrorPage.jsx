import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const { error, status } = useRouteError()
      return (
            <div>
                  
                  <div>
                        <img className='w-25' src="https://neurolink.company/cms/wp-content/uploads/2017/07/canstockphoto24393658-human-error.jpg"></img>
                        </div>
                        <p className='text-danger'>
            {error?.message}
          </p>
                        <Link
                              to='/'
                              className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                        >
                              Back to homepage
                        </Link>
                 
            </div>
      );
};

export default ErrorPage;