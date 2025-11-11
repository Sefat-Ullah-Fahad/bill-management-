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
import PrivateRoute from './Routes/PriveteRoute.jsx';
import BillDetails from './Component/DetailsPage/BillDetails.jsx';


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
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/payBills',
        // /:id
        element: <PrivateRoute>
          <MyPayBills></MyPayBills>
        </PrivateRoute>
      },
      {
        path:"/bill/:id",
        element: <PrivateRoute>
          <BillDetails></BillDetails>
        </PrivateRoute>
      }
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


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import RootLayOut from './LayOut/RootLayOut.jsx';
// import Home from './Component/Home/Home.jsx';
// import Bills from './Component/Bills/Bills.jsx';
// import MyPayBills from './Component/MyPayBills/MyPayBills.jsx';
// import Login from './Component/Authintication/Login.jsx';
// import Register from './Component/Authintication/Register.jsx';
// import AuthProvider from './Context/AuthProvider.jsx';
// import PrivateRoute from './Routes/PriveteRoute.jsx';
// import NotFound from './Component/Shared/NotFound.jsx'; // 404 page
// // import BillDetails from './Component/Bills/BillDetails.jsx'; // Bill Details page
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayOut />, // Must use element
//     children: [
//       { index: true, element: <Home /> },
//       { path: '/bills', element: <Bills /> },
//       { path: '/bill/:id', element: <PrivateRoute><Billsd /></PrivateRoute> }, // Private Bill Details
//       { path: '/payBills', element: <PrivateRoute><MyPayBills /></PrivateRoute> },
//       { path: '/login', element: <Login /> },
//       { path: '/register', element: <Register /> },
//       { path: '*', element: <NotFound /> } // Catch-all 404
//     ]
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>
// );
