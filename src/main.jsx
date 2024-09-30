import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams} from'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Products,{ getProductsapi } from './Components/Products/Products.jsx'
import ProductExpand from './Components/Products/ProductExpand.jsx'
import Preloader from './Components/Preloader/Preloader.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route
      loader= {getProductsapi}
       path='' element={<Products/>}/>
        <Route path='/product/' element={<ProductExpand/>}/>
        </Route>
   
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
