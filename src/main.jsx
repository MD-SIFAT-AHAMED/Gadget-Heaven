import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ProductSection from './Components/ProductSection/ProductSection.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details/:productId',
        loader:(()=> fetch('laptopsData.json')),
        element:<ProductDetails></ProductDetails>
      }
  
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
