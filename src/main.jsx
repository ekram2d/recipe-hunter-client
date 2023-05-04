import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Fooditems from './Components/Fooditems.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Components/Register.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  children:[{
    path:'/',
    element:<Home></Home>

  },
  {
    path:"/items/:id",
    element:<PrivateRoute><Fooditems></Fooditems></PrivateRoute>,
    loader:({params})=>fetch(`https://recipe-hunter-server-ekram2d.vercel.app/items/${params.id}`)

  },
  
  {
    path:'/login',
    element:<Login></Login>

  },
  {
    path:'/register',
    element:<Register></Register>

  }


]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
