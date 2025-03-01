import { useNavigate, useParams } from "react-router-dom";
import React, { Component, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { PiHandSwipeLeft } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Styles.css";
import "../../App.css";

// import required modules
import { EffectCards } from "swiper/modules";
import axios from "axios";
import { Star } from "@mui/icons-material";
import { TbRuler2Off } from "react-icons/tb";
// import Example from "./example";

function ProductDetails() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [sizes, setSize] = useState("");
  const [checkLogin,setCheckLogin] = useState(false)
  const [resp,setResp] =useState(false)
  const { product_id } = useParams();
  const naviage = useNavigate()

  const Auth = async()=>{
    try {
        const resp = await axios.post('http://localhost:3000/api/v1/users/checkauth'
            ,null,{withCredentials:true})
        if (resp.status == 200) {
            setCheckLogin(true)
        }
    } catch (error) {
        console.log(error);
    }
  }

  const cart = async()=>{
    try {
        const resp = await axios.post(`http://localhost:3000/api/v1/product/addtocart/${product_id}`,
            {size:sizes},{withCredentials:true})
            console.log('status',resp.status);
        if(resp.status == 201){
           
            naviage(`/home/product/details/cart/${product_id}`)
            setResp(true)
        }
        
    } catch (error) {
        console.log(error);
    }
  }
  console.log(checkLogin);

  const AddtoCart = async()=>{
 if(sizes !='' && checkLogin !=false){
  cart()
     }else if(sizes == ""){
      toast.error('Please Slect the size first')
    }else if(checkLogin == false){
      naviage('/login')
    }
    else{
      toast.error('item is Already in your')
    }
  }

  // Vertical coursel

  

  

  const getProduct = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/api/v1/product/${product_id}`
      );

      setData(resp.data.data.image);
      setData1(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    Auth()
  }, []);

  return (
    <div className="container-fluid pb-2">
      <div className="row row-cols-auto mt-4">
        <div className="col ffffs">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
          >
            {data.map((item) => (
              <SwiperSlide>
                <img src={item} width="200" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <p className="fs-5 resp">
              Swipe left for next <PiHandSwipeLeft className="fs-4" />
            </p>
          </div>
        </div>
        <div className="col dtms ">
          <h3 className="mt-2 fw-bold fs-2 Playfair pdsss resp">Tryme®</h3>
          <h2 className="fsh">{data1.name}</h2>
          <p className="dds">{data1.Description}</p>
          <p className=" p rounded-pill">
            &nbsp;4.5 <Star className="rpd fs-5" />{" "}
          </p>

          <div></div>
          <div className="">
            <div className="d-flex fw-bold  ">
              <h2 className="fs-2">₹{data1.Price}</h2>
              <div className="d">
                <h5 className="ms-1 text-decoration-line-through fs-6">
                  ₹{data1.Discounted_Price}
                </h5>
                <h4
                  style={{ marginTop: "-8%" }}
                  className=" ms-2 fw-bold fs-5 text-success"
                >
                  {Math.floor(
                    ((data1.Discounted_Price - data1.Price) /
                      data1.Discounted_Price) *
                      100
                  )}
                  % OFF
                </h4>
              </div>
            </div>
            <p className="ioat">inclsive of all taxes</p>
            {data1.Category !== "" && (
              <h4 className="bg-secondary cpd">{data1?.Category}</h4>
            )}

            <div>
              <hr></hr>
              <p>
                Be a tryme member and get extra discount <b>₹50</b> and
                freeshiping
                <a href="#"> Learn more</a>
              </p>
              <hr></hr>
            </div>

            <div>
            <div class="radio-input">
  <input onChange={(e)=>setSize(e.target.value)} value="S" 
  name="value-radio" id="value-1" type="radio"/>
  <label  for="value-1" >&nbsp;&nbsp;S&nbsp;&nbsp;</label>
  <input onChange={(e)=>setSize(e.target.value)} value="M" name="value-radio" id="value-2" type="radio"/>
  <label for="value-2">&nbsp;&nbsp;M&nbsp;&nbsp;</label>
  <input onChange={(e)=>setSize(e.target.value)} value="L" name="value-radio" id="value-3" type="radio"/>
  <label  for="value-3">&nbsp;&nbsp;L&nbsp;&nbsp;</label>
  <input onChange={(e)=>setSize(e.target.value)} value="XL" name="value-radio" id="value-4" type="radio"/>
  <label for="value-4">&nbsp;&nbsp;XL&nbsp;&nbsp;</label>
  <input onChange={(e)=>setSize(e.target.value)} value="XXL" name="value-radio" id="value-5" type="radio"/>
  <label for="value-5">&nbsp;&nbsp;XXL&nbsp;&nbsp;</label>
</div>

              <div className="row row-cols-auto  mt-4">
                <div className="col">
                  <button onClick={AddtoCart} class="CartBtn">
                    <span class="IconContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="rgb(17, 17, 17)"
                        class="cart"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                      </svg>
                    </span>
                    <p class="text">Add to Cart</p>
                  </button>
                </div>
                
                
              </div>

            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
   
    </div>
  );
}

export default ProductDetails;
