import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './component/Layout/Main';
import ErrorPage from './component/ErrorPage/ErrorPage';
import HomePage from './component/HomePage/HomePage';
import About from './component/About/About';
import OrderReview from './component/OrderRvw/OrderReview';
import Contact from './component/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/order",
        element: <OrderReview></OrderReview>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
