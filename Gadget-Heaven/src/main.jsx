import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About';
import AuthProvider from './components/Context/AuthProvider';
import Details from './components/Details/Details';
import Cart from './components/Dashboard/Cart';
import Wishlist from './components/Dashboard/Wishlist';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {

        path:"/about",
        element:<About></About>
      },
      {
        path:"/details",
        element:<Details></Details>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path:"/wishlist",
        element:<Wishlist></Wishlist>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
