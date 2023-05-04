

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
      const location=useLocation();
      const navigation=useNavigate();
      const {user} =useContext(AuthContext);
      if(user){
            return children;

      }
      
      return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;