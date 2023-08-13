import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home.jsx';
import Account from './Pages/Account.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/account',
        element:<Account></Account>
      
       }
      ,
      ,
      {
        path:'/login',
        element:<Login></Login>
      
       }
      ,
      {
        path:'/Register',
        element:<Registration></Registration>
      
       }
    ]
    
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
