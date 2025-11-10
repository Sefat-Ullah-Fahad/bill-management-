import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './LayOut/RootLayOut.jsx';
import Home from './Component/Home/Home.jsx';
import Bills from './Component/Bills/Bills.jsx';
import MyPayBills from './Component/MyPayBills/MyPayBills.jsx';
import Login from './Component/Authintication/Login.jsx';
import Register from './Component/Authintication/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/bills',
        Component: Bills
      },
      {
        path: '/payBills',
        Component: MyPayBills
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
