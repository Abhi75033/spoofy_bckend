import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";
import border from "../../assets/borders.jpg";
import { PaymentOutlined } from "@mui/icons-material";
import { IoCashOutline } from "react-icons/io5";
import { FaStripe } from "react-icons/fa";
import {loadStripe} from '@stripe/stripe-js';
import '../../App.css'
import { json, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function Payment() {
  const [cart, setCart] = useState([]);
  const [sums, setSum] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [addresses, setAddress] = useState([]);
  const [mode,setMode] = useState('')
  const navigate = useNavigate()

  const cartproducts = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/api/v1/cart/cart`,
        { withCredentials: true }
      );
      const data = resp.data.message;

      const productDetailsPromises = data.map(async (item) => {
        console.log(item);
        const resp = await axios.get(
          `http://localhost:3000/api/v1/cart/${item.ProductId}`
        );
        let product = resp.data.data;
        product.size = item.size;
        return product;
      });

      const productDetails = await Promise.all(productDetailsPromises);
      setCart(productDetails);
      let sum = 0;
      const total = productDetails.map((item) => {
        return (sum += item.Price);
      });
      let sum2 = 0;
      const discoundetTotal = productDetails.map((item) => {
        return (sum2 += item.Discounted_Price);
      });

      setSum(sum);
      setDiscount(sum2);
    } catch (error) {
      console.log(error);
    }
  };

  const BillingAddress = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/api/v1/product/", {
        withCredentials: true,
      });
      setAddress(resp.data.data.address);
    } catch (error) {
      console.log(error);
    }
  };





  const MakePayment = async() =>{
      const stripe = await loadStripe('pk_test_51PXj5VEr6OXv0wrzLZfAfMYmy8Eys3KajrzM1Ljj5N8IjIuFCXJEoqjtQk4eFStsvlw6KrSZhiNDTogqB5FrjVLM00vSfLUhY7')

      const body ={
        Products:cart
      }
      const headers = {
        "Content-Type":"application/json"
      }

      const response = await fetch
      ('http://localhost:3000/api/v1/product/checkout-payment-page',
       {
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
       }
      )

      const session = await response.json()

      console.log(session);

      const result = stripe.redirectToCheckout({
        sessionId:session.id
      })

      

      if(result.error){
        console.log(error)
      }

    }

    const handlePaymets = ()=>{
      if (mode=='COD') {
        navigate('/payment/success')
      }else if(mode =='Stripe'){
        MakePayment()
      }else{
        toast.error('Please Slect Mode of Payment')
      }
    }




  useEffect(() => {
    cartproducts();
    BillingAddress();
    
  }, []);

  return (
    <>
      <div className="container-fluid pb-5 ">
        <div className="col mt-5 border border-2 p-2 ms-2  ">
          <h3 className="p-2 bg-dark text-light text-center ">
            MAKE YOUR PURCHASE DONE
          </h3>
          <div className="border p-2">
            <h4 className="text-primary">Billing Details:</h4>
            {addresses.map((item) => (
              <div>
             
                  <h4 className="">Name: &nbsp;&nbsp;<span className="fw-light">{item.name}</span> </h4>
                  <h4  style={{marginTop:'-.5%'}} className="">City:
                     &nbsp;&nbsp;<span className="fw-light">{item.City}</span> </h4>
                  <h4  style={{marginTop:'-.5%'}} className="">Address:
                     &nbsp;&nbsp;<span className="fw-light">{item.Street_Address}</span>,
                     <span className="fw-light">{item.City}</span>, 
                     <span className="fw-light">{item.State}</span>
                      </h4>
                 
                
              </div>
            ))}
          </div>
          {cart.map((item) => (
            <div className="mt-2 d-flex gap-3 border p-1">
              <img src={item.image[0]} width="100" />
              <div>
                <h6 className="Mulish fs-5 me-1 mt-2">{item.name}</h6>
                <h6 className="Mulish fs-5 me-1 mt-2 text-success">
                  ₹{item.Price} &nbsp;
                  <span className="fs-6 text-decoration-line-through text-warning">
                    {item.Discounted_Price}
                  </span>
                </h6>
                <button className="p-2 fs-6">size:{item.size}</button>
                <button className="p-2 fs-6 ms-2">Qty:1</button>
              </div>
            </div>
          ))}
            <div className="border mt-2 p-2">
              <h3>Payment Methods </h3>

              <div>
                <label className="fs-5"  ><IoCashOutline className="text-success"/>
                 &nbsp; Cash On Delivery (COD) </label>
            &nbsp;&nbsp;  &nbsp;&nbsp; <input onChange={(e)=>setMode(e.target.value)} name="payemnt" 
            className="fs-5"  type="radio" value='COD'/>
              </div>
              <div className="mt-3">
                <label className="fs-5"  >
                  <IoCashOutline className="text-success"/>  &nbsp;Pay Using <FaStripe className="text-primary" style={{fontSize:'3rem'}}/> </label>
            &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;
            <input onChange={(e)=>setMode(e.target.value)}
             name="payemnt" className="fs-5"  type="radio" value='Stripe'/>
              </div>

            </div>
        </div>
        <button onClick={handlePaymets} class="cssbuttons-io-button mt-2">
Complete Your Order
  <div class="icon ">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
      </div>
    <ToastContainer/>
    </>
  );
}

export default Payment;
