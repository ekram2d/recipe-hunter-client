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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  children:[{
    path:'/',
    element:<Home></Home>

  },
  {
    path:"/items/:id",
    element:<Fooditems></Fooditems>,
    loader:({params})=>fetch(`http://localhost:5000/items/${params.id}`)

  },
  
  {
    path:'/login',
    element:<Login></Login>

  }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
