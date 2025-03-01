import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Main from './Components/Main/Mian.jsx'
import SignUp from './Components/Login_or_Signup/SignUp.jsx'
import Modal from './Components/Modal.jsx'
import Login from './Components/Login_or_Signup/Login.jsx'
import Sidebar from './Components/Coursel/Sidebar.jsx'
import Mens from './Components/Mens/Mens.jsx'
import ProductDetails from './Components/Product_Details/Product.Details.jsx'
import Card1 from './Components/Cards/sample.jsx'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart/Cart.jsx'
import NotFound from './Components/Nothing&404/Not_found(404).jsx'
import Address from './Components/Cart/Address.jsx'
import Payment from './Components/Cart/Payment.jsx'
import Success from './Components/Success&Failure/Success.jsx'
import Failure from './Components/Success&Failure/Failure.jsx'
import MensFaison from './Components/Category.jsx/Mens/Mens.jsx'
import OverSized from './Components/Category.jsx/Mens/Mes_Category_Page/OverSized.jsx'
import Orders from './Order/Oderders.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Main/>}/>
      <Route path='/loginpage' element={<Modal/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' >
      <Route path='mens' element={<Mens/>}/>
     
      </Route>
    
      <Route path='/home/product/details/:product_id' element={<ProductDetails/>}/>
      <Route path='/home/product/details/cart/:product_id' element={<Cart/>}/>
      <Route path='/home/cart' element={<Cart/>}/>
      <Route path ='address' element={<Address/>}/>
      <Route path='/confirm/paymentgateway' element={<Payment/>}/>
      <Route path='/payment/success' element={<Success/>}/>
      <Route path='/payment/failure' element={<Failure/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='home/mens' element={<MensFaison/>}>
      <Route path='oversized' element={<OverSized/>}/>
      

    </Route>
    <Route path='/myorders' element={<Orders/>}/>
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
