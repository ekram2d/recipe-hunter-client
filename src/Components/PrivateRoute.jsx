

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
      const location=useLocation();
      const navigation=useNavigate();
      const {user,loading} =useContext(AuthContext);
      if(loading){
            return <p className='text-danger'>Loading......</p>
        }
      if(user){
            return children;

      }
      
      return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;