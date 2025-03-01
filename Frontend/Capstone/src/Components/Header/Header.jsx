import logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import "../../App.css";
import { BiHeart, BiUser } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Modal from "../Modal.jsx";
import { CgProfile } from "react-icons/cg";
import { Login, Logout } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// import { Dropdown, Menu } from 'semantic-ui-react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBasketShopping, FaJediOrder } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
// import image6 from '../../assets/image6.jpg'
import { useCookies } from "react-cookie";
import axios from "axios";
import Sidebar from "../Coursel/Sidebar.jsx";

function Header() {
  const navigate = useNavigate();
  const [drop, setDrop] = useState(false);
  const [user, setUser] = useState(false);
  const data = localStorage.getItem("user");
  const [carts,setcart]=useState([])
  const setdrop = () => {
    if (drop == false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  const Auth = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/v1/users/checkauth",
        null,
        { withCredentials: true }
      );
      console.log("resp", resp.status);
      if (resp.status == 200) {
        setUser(true);
      } else {
        setUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hadleLogout = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/v1/users/logout",
        null,
        { withCredentials: true }
      );
      if (resp.status == 200) {
        setUser(false)
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handledrop = () => {
    navigate("/login");
    setDrop(false);
  };


  const cart = async()=>{
    try {
        const resp = await axios.get(
          `http://localhost:3000/api/v1/product/cart`,
          { withCredentials: true }
        );
        const data = resp.data.message;
        setcart(data)
        
    } catch (error) {
      console.log(error);
    }
  }

  
console.log(user);


  useEffect(() => {

   Auth()
   cart()
    console.log('state Updated',user);
  }, [user]);

  return (
    <>
      <div
        style={{ width: "100%", position: "sticky", top: "0px", zIndex: "1" }}
        className="container-fluid index
       d-flex align-items-center justify-content-between
        bck p-2"
      >
        <div className="d-flex">
          <Sidebar />
          <img
            src={logo}
            width="90"
            className="curs image2"
            onClick={() => navigate("/")}
          />
          <ul className=" resp list-unstyled gap-3 ms-5 mt-3 fw-bold Aus ">
            <li style={{cursor:'pointer'}} onClick={()=>navigate('home/mens')} >Mens</li>
            <li style={{cursor:'pointer'}}>Womens</li>
            <li style={{cursor:'pointer'}}>Childrens</li>
          </ul>
        </div>
        <div className="float-lg-end d-flex align-items-center">
          <div className="fsg">
            <input
              type="text"
              placeholder="What are you looking for...."
              className="p-1 ps-5   rounded-2 border-1 bg"
            />
            <IoIosSearch className="fs-5 se" />
          </div>
          <div className="fs">
            <IoIosSearch className="fs-2  resp1" />
            <BiHeart className="fs-2 ms-2" />

            <BiUser onClick={setdrop} className=" resp fs-2 ms-2 curs " />
            <IoMdArrowDropdown className="resp" />

            {/* <CiShoppingCart className="fs-2 ms-3 me-2 bsg" /> */}

          <span> <FaBasketShopping
             style={{cursor:'pointer',marginRight:'-10%'}} 
             onClick={()=>navigate('/home/cart')} className="fs-2 fw-bolder ms-1  " />
            </span> 
          </div>
        </div>
      </div>
      {drop && (
        <div className="dropdowns">
          <ul className="list-unstyled ">
            {user && (
              <li onClick={()=>setDrop(false)}>
                <FaBox className="fs-3" />{" "}
                <Link to='/myorders' className="text-decoration-none text-dark Roboto ms-1">
                  My Orders
                </Link>
              </li>
            )}

           {
            user?
            <li className="mt-2 curs"><Login className="fs-3"/>
             <Link to='/' onClick={hadleLogout} className="text-decoration-none text-dark Roboto ms-1 ">Logout</Link></li>
             : 
             <li className="mt-2 curs"><Logout className="fs-3"/>
             <Link to='/login' onClick={handledrop}
              className="text-decoration-none text-dark Roboto ms-1 ">Login</Link></li>
                 }       
            {/* {
            user? 
            <li className="mt-2 curs"><Login className="fs-3"/>
             <Link to='/' onClick={hadleLogout} className="text-decoration-none text-dark Roboto ms-1 ">Logout</Link></li>
            :  <li className="mt-2 curs"><Logout className="fs-3"/>
             <Link to='/login' onClick={handledrop}
              className="text-decoration-none text-dark Roboto ms-1 ">Login</Link></li>
          } */}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
